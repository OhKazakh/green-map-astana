import React from 'react';
import './Map.css';
import { Lang } from '../data/translations';
import { STRINGS } from '../constants/mapConstants';

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

  const handleSelectAll = () => {
    if (selectedMaterials.length === materialOptions.length) {
      onMaterialSelect('__CLEAR_ALL__');
    } else {
      onMaterialSelect('__SELECT_ALL__');
    }
  };

  const allSelected = selectedMaterials.length === materialOptions.length;
  const selectAllText = allSelected ? STRINGS[lang].deselectAll : STRINGS[lang].selectAll;

  return (
    <div className={`map-panel ${theme}`}>
      <div className="map-panel-content">
        <div className="map-panel-materials">
          <div
            className={`map-panel-material-option ${allSelected ? 'selected' : ''} ${theme} all-option`}
            onClick={handleSelectAll}
          >
            <div className="map-panel-material-content">
              <img
                src="/icons/all.png"
                alt="All materials"
                className="map-panel-material-icon"
              />
              <span className="map-panel-material-label">
                {selectAllText}
              </span>
            </div>
          </div>

          {materialOptions.map((material) => {
            const isSelected = selectedMaterials.includes(material);
            const label = materialLabels[lang][material] || material;

            return (
              <div
                key={material}
                className={`map-panel-material-option ${isSelected ? 'selected' : ''} ${theme}`}
                onClick={() => handleMaterialToggle(material)}
              >
                <div className="map-panel-material-content">
                  <img
                    src={materialIcons[material]}
                    alt={label}
                    className="map-panel-material-icon"
                  />
                  <span className="map-panel-material-label">{label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MapPanel;