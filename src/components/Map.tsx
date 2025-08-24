import React, { useState, useEffect, useMemo, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api';
import './Map.css';
import { MAP_CONSTANTS, MATERIAL_OPTIONS, MATERIAL_ICONS, MATERIAL_LABELS, STRINGS, LocationItem } from '../constants/mapConstants';
import { Lang } from '../data/translations';
import MapControls from './MapControls';
import MapPanel from './MapPanel';
import MapMarkers from './MapMarkers';
import MapInfoPanel from './MapInfoPanel';
import MapToolbar from './MapToolbar';

// Map component - updated
const center = MAP_CONSTANTS.MAP.CENTER;

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
      north: MAP_CONSTANTS.MAP.BOUNDS.NORTH,
      south: MAP_CONSTANTS.MAP.BOUNDS.SOUTH,
      west: MAP_CONSTANTS.MAP.BOUNDS.WEST,
      east: MAP_CONSTANTS.MAP.BOUNDS.EAST,
    },
    strictBounds: true,
  },
  styles: greenFirstStyle,
  disableDefaultUI: true,
  zoom: MAP_CONSTANTS.MAP.DEFAULT_ZOOM,
  center: MAP_CONSTANTS.MAP.CENTER,
};

const locations: LocationItem[] = [
  {
    id: 0,
    category: "BIG",
    name: "KazRecycleService LLP",
    position: { lat: 51.126178, lng: 71.527115 },
    info: "Industrial MRF/baling plant in Promyshlennyi zone – plastics (PET/PE), cardboard, ferrous & non-ferrous metals.",
    photo: null,
    icon: "",
    materials: ["Plastic", "Metals", "Paper"],
    audience: "Business / Bulk only"
  },
  {
    id: 1,
    category: "BIG",
    name: "LS Ecolife (LS Astana hub – Saryarqa 31A)",
    position: { lat: 51.16987, lng: 71.4038 },
    info: "Private multi-site collection & baling network; bulk pickup. Takes PET/other plastics, Al cans, cardboard, paper, glass, PE film.",
    photo: null,
    icon: "",
    materials: ["Plastic", "Aluminium cans", "Paper", "Glass", "Bottles"],
    audience: "Business / Bulk only"
  },
  {
    id: 2,
    category: "BIG",
    name: "Astana Taza Alem",
    position: { lat: 51.1673, lng: 71.4379 },
    info: "Municipal contractor; accepts sorted recyclables by agreement. Cardboard, paper, glass, metals; container service for businesses.",
    photo: null,
    icon: "",
    materials: ["Paper", "Glass", "Metals"],
    audience: "Business / Bulk only"
  },
  {
    id: 3,
    category: "BIG",
    name: "Taza Qala – Taza El",
    position: { lat: 51.102571, lng: 71.439484 },
    info: "Scrap & recyclables buyer; issues weigh tickets. Scrap metal, coloured metals, glass, lead-acid batteries.",
    photo: null,
    icon: "",
    materials: ["Metals", "Glass", "Batteries"],
    audience: "Business / Bulk only"
  },
  {
    id: 4,
    category: "BIG",
    name: "AstanaQagazy",
    position: { lat: 51.2039, lng: 71.4786 },
    info: "OCC & office paper specialist; self-pickup for volume. Cardboard (OCC), mixed office paper, archives.",
    photo: null,
    icon: "",
    materials: ["Paper"],
    audience: "Business / Bulk only"
  },
  {
    id: 5,
    category: "BIG",
    name: "Eco Polygon of Astana",
    position: { lat: 51.0618, lng: 71.6572 },
    info: "Paid tipping point near city waste plant; segregated industrial loads & large debris by prior agreement.",
    photo: null,
    icon: "",
    materials: ["Industrial waste"],
    audience: "Business / Bulk only"
  },
  {
    id: 6,
    category: "SMALL",
    name: "LS Ecolife kiosk (Saryarqa 31A)",
    position: { lat: 51.16987, lng: 71.4038 },
    info: "Staffed walk-up point. PET1, HDPE2, aluminium cans, cardboard/paper, glass.",
    photo: null,
    icon: "",
    materials: ["Plastic", "Aluminium cans", "Paper", "Glass", "Bottles"],
    audience: "Public drop-off"
  },
  {
    id: 7,
    category: "SMALL",
    name: "LS Ecolife kiosk (Teljan Shonanuly 36/1a)",
    position: { lat: 51.2044, lng: 71.4454 },
    info: "Staffed walk-up point. PET, paper/cardboard, small metals, glass.",
    photo: null,
    icon: "",
    materials: ["Plastic", "Paper", "Metals", "Glass", "Bottles"],
    audience: "Public drop-off"
  },
  {
    id: 8,
    category: "SMALL",
    name: "LS Ecolife kiosk (Manas 11/4)",
    position: { lat: 51.1546, lng: 71.4089 },
    info: "Staffed walk-up point. PET, paper/cardboard, small metals, glass.",
    photo: null,
    icon: "",
    materials: ["Plastic", "Paper", "Metals", "Glass", "Bottles"],
    audience: "Public drop-off"
  },
  {
    id: 9,
    category: "SMALL",
    name: "LS Ecolife kiosk (Mustafina 17/1)",
    position: { lat: 51.1709, lng: 71.3889 },
    info: "Staffed walk-up point. PET, paper/cardboard, small metals, glass.",
    photo: null,
    icon: "",
    materials: ["Plastic", "Paper", "Metals", "Glass", "Bottles"],
    audience: "Public drop-off"
  },
  {
    id: 10,
    category: "SMALL",
    name: "Sparklo RVM (Astana Airport)",
    position: { lat: 51.022222, lng: 71.466944 },
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles, aluminium cans.",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 11,
    category: "SMALL",
    name: "Sparklo RVM (Keruen Mall)",
    position: { lat: 51.12802, lng: 71.425381 },
    info: "RVM in shopping mall; see app for full list. PET bottles, aluminium cans.",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 12,
    category: "SMALL",
    name: "Likekomek charity bin (Turan 55A)",
    position: { lat: 51.116216, lng: 71.418778 },
    info: "24/7 textile donation box. Clean clothing, paired footwear, bedding.",
    photo: null,
    icon: "",
    materials: ["Clothes"],
    audience: "Public drop-off"
  },
  {
    id: 13,
    category: "SMALL",
    name: "ALGYS charity bin (central)",
    position: { lat: 51.112603, lng: 71.398386 },
    info: "Textile/household donation box. Clothing, shoes, linens, small goods.",
    photo: null,
    icon: "",
    materials: ["Clothes"],
    audience: "Public drop-off"
  },
  {
    id: 14,
    category: "SMALL",
    name: "Eco Paper (Zhanazhol 20/3)",
    position: { lat: 51.1906, lng: 71.4409 },
    info: "Garage-format buy-back point; often open late. Paper, cardboard, PET, PE film, aluminium cans.",
    photo: null,
    icon: "",
    materials: ["Paper", "Plastic", "Aluminium cans", "Bottles"],
    audience: "Public drop-off"
  },
  {
    id: 15,
    category: "SMALL",
    name: "Sparklo RVM – Turan 55d",
    position: { lat: 51.1169, lng: 71.4178 },
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 17,
    category: "SMALL",
    name: "Sparklo RVM – Konaev 10",
    position: { lat: 51.132, lng: 71.4305 },
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 18,
    category: "SMALL",
    name: "Sparklo RVM – Kordai 6",
    position: { lat: 51.155, lng: 71.379 },
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 19,
    category: "SMALL",
    name: "Sparklo RVM – Edil 26",
    position: { lat: 51.0905, lng: 71.4155 },
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 20,
    category: "SMALL",
    name: "Sparklo RVM – Kabanbay Batyr 119",
    position: { lat: 51.0908, lng: 71.4099 },
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 21,
    category: "SMALL",
    name: "Sparklo RVM – Tynyshbayuly 8",
    position: { lat: 51.1557, lng: 71.4636 },
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 22,
    category: "SMALL",
    name: "Sparklo RVM – Shokan Ualikhanov 20",
    position: { lat: 51.1522, lng: 71.438 },
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  }
];

