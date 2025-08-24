import React, { useState } from 'react';
import './Map.css';
import { Lang } from '../data/translations';

interface MapControlsProps {
  theme: 'dark' | 'light';
  lang: Lang;
  onThemeToggle: () => void;
  onLangChange: (lang: Lang) => void;
}

const MapControls: React.FC<MapControlsProps> = ({
  theme,
  lang,
  onThemeToggle,
  onLangChange
}) => {
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const toggleLangMenu = () => {
    setLangMenuOpen(o => !o);
  };

  return (
    <div className="map-controls">
      <button
        onClick={onThemeToggle}
        aria-label="Toggle theme"
        className={`map-control-button theme ${theme}`}
      >
        <img 
          src="/icons/theme.png" 
          alt="Theme" 
          className="map-control-icon"
        />
      </button>

      <div style={{ position: 'relative' }}>
        <button
          onClick={toggleLangMenu}
          aria-label="Change language"
          className={`map-control-button lang ${theme}`}
        >
          {lang.toUpperCase()}
        </button>
        {langMenuOpen && (
          <div className="map-control-lang-menu">
            {(['en', 'ru', 'kz'] as Lang[]).filter(code => code !== lang).map((code, i) => (
              <button
                key={code}
                onClick={() => { onLangChange(code); setLangMenuOpen(false); }}
                className={`map-control-lang-option ${theme}`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapControls;
