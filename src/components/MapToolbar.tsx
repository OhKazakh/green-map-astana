import React from 'react';
import './Map.css';

interface MapToolbarProps {
  theme: 'dark' | 'light';
  isSatellite: boolean;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onToggleSatellite: () => void;
  onCenterOnUser: () => void;
  myLocationText: string;
}

const MapToolbar: React.FC<MapToolbarProps> = ({
  theme,
  isSatellite,
  onZoomIn,
  onZoomOut,
  onToggleSatellite,
  onCenterOnUser,
  myLocationText
}) => {
  return (
    <div className="map-toolbar">
      <button
        className={`map-toolbar-button ${theme}`}
        onClick={onZoomIn}
        aria-label="Zoom in"
        title="Zoom in"
      >
        <span className="map-toolbar-icon">+</span>
      </button>
      
      <button
        className={`map-toolbar-button ${theme}`}
        onClick={onZoomOut}
        aria-label="Zoom out"
        title="Zoom out"
      >
        <span className="map-toolbar-icon">−</span>
      </button>
      
      <button
        className={`map-toolbar-button ${theme}`}
        onClick={onToggleSatellite}
        aria-label="Toggle satellite view"
        title="Toggle satellite view"
      >
        <img
          src="/icons/satelite.png"
          alt="Satellite"
          className="map-toolbar-icon"
        />
      </button>
      
      <button
        className={`map-toolbar-button ${theme}`}
        onClick={onCenterOnUser}
        aria-label="Locate me"
        title="Locate me"
      >
        <img
          src="/icons/findme.png"
          alt="Locate me"
          className="map-toolbar-icon"
        />
      </button>
    </div>
  );
};

export default MapToolbar;