const Map: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const mapRef = React.useRef<google.maps.Map | null>(null);

  const [mapState, setMapState] = useState({
    theme: 'light' as 'light' | 'dark',
    lang: 'en' as Lang,
    selectedMaterials: [] as string[],
    selectedLocation: null as number | null,
    isSatellite: false,
    userPos: null as { lat: number; lng: number } | null,
    isPanelClosing: false,
  });

  const panelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateMapState = (updates: Partial<typeof mapState>) => {
    setMapState(prev => ({ ...prev, ...updates }));
  };

  useEffect(() => {
    const id = 'pulse-keyframes';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.innerHTML = `@keyframes pulseDot {0%{transform: translate(-50%, -50%) scale(0.4); opacity:0.9;}80%{transform: translate(-50%, -50%) scale(2.6); opacity:0;}100%{transform: translate(-50%, -50%) scale(0.4); opacity:0;}}`;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    const id = 'popup-keyframes';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.innerHTML = `@keyframes fadeInUp{0%{opacity:0;transform:translateY(10px);}100%{opacity:1;transform:translateY(0);}}@keyframes fadeOutDown{0%{opacity:1;transform:translateY(0);}100%{opacity:0;transform:translateY(10px);}}`;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    const id = 'lang-bubble-kf';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.innerHTML = `@keyframes bubbleIn{0%{opacity:0;transform:scale(.6) translateX(-10px);}100%{opacity:1;transform:scale(1) translateX(0);}}`;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    try { 
      localStorage.setItem('theme', mapState.theme); 
    } catch (error) {
      console.warn('Failed to save theme preference:', error);
    }
  }, [mapState.theme]);
  
  useEffect(() => {
    try { 
      localStorage.setItem('lang', mapState.lang); 
    } catch (error) {
      console.warn('Failed to save language preference:', error);
    }
  }, [mapState.lang]);

  useEffect(() => {
    try { 
      sessionStorage.setItem('gm_material', mapState.selectedMaterials.join(',')); 
    } catch (error) {
      console.warn('Failed to save material preference:', error);
    }
  }, [mapState.selectedMaterials]);

  const selectMaterial = (m: string) => {
    if (m === '__SELECT_ALL__') {
      // Select all materials
      updateMapState({ selectedMaterials: MATERIAL_OPTIONS });
    } else if (m === '__CLEAR_ALL__') {
      // Clear all materials
      updateMapState({ selectedMaterials: [] });
    } else if (mapState.selectedMaterials.includes(m)) {
      // Remove material if already selected
      updateMapState({ selectedMaterials: mapState.selectedMaterials.filter(mat => mat !== m) });
    } else {
      // Add material if not selected
      updateMapState({ selectedMaterials: [...mapState.selectedMaterials, m] });
    }
  };

  const toggleLocation = (id: number) => {
    if (mapState.selectedLocation === id) {
      updateMapState({ isPanelClosing: true });
      if (panelTimer.current) clearTimeout(panelTimer.current);
      panelTimer.current = setTimeout(() => {
        updateMapState({ selectedLocation: null, isPanelClosing: false });
        panelTimer.current = null;
      }, MAP_CONSTANTS.ANIMATION.PANEL_CLOSE_DELAY);
    } else {
      updateMapState({ selectedLocation: id });
    }
  };

  const toggleTheme = () => {
    updateMapState({ theme: mapState.theme === 'dark' ? 'light' : 'dark' });
  };

  const toggleSatellite = () => {
    updateMapState({ isSatellite: !mapState.isSatellite });
  };

  const closeInfo = () => {
    if (mapState.selectedLocation !== null) {
      updateMapState({ isPanelClosing: true });
      if (panelTimer.current) clearTimeout(panelTimer.current);
      panelTimer.current = setTimeout(() => {
        updateMapState({ selectedLocation: null, isPanelClosing: false });
        panelTimer.current = null;
      }, MAP_CONSTANTS.ANIMATION.PANEL_CLOSE_DELAY);
    }
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
        updateMapState({ userPos: pos });
        mapRef.current?.panTo(pos);
        mapRef.current?.setZoom?.(MAP_CONSTANTS.MAP.USER_LOCATION_ZOOM);
      },
      () => {}
    );
  };

  const filteredLocations: LocationItem[] = useMemo(() => {
    return locations.filter(l => mapState.selectedMaterials.length === 0 || l.materials.some(m => mapState.selectedMaterials.includes(m)));
  }, [mapState.selectedMaterials]);

  const mapOptions = useMemo(() => ({
    ...baseOptions,
    mapTypeId: mapState.isSatellite ? 'hybrid' : 'roadmap',
    styles: mapState.isSatellite ? satelliteStyle : (mapState.theme === 'dark' ? greenFirstStyle : lightStyle),
  }), [mapState.theme, mapState.isSatellite]);

  const handleMarkerMouseOver = (id: number) => {
    if (hovered !== id) setHovered(id);
  };

  const handleMarkerMouseOut = () => {
    setHovered(null);
  };

  return (
    <div className="map-container">
      <LoadScript
        key={mapState.lang}
        googleMapsApiKey="AIzaSyAmgx0ZaPWr71vBWcmFjWfnEdHpAik7D1U"
        language={mapState.lang}
        region="KZ"
      >
        <GoogleMap
          onClick={() => {
            if (mapState.selectedLocation !== null) {
              closeInfo();
            }
          }}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={MAP_CONSTANTS.MAP.DEFAULT_ZOOM}
          options={mapOptions}
          onLoad={map => { mapRef.current = map; return undefined; }}
        >
          <MapControls
            theme={mapState.theme}
            lang={mapState.lang}
            onThemeToggle={toggleTheme}
            onLangChange={(newLang) => updateMapState({ lang: newLang })}
          />

          <MapPanel
            lang={mapState.lang}
            theme={mapState.theme}
            selectedMaterials={mapState.selectedMaterials}
            onMaterialSelect={selectMaterial}
            materialOptions={MATERIAL_OPTIONS}
            materialIcons={MATERIAL_ICONS}
            materialLabels={MATERIAL_LABELS}
          />

          {mapState.userPos && (
            <>
              <Marker
                position={mapState.userPos}
                icon={{
                  path: (window as any).google?.maps?.SymbolPath?.CIRCLE || 0,
                  scale: MAP_CONSTANTS.MARKER.USER_SCALE,
                  fillColor: MAP_CONSTANTS.COLORS.USER_LOCATION,
                  fillOpacity: 1,
                  strokeColor: '#ffffff',
                  strokeWeight: 2,
                }}
              />
              <OverlayView position={mapState.userPos} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                <div className="user-location-marker" />
              </OverlayView>
            </>
          )}

          <MapMarkers
            locations={locations}
            filteredLocations={filteredLocations}
            theme={mapState.theme}
            hovered={hovered}
            selectedLocation={mapState.selectedLocation}
            onMarkerHover={handleMarkerMouseOver}
            onMarkerLeave={handleMarkerMouseOut}
            onMarkerClick={toggleLocation}
            lang={mapState.lang}
          />

          <MapInfoPanel
            selectedLocation={mapState.selectedLocation}
            isPanelClosing={mapState.isPanelClosing}
            locations={locations}
            lang={mapState.lang}
            onClose={closeInfo}
            materialLabels={MATERIAL_LABELS}
          />
        </GoogleMap>
      </LoadScript>

      <MapToolbar
        theme={mapState.theme}
        isSatellite={mapState.isSatellite}
        onZoomIn={zoomIn}
        onZoomOut={zoomOut}
        onToggleSatellite={toggleSatellite}
        onCenterOnUser={centerOnUser}
        myLocationText={STRINGS[mapState.lang].myLocation}
      />
    </div>
  );
};

export default Map;