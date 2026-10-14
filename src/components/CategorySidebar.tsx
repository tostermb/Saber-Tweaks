import { useState } from 'react';
import type { Category, Subcategory, Mod, Model, ModelSubcategory } from '../types';
import { modCategories } from '../data/mods';
import { modelCategories } from '../data/models';
import './CategorySidebar.css';

interface CategorySidebarProps {
  viewMode: 'mods' | 'models';
  selectedItems: (Mod | Model)[];
  onItemClick: (item: Mod | Model) => void;
  hasConflict: (item: Mod | Model) => boolean;
  getConflictMessage: (item: Mod | Model) => string;
}

export function CategorySidebar({
  viewMode,
  selectedItems,
  onItemClick,
  hasConflict,
  getConflictMessage
}: CategorySidebarProps) {
  const categories: Category[] = viewMode === 'mods' ? modCategories : (modelCategories as unknown as Category[]);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(categories.filter((c: Category) => c.expanded).map((c: Category) => c.id))
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  const isSelected = (item: Mod | Model) => {
    return selectedItems.some(selected => selected.id === item.id);
  };

  const renderSubcategories = (subcategories: (Subcategory | ModelSubcategory)[], categoryId: string) => {
    return subcategories.map((subcategory) => {
      const items = 'mods' in subcategory ? subcategory.mods : subcategory.models;
      const selectedCount = items.filter(item => isSelected(item)).length;
      const totalCount = items.length;

      return (
        <div key={`${categoryId}-${subcategory.id}`} className="subcategory">
          <div className="subcategory-header">
            <span className="subcategory-name">{subcategory.name}</span>
            <span className="subcategory-count">{selectedCount}/{totalCount}</span>
          </div>
          <div className="subcategory-grid">
            {items.map(item => (
              <div
                key={item.id}
                className="card-wrapper"
                onClick={() => onItemClick(item)}
              >
                <div
                  className={`mod-card ${isSelected(item) ? 'selected' : ''} ${hasConflict(item) ? 'conflict' : ''}`}
                  title={hasConflict(item) ? getConflictMessage(item) : ''}
                >
                  <div className="card-image-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-image"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjM0E0MDQ4Ii8+Cjx0ZXh0IHg9IjY0IiB5PSI2OCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjN0E4NDk2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5ObyBJbWFnZTwvdGV4dD4KPC9zdmc+';
                      }}
                    />
                    {('isCore' in item && item.isCore) && <span className="core-badge">CORE</span>}
                    {(viewMode === 'models' && 'requires' in item && (item.requires || []).length > 0) && (
                      <span className="requires-badge">Requires: {item.requires!.join(', ')}</span>
                    )}
                  </div>
                  <div className="card-info">
                    <h3 className="card-title">{item.name}</h3>
                    <p className="card-description">{item.description}</p>
                    {('version' in item && item.version) && <span className="card-version">v{item.version}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="category-sidebar">
      <div className="sidebar-header">
        <h2>{viewMode === 'mods' ? 'Mods' : 'Custom Models'}</h2>
        <div className="view-toggle">
          <button
            className={viewMode === 'mods' ? 'active' : ''}
            onClick={() => window.dispatchEvent(new CustomEvent('view-mode-change', { detail: 'mods' }))}
          >
            Mods
          </button>
          <button
            className={viewMode === 'models' ? 'active' : ''}
            onClick={() => window.dispatchEvent(new CustomEvent('view-mode-change', { detail: 'models' }))}
          >
            Custom Models
          </button>
        </div>
      </div>

      <div className="categories-list">
        {categories.map(category => (
          <div key={category.id} className="category">
            <button
              className="category-header"
              onClick={() => toggleCategory(category.id)}
            >
              <span className="category-name">{category.name}</span>
              <span className={`expand-icon ${expandedCategories.has(category.id) ? 'expanded' : ''}`}>
                ▼
              </span>
            </button>
            {expandedCategories.has(category.id) && (
              <div className="category-content">
                {renderSubcategories(category.subcategories, category.id)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}