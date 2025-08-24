import React from 'react';
import './Map.css';

type Lang = 'en' | 'ru' | 'kz';

interface MapPanelProps {
  lang: Lang;
  theme: 'dark' | 'light';
  selectedMaterials: string[];
  onMaterialSelect: (material: string) => void;
  materialOptions: string[];
  materialIcons: Record<string, string>;
  materialLabels: Record<Lang, Record<string, string>>;
}

const MapPanel: React.FC<MapPanelProps> = ({
  lang,
  theme,
  selectedMaterials,
  onMaterialSelect,
  materialOptions,
  materialIcons,
  materialLabels
}) => {
  const handleMaterialToggle = (material: string) => {
    onMaterialSelect(material);
  };

  return (
    <div className={`map-panel ${theme}`}>
      <div className="map-panel-header">
        <h3 className="map-panel-title">
          {materialLabels[lang].All}
        </h3>
      </div>
      
      <div className="map-panel-content">
        <div className="map-panel-materials">
          {materialOptions.map((material) => {
            const isSelected = selectedMaterials.includes(material);
            const label = materialLabels[lang][material] || material;
            
            return (
              <label
                key={material}
                className={`map-panel-material-option ${isSelected ? 'selected' : ''} ${theme}`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleMaterialToggle(material)}
                  className="map-panel-checkbox"
                />
                <div className="map-panel-material-content">
                  <img
                    src={materialIcons[material]}
                    alt={label}
                    className="map-panel-material-icon"
                  />
                  <span className="map-panel-material-label">{label}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MapPanel;
