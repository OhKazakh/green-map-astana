import React from 'react';
import { locationTranslations } from '../data/translations';
import { LocationItem } from '../constants/mapConstants';
import { Lang } from '../data/translations';
import './Map.css';

interface MapInfoPanelProps {
  selectedLocation: number | null;
  isPanelClosing: boolean;
  locations: LocationItem[];
  lang: Lang;
  onClose: () => void;
  materialLabels: Record<Lang, Record<string, string>>;
}

const MapInfoPanel: React.FC<MapInfoPanelProps> = ({
  selectedLocation,
  isPanelClosing,
  locations,
  lang,
  onClose,
  materialLabels
}) => {
  const STRINGS: Record<Lang, Record<string, string>> = {
    en: { for: 'For', materialsList: 'Materials:' },
    ru: { for: 'Для', materialsList: 'Материалы:' },
    kz: { for: 'Кімге', materialsList: 'Материалдар:' },
  };

  if (!selectedLocation && !isPanelClosing) return null;

  const cur = locations.find(l => l.id === selectedLocation);
  if (!cur) return null;

  const translations = locationTranslations[cur.name];
  const currentLang = translations ? translations[lang] : null;

  return (
    <div
      className={`map-info-panel ${isPanelClosing ? 'fade-out' : 'fade-in'}`}
    >
      <div className="map-info-header">
        <h2 className="map-info-title">
          {currentLang?.name || cur.name}
        </h2>
        <button
          onClick={onClose}
          className="map-info-close"
          aria-label="Close"
        >
          ×
        </button>
      </div>
      <p className="map-info-description">
        {currentLang?.info || cur.info}
      </p>
      {cur.audience && (
        <p className="map-info-audience">
          {STRINGS[lang].for}: {currentLang?.audience || cur.audience}
        </p>
      )}
      <div className="map-info-materials">
        <strong>{STRINGS[lang].materialsList}</strong>
        <ul>
          {cur.materials.map(m => (
            <li key={m}>{materialLabels[lang][m as keyof typeof materialLabels[typeof lang]] ?? m}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapInfoPanel;
