import React from 'react';
import './Map.css';

type Lang = 'en' | 'ru' | 'kz';

interface MapPanelProps {
  lang: Lang;
  theme: 'dark' | 'light';
  selectedMaterial: string;
  onMaterialSelect: (material: string) => void;
  materialOptions: string[];
  materialIcons: Record<string, string>;
  materialLabels: Record<Lang, Record<string, string>>;
}

const MapPanel: React.FC<MapPanelProps> = ({
  lang,
  theme,
  selectedMaterial,
  onMaterialSelect,
  materialOptions,
  materialIcons,
  materialLabels
}) => {
  return (
    <div className={`map-panel ${theme} ${lang}`}>
      <div className="map-panel-grid">
        {materialOptions.map(m => (
          <label key={m} className="map-panel-option">
            <img 
              src={materialIcons[m] ?? '/icons/all.png'} 
              alt={m}
              className={`map-panel-option-icon ${theme === 'light' ? 'light' : ''}`}
            />
            <input
              type="radio"
              checked={selectedMaterial === m}
              onChange={() => onMaterialSelect(m)}
              className="map-panel-option-input"
            />
            {materialLabels[lang][m] ?? m}
          </label>
        ))}
      </div>
    </div>
  );
};

export default MapPanel;
