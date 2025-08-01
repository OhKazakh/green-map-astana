import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api';
import MobileFilterFab from './MobileFilterFab';
import { LocationItem } from '../data/locations';

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
  selectedLocation: string | null;
  selectLocation: (location: string | null) => void;
}

const Mobile: React.FC<Props> = ({
  lang,
  locations,
  selectedMaterial,
  selectMaterial,
  selectedLocation,
  selectLocation
}) => {
  const mapRef = React.useRef<google.maps.Map | null>(null);
  const [userPos, setUserPos] = useState<google.maps.LatLngLiteral | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => (typeof window !== 'undefined' && localStorage.getItem('theme') === 'light' ? 'light' : 'dark'));
  const [isSatellite, setIsSatellite] = useState(false);

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
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  };

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

  const mapOptions = useMemo(() => ({
    ...baseOptions,
    mapTypeId: isSatellite ? 'hybrid' : 'roadmap',
    styles: isSatellite ? satelliteStyle : (theme === 'dark' ? greenFirstStyle : lightStyle),
  }), [theme, isSatellite]);

  const toggleLocation = (id: number) => {
    const idString = id.toString();
    if (selectedLocation === idString) {
      selectLocation(null);
    } else {
      selectLocation(idString);
    }
  };

  console.log('Mobile component rendering');
  console.log('Mobile props:', { lang, selectedMaterial, selectedLocation, locationsLength: locations.length });
  
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100dvh' }}>
      <LoadScript
        key={lang}
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "AIzaSyAmgx0ZaPWr71vBWcmFjWfnEdHpAik7D1U"}
        language={lang}
        region="KZ"
      >
        <GoogleMap
          onClick={() => {
            if (selectedLocation !== null) {
              selectLocation(null);
            }
          }}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={12}
          options={mapOptions}
          onLoad={map => { mapRef.current = map; return undefined; }}
        >
          {/* Theme toggle */}
          <div
            style={{ position: 'absolute', top: 16, left: 16, zIndex: 2501, pointerEvents: 'auto' }}
          >
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                cursor: 'pointer',
                fontSize: 20,
                lineHeight: '20px',
                transition: 'transform 0.4s ease'
              }}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
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
                onClick={() => toggleLocation(id)}
              />
            );
          })}

          {/* Click panel (mobile info panel) */}
          {selectedLocation !== null && (
            <div
              style={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                right: 16,
                zIndex: 2600,
                background: 'rgba(255,255,255,0.95)',
                border: '1px solid #ccc',
                borderRadius: 10,
                padding: 20,
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                maxHeight: '40vh',
                overflowY: 'auto'
              }}
            >
              {(() => {
                const cur = locations.find(l => l.id.toString() === selectedLocation)!;
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
                      <h2 style={{ margin: 0, fontSize: 18 }}>{cur.name}</h2>
                      <button
                        onClick={() => selectLocation(null)}
                        style={{
                          border: 'none',
                          background: 'transparent',
                          fontSize: 22,
                          cursor: 'pointer',
                          lineHeight: '14px'
                        }}
                        aria-label="Close"
                      >
                        ×
                      </button>
                    </div>
                    <p style={{ margin: '0 0 8px 0', fontSize: 14 }}>{cur.info}</p>
                    {cur.audience && (
                      <p style={{ margin: '0 0 8px 0', fontSize: 12, color: '#555' }}>
                        {STRINGS[lang].for}: {cur.audience}
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
      />

      {/* Map Controls (zoom & my location) */}
      <div
        style={{
          position: 'absolute',
          right: '16px',
          bottom: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          zIndex: 2600,
        }}
      >
        <button
          onClick={zoomIn}
          className="w-10 h-10 rounded bg-black/70 border border-white/30 text-white flex items-center justify-center text-lg"
        >
          +
        </button>
        <button
          onClick={zoomOut}
          className="w-10 h-10 rounded bg-black/70 border border-white/30 text-white flex items-center justify-center text-xl"
        >
          -
        </button>
        <button
          onClick={toggleSatellite}
          className="w-10 h-10 rounded bg-black/70 border border-white/30 text-white flex items-center justify-center text-lg"
          title={isSatellite ? 'Map view' : 'Satellite view'}
        >
          {isSatellite ? '🗺️' : '🛰️'}
        </button>
        <button
          onClick={centerOnUser}
          className="w-10 h-10 rounded bg-black/70 border border-white/30 text-white flex items-center justify-center text-lg"
          title={STRINGS[lang].myLocation}
        >
          ◎
        </button>
      </div>
    </div>
  );
};

export default Mobile;
