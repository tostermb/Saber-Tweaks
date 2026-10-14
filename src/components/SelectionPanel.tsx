import type { Mod, Model } from '../types';
import './SelectionPanel.css';

interface SelectionPanelProps {
  selectedItems: (Mod | Model)[];
  onRemoveItem: (item: Mod | Model) => void;
  onDone: () => void;
  viewMode: 'mods' | 'models';
  hasConflict: (item: Mod | Model) => boolean;
  getConflictMessage: (item: Mod | Model) => string;
}

export function SelectionPanel({
  selectedItems,
  onRemoveItem,
  onDone,
  viewMode,
  hasConflict,
  getConflictMessage
}: SelectionPanelProps) {
  if (selectedItems.length === 0) {
    return (
      <div className="selection-panel empty">
        <div className="empty-state">
          <div className="empty-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 13c0 6.075-7.5 10-7.5 10S5 19.075 5 13" />
              <circle cx="12.5" cy="10" r="2.5" />
              <path d="M16.5 16a4 4 0 0 0-8 0" />
            </svg>
          </div>
          <h3>No {viewMode === 'mods' ? 'Mods' : 'Models'} Selected</h3>
          <p>Browse categories on the left and click items to add them here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="selection-panel">
      <div className="panel-header">
        <h2>Selected {viewMode === 'mods' ? 'Mods' : 'Models'} ({selectedItems.length})</h2>
      </div>

      <div className="selected-items">
        {selectedItems.map((item) => (
          <div key={item.id} className={`selected-item ${hasConflict(item) ? 'conflict' : ''}`}>
            <div className="item-image-container">
              <img
                src={item.image}
                alt={item.name}
                className="item-image"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjM0E0MDQ4Ii8+Cjx0ZXh0IHg9IjY0IiB5PSI2OCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjN0E4NDk2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5ObyBJbWFnZTwvdGV4dD4KPC9zdmc+';
                }}
              />
              {('isCore' in item && item.isCore) && <span className="core-badge">CORE</span>}
              {(viewMode === 'models' && 'requires' in item && (item.requires || []).length > 0) && (
                <span className="requires-badge">{item.requires!.join(', ')}</span>
              )}
            </div>

            <div className="item-info">
              <div className="item-header">
                <h3 className="item-title">{item.name}</h3>
                <button
                  className="remove-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveItem(item);
                  }}
                  aria-label="Remove item"
                  title="Remove"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <p className="item-description">{item.description}</p>
              <div className="item-meta">
                {item.version && <span className="item-version">v{item.version}</span>}
                {item.author && <span className="item-author">by {item.author}</span>}
              </div>
            </div>

            {hasConflict(item) && (
              <div className="conflict-indicator" title={getConflictMessage(item)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span className="conflict-tooltip">{getConflictMessage(item)}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="panel-footer">
        <button className="done-btn" onClick={onDone}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Done - Install {selectedItems.length} {selectedItems.length === 1 ? 'Item' : 'Items'}</span>
        </button>
      </div>
    </div>
  );
}