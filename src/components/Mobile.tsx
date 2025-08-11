import React, { useState, useEffect, useMemo } from 'react';
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api';
import MobileFilterFab from './MobileFilterFab';
import { LocationItem } from '../data/locations';
import { locationTranslations } from '../data/translations';

// Constants from Map.tsx
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

// Locations data is now imported from ../data/locations

type Lang = 'en' | 'ru' | 'kz';
const STRINGS: Record<Lang, Record<string, string>> = {
  en: { filter: 'Filter', for: 'For', materialsList: 'Materials:', myLocation: 'My location' },
  ru: { filter: 'Фильтр', for: 'Для', materialsList: 'Материалы:', myLocation: 'Моё местоположение' },
  kz: { filter: 'Сүзгі', for: 'Кімге', materialsList: 'Материалдар:', myLocation: 'Орналасқан жерім' },
};

interface Props {
  lang: Lang;
  locations: LocationItem[];
  selectedMaterial: string;
  selectMaterial: (material: string) => void;
  selectedLocation: number | null;
  selectLocation: (location: number | null) => void;
  selectLang?: (lang: Lang) => void;
}

const Mobile: React.FC<Props> = ({
  lang,
  locations,
  selectedMaterial,
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
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = () => {
    console.log('Current theme before toggle:', theme);
    setTheme(t => {
      const newTheme = t === 'dark' ? 'light' : 'dark';
      console.log('New theme:', newTheme);
      return newTheme;
    });
  };

  const toggleLangMenu = () => {
    setLangMenuOpen(o => !o);
  };

  // Close language menu when clicking outside
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

  // Update local lang state when prop changes
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
        // silently ignore errors for now
      }
    );
  };

  const filteredLocations: LocationItem[] = useMemo(() => {
    if (selectedMaterial === 'All') {
      return locations;
    }
    return locations.filter(l => l.materials.includes(selectedMaterial));
  }, [locations, selectedMaterial]);

  const mapOptions = useMemo(() => {
    const styles = isSatellite ? satelliteStyle : (theme === 'dark' ? greenFirstStyle : lightStyle);
    console.log('Map options - Theme:', theme, 'IsSatellite:', isSatellite, 'Style:', theme === 'dark' ? 'greenFirstStyle' : 'lightStyle');
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
    }, 300); // Match the animation duration
  };

  console.log('Mobile component rendering');
  console.log('Mobile props:', { lang, selectedMaterial, selectedLocation, locationsLength: locations.length });
  
  const handleContainerClick = () => {
    // Dispatch a custom event to close the filter panel
    window.dispatchEvent(new CustomEvent('closeFilterPanel'));
  };

  return (
    <div 
      style={{ position: 'relative', width: '100vw', height: '100dvh' }}
      onClick={handleContainerClick}
    >
      {isMapLoading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          background: 'rgba(255,255,255,0.9)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
          Loading map...
        </div>
      )}
      <LoadScript
        key="google-maps-script"
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "AIzaSyAmgx0ZaPWr71vBWcmFjWfnEdHpAik7D1U"}
        language={lang}
        region="KZ"
        onLoad={() => console.log('Google Maps script loaded successfully')}
        onError={(error) => console.error('Google Maps script failed to load:', error)}
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
          {/* Theme & Language toggles */}
          <div
            style={{ 
              position: 'absolute', 
              top: 20, 
              right: 20, 
              zIndex: 1000, 
              pointerEvents: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }}
          >
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                border: 'none',
                background: theme === 'dark' ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.6)',
                color: theme === 'dark' ? '#000' : '#fff',
                cursor: 'pointer',
                fontSize: 24,
                lineHeight: '24px',
                transition: 'transform 0.4s ease',
                animation: 'fadeIn 0.5s ease-out'
              }}
            >
                              <img 
                  src="/icons/theme.png" 
                  alt="Toggle theme"
                  style={{ 
                    width: 24, 
                    height: 24,
                    objectFit: 'contain',
                    filter: theme === 'light' ? 'brightness(0) invert(1)' : 'none'
                  }} 
                />
            </button>
            
            <div style={{ position: 'relative' }} data-lang-menu>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLangMenu();
                }}
                aria-label="Change language"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: 'none',
                  background: theme === 'dark' ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.6)',
                  color: theme === 'dark' ? '#000' : '#fff',
                  cursor: 'pointer',
                  fontSize: 16,
                  lineHeight: '24px',
                  transition: 'transform 0.4s ease',
                  animation: 'fadeIn 0.7s ease-out',
                  fontWeight: 'bold'
                }}
              >
                {lang.toUpperCase()}
              </button>
              {langMenuOpen && (
                <div
                  data-lang-menu
                  style={{
                    position: 'absolute',
                    top: 56,
                    left: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    background: 'transparent',
                    padding: 0,
                    pointerEvents: 'auto'
                  }}
                >
                  {(['en', 'ru', 'kz'] as Lang[]).filter(code => code !== lang).map((code, i) => (
                    <button
                      key={code}
                      onClick={(e) => { 
                        e.stopPropagation();
                        if (selectLang) selectLang(code); 
                        setLangMenuOpen(false); 
                      }}
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        border: 'none',
                        background: theme === 'dark' ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.6)',
                        color: theme === 'dark' ? '#000' : '#fff',
                        cursor: 'pointer',
                        fontSize: 16,
                        lineHeight: '24px',
                        fontWeight: 'bold',
                        animation: `fadeIn 0.2s ease-out ${i * 0.1}s both`
                      }}
                    >
                      {code.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* User location marker */}
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
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,170,255,0.45)',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    animation: 'pulseDot 2s ease-out infinite',
                    pointerEvents: 'none'
                  }}
                />
              </OverlayView>
            </>
          )}

          {/* Markers */}
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

          {/* Click panel (mobile info panel) */}
          {selectedLocation !== null && (
            <div
              style={{
                position: 'absolute',
                bottom: 40,
                left: 16,
                right: 60,
                zIndex: 2600,
                background: 'rgba(255,255,255,0.95)',
                border: '1px solid #ccc',
                borderRadius: 10,
                padding: 20,
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                maxHeight: '40vh',
                overflowY: 'auto',
                animation: isClosing ? 'slideOutDown 0.3s ease-in' : 'slideInUp 0.3s ease-out'
              }}
            >
              {(() => {
                const cur = locations.find(l => l.id === selectedLocation)!;
                const translations = locationTranslations[cur.name];
                const currentLang = translations ? translations[lang] : null;
                
                // Debug logging to see what's happening with translations
                console.log('Location translations debug:', {
                  locationName: cur.name,
                  hasTranslations: !!translations,
                  translations: translations,
                  currentLang: currentLang,
                  fallbackName: cur.name,
                  fallbackInfo: cur.info,
                  fallbackAudience: cur.audience
                });
                
                return (
                  <>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 8
                      }}
                    >
                      <h2 style={{ margin: 0, fontSize: 18 }}>
                        {currentLang?.name || cur.name}
                      </h2>
                      <button
                        onClick={handleCloseInfo}
                        style={{
                          border: 'none',
                          background: 'transparent',
                          fontSize: 22,
                          cursor: 'pointer',
                          lineHeight: '14px',
                          transition: 'all 0.2s ease'
                        }}
                        aria-label="Close"
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      >
                        ×
                      </button>
                    </div>
                    <p style={{ margin: '0 0 8px 0', fontSize: 14 }}>
                      {currentLang?.info || cur.info}
                    </p>
                    {cur.audience && (
                      <p style={{ margin: '0 0 8px 0', fontSize: 12, color: '#555' }}>
                        {STRINGS[lang].for}: {currentLang?.audience || cur.audience}
                      </p>
                    )}
                    <div style={{ fontSize: 12, marginTop: 8 }}>
                      <strong>{STRINGS[lang].materialsList}</strong>
                      <ul style={{ paddingLeft: 18, margin: '4px 0' }}>
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

      {/* Mobile Filter FAB */}
      <MobileFilterFab
        lang={lang}
        selectedMaterial={selectedMaterial}
        selectMaterial={selectMaterial}
        theme={theme}
      />

      {/* Map Controls (zoom & my location) */}
      <div
        style={{
          position: 'absolute',
          right: '8px',
          bottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          zIndex: 2600,
        }}
      >
                  <button
            onClick={zoomIn}
            className="w-10 h-10 rounded bg-black/70 border border-white/30 text-white flex items-center justify-center text-lg transition-transform duration-200"
            style={{ animation: 'bounceIn 0.5s ease-out' }}
          >
            +
          </button>
          <button
            onClick={zoomOut}
            className="w-10 h-10 rounded bg-black/70 border border-white/30 text-white flex items-center justify-center text-lg transition-transform duration-200"
            style={{ animation: 'bounceIn 0.6s ease-out' }}
          >
            -
          </button>
          <button
            onClick={toggleSatellite}
            className="w-10 h-10 rounded bg-black/70 border border-white/30 text-white flex items-center justify-center text-lg transition-transform duration-200"
            title={isSatellite ? 'Map view' : 'Satellite view'}
            style={{ animation: 'bounceIn 0.7s ease-out' }}
          >
                            <img 
                  src="/icons/satelite.png" 
                  alt={isSatellite ? 'Map view' : 'Satellite view'}
                  style={{ 
                    width: 20, 
                    height: 20,
                    objectFit: 'contain',
                    filter: theme === 'light' ? 'brightness(0) invert(1)' : 'none'
                  }} 
                />
          </button>
          <button
            onClick={centerOnUser}
            className="w-10 h-10 rounded bg-black/70 border border-white/30 text-white flex items-center justify-center text-lg transition-transform duration-200"
            title={STRINGS[lang].myLocation}
            style={{ animation: 'bounceIn 0.8s ease-out' }}
          >
                            <img 
                  src="/icons/findme.png" 
                  alt={STRINGS[lang].myLocation}
                  style={{ 
                    width: 20, 
                    height: 20,
                    objectFit: 'contain',
                    filter: theme === 'light' ? 'brightness(0) invert(1)' : 'none'
                  }} 
                />
          </button>
      </div>
    </div>
  );
};

export default Mobile;
