import { useState, useEffect } from 'react';
import type { Mod, Model } from './types';
import { getModById } from './data/mods';
import { CategorySidebar } from './components/CategorySidebar';
import { SelectionPanel } from './components/SelectionPanel';
import './App.css';

function App() {
  const [viewMode, setViewMode] = useState<'mods' | 'models'>('mods');
  const [selectedItems, setSelectedItems] = useState<(Mod | Model)[]>([]);

  // Listen for view mode changes from sidebar
  useEffect(() => {
    const handleViewModeChange = (event: CustomEvent) => {
      setViewMode(event.detail);
      setSelectedItems([]); // Clear selection when switching modes
    };

    window.addEventListener('view-mode-change', handleViewModeChange as EventListener);
    return () => window.removeEventListener('view-mode-change', handleViewModeChange as EventListener);
  }, []);

  const isSelected = (item: Mod | Model) => {
    return selectedItems.some(selected => selected.id === item.id);
  };

  const hasConflict = (item: Mod | Model): boolean => {
    // Check for missing required mods
    if (viewMode === 'models' && 'requires' in item) {
      const requires = item.requires || [];
      const missingRequirements = requires.filter(req =>
        !selectedItems.some(selected => selected.name.toLowerCase().includes(req.toLowerCase()))
      );
      if (missingRequirements.length > 0) return true;
    }

    // Check for incompatible mods
    if ('incompatibleWith' in item && item.incompatibleWith) {
      const hasIncompatible = item.incompatibleWith.some(inc =>
        selectedItems.some(selected => selected.id === inc)
      );
      if (hasIncompatible) return true;
    }

    return false;
  };

  const getConflictMessage = (item: Mod | Model): string => {
    const messages: string[] = [];

    if (viewMode === 'models' && 'requires' in item) {
      const requires = item.requires || [];
      const missingRequirements = requires.filter(req =>
        !selectedItems.some(selected => selected.name.toLowerCase().includes(req.toLowerCase()))
      );
      if (missingRequirements.length > 0) {
        messages.push(`Requires: ${missingRequirements.join(', ')}`);
      }
    }

    if ('incompatibleWith' in item && item.incompatibleWith) {
      const incompatible = item.incompatibleWith.filter(inc =>
        selectedItems.some(selected => selected.id === inc)
      );
      if (incompatible.length > 0) {
        const incompatibleNames = incompatible.map(id => {
          const mod = getModById(id);
          return mod ? mod.name : id;
        });
        messages.push(`Incompatible with: ${incompatibleNames.join(', ')}`);
      }
    }

    return messages.join('\n');
  };

  const handleItemClick = (item: Mod | Model) => {
    setSelectedItems(prev => {
      if (isSelected(item)) {
        return prev.filter(i => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleRemoveItem = (item: Mod | Model) => {
    setSelectedItems(prev => prev.filter(i => i.id !== item.id));
  };

  const handleDone = () => {
    // In a real implementation, this would trigger the download/install process
    const itemNames = selectedItems.map(item => item.name).join(', ');
    alert(`Ready to install ${selectedItems.length} ${viewMode === 'mods' ? 'mods' : 'models'}:\n${itemNames}\n\nIn a production app, this would trigger the download and installation process.`);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <div className="logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span>Saber Tweaks</span>
          </div>
        </div>
        <div className="header-right">
          <div className="selected-count">
            {selectedItems.length} selected
          </div>
        </div>
      </header>

      <main className="app-main">
        <CategorySidebar
          viewMode={viewMode}
          selectedItems={selectedItems}
          onItemClick={handleItemClick}
          hasConflict={hasConflict}
          getConflictMessage={getConflictMessage}
        />

        <SelectionPanel
          selectedItems={selectedItems}
          onRemoveItem={handleRemoveItem}
          onDone={handleDone}
          viewMode={viewMode}
          hasConflict={hasConflict}
          getConflictMessage={getConflictMessage}
        />
      </main>
    </div>
  );
}

export default App;