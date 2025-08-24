import React, { useState, useEffect, useMemo } from 'react';
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api';
import { locationTranslations } from '../data/translations';
import { LocationItem, STRINGS } from '../constants/mapConstants';
import MobileFilterFab from './MobileFilterFab';
import './Map.css';

const center = {
  lat: 51.125417,
  lng: 71.433722
};

const greenFirstStyle = [
  {
    featureType: "all",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [{ color: "#242f3e" }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3", visibility: "on"  }],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];

const lightStyle: google.maps.MapTypeStyle[] = [
  { featureType: 'all', elementType: 'labels', stylers: [{ visibility: 'off' }] },
  { featureType: 'all', elementType: 'labels.text.stroke', stylers: [{ visibility: 'off' }] },
  { featureType: 'all', elementType: 'labels.text.fill', stylers: [{ visibility: 'off' }] },
  { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ visibility: 'on' }] },
  { featureType: 'road', elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }] },
  { featureType: 'all', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#dcdcdc' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#d2e7f7' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#e0f2e9' }] },
];

const satelliteStyle: google.maps.MapTypeStyle[] = [
  { featureType: 'all', elementType: 'labels', stylers: [{ visibility: 'off' }] },
  { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ visibility: 'on' }] },
  { featureType: 'road', elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }] },
];

const baseOptions: google.maps.MapOptions = {
  restriction: {
    latLngBounds: {
      north: 51.3,
      south: 51.0,
      west: 71.3,
      east: 71.6,
    },
    strictBounds: true,
  },
  styles: greenFirstStyle,
  disableDefaultUI: true,
  zoom: 12,
  center: { lat: 51.125417, lng: 71.433722 },
};

type Lang = 'en' | 'ru' | 'kz';

interface Props {
  theme: 'dark' | 'light';
  lang: Lang;
  selectLang?: (lang: Lang) => void;
  selectedMaterials: string[];
  selectMaterial: (material: string) => void;
  locations: LocationItem[];
  selectedLocation: number | null;
  selectLocation: (location: number | null) => void;
}

