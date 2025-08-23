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
        onClick={onZoomIn}
        className="map-toolbar-button"
      >
        +
      </button>
      <button
        onClick={onZoomOut}
        className="map-toolbar-button zoom-out"
      >
        −
      </button>
      <button
        onClick={onToggleSatellite}
        className="map-toolbar-button"
        title={isSatellite ? 'Map view' : 'Satellite view'}
      >
        <img 
          src="/icons/satelite.png" 
          alt={isSatellite ? 'Map view' : 'Satellite view'}
          className={`map-toolbar-icon ${theme === 'light' ? 'light' : ''}`}
        />
      </button>
      <button
        onClick={onCenterOnUser}
        className="map-toolbar-button"
        title={myLocationText}
      >
        <img 
          src="/icons/findme.png" 
          alt="My location"
          className={`map-toolbar-icon ${theme === 'light' ? 'light' : ''}`}
        />
      </button>
    </div>
  );
};

export default MapToolbar;
