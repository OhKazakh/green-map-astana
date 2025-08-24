import React from 'react';
import { Marker, OverlayView } from '@react-google-maps/api';
import { locationTranslations } from '../data/translations';
import { LocationItem } from '../constants/mapConstants';
import { Lang } from '../data/translations';
import './Map.css';

interface MapMarkersProps {
  locations: LocationItem[];
  filteredLocations: LocationItem[];
  theme: 'dark' | 'light';
  hovered: number | null;
  selectedLocation: number | null;
  onMarkerHover: (id: number) => void;
  onMarkerLeave: () => void;
  onMarkerClick: (id: number) => void;
  lang: Lang;
}

const MapMarkers: React.FC<MapMarkersProps> = ({
  locations,
  filteredLocations,
  theme,
  hovered,
  selectedLocation,
  onMarkerHover,
  onMarkerLeave,
  onMarkerClick,
  lang
}) => {
  const STRINGS: Record<Lang, Record<string, string>> = {
    en: { for: 'For' },
    ru: { for: 'Для' },
    kz: { for: 'Кімге' },
  };

  return (
    <>
      {filteredLocations.map(location => {
        const id = location.id;
        return (
          <Marker
            key={id}
            position={location.position}
            icon={{
              path: (window as any).google?.maps?.SymbolPath?.CIRCLE || 0,
              scale: 6,
              strokeWeight: 2,
              fillColor:
                location.audience === "Business / Bulk only"
                  ? (theme === 'dark' ? '#ff8f00' : '#e65100')
                  : (theme === 'dark' ? '#3ddc84' : '#2e7d32'),
              fillOpacity: 1,
              strokeColor: '#ffffff',
            }}
            onMouseOver={() => onMarkerHover(id)}
            onMouseOut={onMarkerLeave}
            onClick={() => onMarkerClick(id)}
          />
        );
      })}
      
      {hovered !== null && hovered !== selectedLocation && (
        <OverlayView
          position={locations.find(l => l.id === hovered)!.position}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div className="map-hover-bubble">
            <div className="map-hover-arrow" />
            {(() => {
              const cur = locations.find(l => l.id === hovered)!;
              const translations = locationTranslations[cur.name];
              const currentLang = translations ? translations[lang] : null;
              
              return (
                <>
                  <h3 className="map-hover-title">
                    {currentLang?.name || cur.name}
                  </h3>
                  {cur.photo && (
                    <img
                      src={cur.photo}
                      alt={currentLang?.name || cur.name}
                      className="map-hover-photo"
                    />
                  )}
                  <p className="map-hover-description">
                    {currentLang?.info || cur.info}
                  </p>
                  {cur.audience && (
                    <p className="map-hover-audience">
                      {STRINGS[lang].for}: {currentLang?.audience || cur.audience}
                    </p>
                  )}
                </>
              );
            })()}
          </div>
        </OverlayView>
      )}
    </>
  );
};

export default MapMarkers;