const Mobile: React.FC<Props> = ({
  lang,
  locations,
  selectedMaterials,
  selectMaterial,
  selectedLocation,
  selectLocation,
  selectLang
}) => {
  const mapRef = React.useRef<google.maps.Map | null>(null);
  const [userPos, setUserPos] = useState<google.maps.LatLngLiteral | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });
  const [isSatellite, setIsSatellite] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [isMapLoading, setIsMapLoading] = useState(true);

  useEffect(() => {
    const id = 'pulse-keyframes';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.innerHTML = `@keyframes pulseDot {0%{transform: translate(-50%, -50%) scale(0.4); opacity:0.9;}80%{transform: translate(-50%, -50%) scale(2.6); opacity:0;}100%{transform: translate(-50%, -50%) scale(0.4); opacity:0;}}`;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    try { 
      localStorage.setItem('theme', theme); 
    } catch (error) {
      console.warn('Failed to save theme preference:', error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(t => {
      const newTheme = t === 'dark' ? 'light' : 'dark';
      return newTheme;
    });
  };

  const toggleLangMenu = () => {
    setLangMenuOpen(o => !o);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (langMenuOpen && !target.closest('[data-lang-menu]')) {
        setLangMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [langMenuOpen]);

  useEffect(() => {
    setIsMapLoading(true);
  }, [lang]);

  const toggleSatellite = () => {
    setIsSatellite(s => !s);
  };

  const zoomIn = () => {
    const current = mapRef.current;
    if (!current) return;
    const z = current.getZoom?.() ?? 0;
    current.setZoom?.(z + 1);
  };

  const zoomOut = () => {
    const current = mapRef.current;
    if (!current) return;
    const z = current.getZoom?.() ?? 0;
    current.setZoom?.(z - 1);
  };

  const centerOnUser = () => {
    if (!navigator.geolocation || !mapRef.current) return;
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const pos = { lat: coords.latitude, lng: coords.longitude };
        setUserPos(pos);
        mapRef.current?.panTo(pos);
        mapRef.current?.setZoom?.(15);
      },
      () => {
      }
    );
  };

  const filteredLocations: LocationItem[] = useMemo(() => {
    if (selectedMaterials.length === 0) {
      return locations;
    }
    return locations.filter(l => l.materials.some(m => selectedMaterials.includes(m)));
  }, [locations, selectedMaterials]);

  const mapOptions = useMemo(() => {
    const styles = isSatellite ? satelliteStyle : (theme === 'dark' ? greenFirstStyle : lightStyle);
    return {
      ...baseOptions,
      mapTypeId: isSatellite ? 'hybrid' : 'roadmap',
      styles: styles,
    };
  }, [theme, isSatellite]);

  const toggleLocation = (id: number) => {
    if (selectedLocation === id) {
      selectLocation(null);
    } else {
      selectLocation(id);
    }
  };

  const handleCloseInfo = () => {
    setIsClosing(true);
    setTimeout(() => {
      selectLocation(null);
      setIsClosing(false);
    }, 300);
  };

  const handleContainerClick = () => {
    window.dispatchEvent(new CustomEvent('closeFilterPanel'));
  };

  return (
    <div 
      className="mobile-container"
      onClick={handleContainerClick}
    >
      {isMapLoading && (
        <div className="mobile-loading">
          Loading map...
        </div>
      )}
      <LoadScript
        key="google-maps-script"
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "AIzaSyAmgx0ZaPWr71vBWcmFjWfnEdHpAik7D1U"}
        language={lang}
        region="KZ"
        onLoad={() => {}}
        onError={() => {}}
      >
        <GoogleMap
          onClick={() => {
            if (selectedLocation !== null) {
              handleCloseInfo();
            }
          }}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={12}
          options={mapOptions}
          onLoad={map => { 
            mapRef.current = map; 
            setIsMapLoading(false);
            return undefined; 
          }}
        >
          <div className="mobile-controls">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`mobile-control-button theme ${theme}`}
            >
              <img
                src="/icons/icontheme.png"
                alt="Theme"
                className="mobile-control-icon"
              />
            </button>
            
            <div style={{ position: 'relative' }} data-lang-menu>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLangMenu();
                }}
                aria-label="Change language"
                className={`mobile-control-button lang ${theme}`}
              >
                {lang.toUpperCase()}
              </button>
              {langMenuOpen && (
                <div className="mobile-lang-menu">
                  {(['en', 'ru', 'kz'] as Lang[]).filter(code => code !== lang).map((code, i) => (
                    <button
                      key={code}
                      onClick={(e) => { 
                        e.stopPropagation();
                        if (selectLang) selectLang(code); 
                        setLangMenuOpen(false); 
                      }}
                      className={`mobile-lang-option ${theme}`}
                    >
                      {code.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {userPos && (
            <>
              <Marker
                position={userPos}
                icon={{
                  path: (window as any).google?.maps?.SymbolPath?.CIRCLE || 0,
                  scale: 8,
                  fillColor: '#00aaff',
                  fillOpacity: 1,
                  strokeColor: '#ffffff',
                  strokeWeight: 2,
                }}
              />
              <OverlayView position={userPos} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                <div className="mobile-user-location-pulse" />
              </OverlayView>
            </>
          )}

          {filteredLocations.map((location, index) => {
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
                onClick={() => toggleLocation(id)}
              />
            );
          })}

          {selectedLocation !== null && (
            <div
              className={`mobile-info-panel ${isClosing ? 'slide-out' : 'slide-in'}`}
            >
              {(() => {
                const cur = locations.find(l => l.id === selectedLocation)!;
                const translations = locationTranslations[cur.name];
                const currentLang = translations ? translations[lang] : null;
                

                
                return (
                  <>
                    <div className="mobile-info-header">
                      <h2 className="mobile-info-title">
                        {currentLang?.name || cur.name}
                      </h2>
                      <button
                        onClick={handleCloseInfo}
                        className="mobile-info-close"
                        aria-label="Close"
                      >
                        ×
                      </button>
                    </div>
                    <p className="mobile-info-description">
                      {currentLang?.info || cur.info}
                    </p>
                    {cur.audience && (
                      <p className="mobile-info-audience">
                        {STRINGS[lang].for}: {currentLang?.audience || cur.audience}
                      </p>
                    )}
                    <div className="mobile-info-materials">
                      <strong>{STRINGS[lang].materialsList}</strong>
                      <ul>
                        {cur.materials.map(m => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                );
              })()}
            </div>
          )}
        </GoogleMap>
      </LoadScript>

      <MobileFilterFab
        lang={lang}
        selectedMaterials={selectedMaterials}
        selectMaterial={selectMaterial}
        theme={theme}
      />

      <div className="mobile-map-controls">
        <button
          onClick={zoomIn}
          className={`mobile-map-control-button bounce-1 ${theme}`}
        >
          +
        </button>
        <button
          onClick={zoomOut}
          className={`mobile-map-control-button bounce-2 ${theme}`}
        >
          -
        </button>
        <button
          onClick={toggleSatellite}
          className={`mobile-map-control-button bounce-3 ${theme}`}
          title={isSatellite ? 'Map view' : 'Satellite view'}
        >
          <img 
            src="/icons/satelite.png" 
            alt={isSatellite ? 'Map view' : 'Satellite view'}
            className="mobile-map-control-icon"
          />
        </button>
        <button
          onClick={centerOnUser}
          className={`mobile-map-control-button bounce-4 ${theme}`}
          title={STRINGS[lang].myLocation}
        >
          <img 
            src="/icons/findme.png" 
            alt={STRINGS[lang].myLocation}
            className="mobile-map-control-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Mobile;