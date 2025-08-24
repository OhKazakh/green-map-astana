import React, { useState, useCallback } from 'react';
import { MATERIAL_OPTIONS, MATERIAL_ICONS, MATERIAL_LABELS, STRINGS } from '../constants/mapConstants';
import './Map.css';
import { Lang } from '../data/translations';

interface Props {
  lang: Lang;
  selectedMaterials: string[];
  selectMaterial: (material: string) => void;
  theme: 'dark' | 'light';
}

const MobileFilterFab: React.FC<Props> = ({ lang, selectedMaterials, selectMaterial, theme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pos] = useState({ x: 16, y: 20 });

  const handleMaterialToggle = (material: string) => {
    selectMaterial(material);
  };

  const handleSelectAll = () => {
    if (selectedMaterials.length === MATERIAL_OPTIONS.length) {
      MATERIAL_OPTIONS.forEach(material => {
        if (selectedMaterials.includes(material)) {
          selectMaterial(material);
        }
      });
    } else {
      MATERIAL_OPTIONS.forEach(material => {
        if (!selectedMaterials.includes(material)) {
          selectMaterial(material);
        }
      });
    }
  };

  const allSelected = selectedMaterials.length === MATERIAL_OPTIONS.length;
  const selectAllText = allSelected ? STRINGS[lang].deselectAll : STRINGS[lang].selectAll;

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    e.stopPropagation();
    
    if (!isExpanded) {
      setIsExpanded(true);
    }
  }, [isExpanded]);

  const closePanel = useCallback(() => {
    setIsExpanded(false);
  }, []);

  React.useEffect(() => {
    if (isExpanded) {
      const handleClickOutside = (e: Event) => {
        const target = e.target as Element;
        
        const isOutsidePanel = !target.closest('[data-filter-panel]');
        
        const isOnMap = target.closest('.google-map') || 
                       target.closest('[role="application"]') ||
                       target.closest('.gm-style') ||
                       target.closest('.gm-fullscreen-control') ||
                       target.closest('.gm-svpc') ||
                       target.closest('.gm-control-active');
        
        const isOnBlankSpace = target === document.body || 
                              target === document.documentElement ||
                              target.tagName === 'BODY' ||
                              target.tagName === 'HTML';
        
        if (isOutsidePanel || isOnMap || isOnBlankSpace) {
          closePanel();
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside, true);
      document.addEventListener('touchstart', handleClickOutside, true);
      document.addEventListener('click', handleClickOutside, true);
      
      const handleCustomClose = () => closePanel();
      window.addEventListener('closeFilterPanel', handleCustomClose);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside, true);
        document.removeEventListener('touchstart', handleClickOutside, true);
        document.removeEventListener('click', handleClickOutside, true);
        window.removeEventListener('closeFilterPanel', handleCustomClose);
      };
    }
  }, [isExpanded, closePanel]);

  return (
    <div
      className="mobile-filter-fab"
      style={{
        left: pos.x,
        top: pos.y,
      }}
    >
      {isExpanded ? (
        <div
          data-filter-panel
          onClick={(e) => e.stopPropagation()}
          className="mobile-filter-panel"
        >
          <div className="mobile-filter-header">
            <span className="mobile-filter-title">{STRINGS[lang].filter}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              className="mobile-filter-close"
            >
              ×
            </button>
          </div>
          <div className="mobile-filter-grid">
            <div
              className={`mobile-filter-option select-all ${allSelected ? 'selected' : ''} ${theme}`}
              onClick={handleSelectAll}
            >
              <div className="mobile-filter-option-content">
                <img 
                  src="/icons/all.png" 
                  alt="Select all"
                  className={`mobile-filter-option-icon ${theme}`}
                />
                <span className="mobile-filter-option-label">
                  {selectAllText}
                </span>
              </div>
            </div>
            
            {MATERIAL_OPTIONS.map((material) => {
              const isSelected = selectedMaterials.includes(material);
              const label = MATERIAL_LABELS[lang][material as keyof typeof MATERIAL_LABELS[typeof lang]] || material;
              
              return (
                <div
                  key={material}
                  className={`mobile-filter-option ${isSelected ? 'selected' : ''} ${theme}`}
                  onClick={() => handleMaterialToggle(material)}
                >
                  <div className="mobile-filter-option-content">
                    <img 
                      src={MATERIAL_ICONS[material]} 
                      alt={label}
                      className={`mobile-filter-option-icon ${theme}`}
                    />
                    <span className="mobile-filter-option-label">
                      {label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <button
          onPointerDown={onPointerDown}
          onClick={(e) => e.stopPropagation()}
          className={`mobile-filter-button ${theme}`}
          aria-label="Filter materials"
        >
          <img 
            src="/icons/settings.png" 
            alt="Filter materials"
            className={`mobile-filter-button-icon ${theme === 'light' ? 'light' : ''}`}
          />
        </button>
      )}
    </div>
  );
};

export default MobileFilterFab; 
