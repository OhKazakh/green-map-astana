import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api';
import { locationTranslations } from '../data/translations';


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

  // Re-enable street (road) names
  { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ visibility: 'on' }] },
  { featureType: 'road', elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }] },

  // Basic light colors
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
      north: 51.3, // Astana north bound
      south: 51.0, // Astana south bound
      west: 71.3, // Astana west bound
      east: 71.6, // Astana east bound
    },
    strictBounds: true,
  },
  styles: greenFirstStyle,
  disableDefaultUI: true, // disable default UI
  zoom: 12, // set initial zoom level
  center: { lat: 51.125417, lng: 71.433722 }, // set initial center point
};

const locations = [
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
    name: "Sparklo RVM (Kerren Mall sample)",
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
  // --- New Sparklo static entries ---
  {
    id: 15,
    category: "SMALL",
    name: "Sparklo RVM – Turan 55d",
    position: { lat: 51.1169, lng: 71.4178 }, // TODO verify
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  },
  {
    id: 16,
    category: "SMALL",
    name: "Sparklo RVM – Keruen Mall",
    position: { lat: 51.1282, lng: 71.4254 }, // TODO verify
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
    position: { lat: 51.132, lng: 71.4305 }, // TODO verify
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
    position: { lat: 51.155, lng: 71.379 }, // TODO verify
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
    position: { lat: 51.0905, lng: 71.4155 }, // TODO verify
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
    position: { lat: 51.0908, lng: 71.4099 }, // TODO verify
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
    position: { lat: 51.1557, lng: 71.4636 }, // TODO verify
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
    position: { lat: 51.1522, lng: 71.438 }, // TODO verify
    info: "Reverse-vending machine; earn points in Sparklo app. PET bottles & aluminium cans.",
    photo: null,
    icon: "",
    materials: ["Bottles", "Aluminium cans", "Plastic"],
    audience: "Public drop-off"
  }
];

type LocationItem = typeof locations[number];
const MATERIAL_OPTIONS = [
  'Paper',
  'Glass',
  'Clothes',
  'Aluminium cans',
  'Industrial waste',
  'Plastic',
  'Bottles',
  'Metals',
  'Batteries'
];

const MATERIAL_ICONS: Record<string, string> = {
  All: '/icons/all.png',
  Plastic: '/icons/plastic.png',
  Bottles: '/icons/bottles.png',
  Glass: '/icons/glass.png',
  Paper: '/icons/paper.png',
  Metals: '/icons/metals.png',
  Batteries: '/icons/batteries.png',
  'Industrial waste': '/icons/industrial.png',
  'Aluminium cans': '/icons/alucan.png',
  Clothes: '/icons/clothes.png'
};

type Lang = 'en' | 'ru' | 'kz';
const STRINGS: Record<Lang, Record<string, string>> = {
  en: { filter: 'Filter', for: 'For', materialsList: 'Materials:', myLocation: 'My location' },
  ru: { filter: 'Фильтр', for: 'Для', materialsList: 'Материалы:', myLocation: 'Моё местоположение' },
  kz: { filter: 'Сүзгі', for: 'Кімге', materialsList: 'Материалдар:', myLocation: 'Орналасқан жерім' },
};

const MATERIAL_LABELS: Record<Lang, Record<string, string>> = {
  en: {
    All: 'All',
    Plastic: 'Plastic',
    Bottles: 'Bottles',
    Glass: 'Glass',
    Paper: 'Paper',
    Metals: 'Metals',
    Batteries: 'Batteries',
    'Industrial waste': 'Ind. waste',
    'Aluminium cans': 'Alu. cans',
    Clothes: 'Clothes'
  },
  ru: {
    All: 'Все',
    Plastic: 'Пластик',
    Bottles: 'Бутылки',
    Glass: 'Стекло',
    Paper: 'Бумага',
    Metals: 'Металлы',
    Batteries: 'Батареи',
    'Industrial waste': 'Пром. отходы',
    'Aluminium cans': 'Алюм. банки',
    Clothes: 'Одежда'
  },
  kz: {
    All: 'Барлығы',
    Plastic: 'Пластик',
    Bottles: 'Бөтелкелер',
    Glass: 'Шыны',
    Paper: 'Қағаз',
    Metals: 'Металдар',
    Batteries: 'Батареялар',
    'Industrial waste': 'Өнд. қалд.',
    'Aluminium cans': 'Алюм. банкалар',
    Clothes: 'Киім'
  }
};

const Map: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const mapRef = React.useRef<google.maps.Map | null>(null);

  const [selectedMaterial, setSelectedMaterial] = useState<string>(() => {
    if (typeof window === 'undefined') return 'All';
    return sessionStorage.getItem('gm_material') || 'All';
  });
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [isPanelClosing,  setIsPanelClosing]  = useState(false);

  const panelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [userPos, setUserPos] = useState<google.maps.LatLngLiteral | null>(null);

  const [theme, setTheme] = useState<'dark' | 'light'>(() => (typeof window !== 'undefined' && localStorage.getItem('theme') === 'light' ? 'light' : 'dark'));
  const [isSatellite, setIsSatellite] = useState(false);
  const [lang, setLang] = useState<Lang>(() => (typeof window !== 'undefined' ? (localStorage.getItem('lang') as Lang) || 'en' : 'en'));
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  // Removed mobile-only state and bottom-sheet constants/helpers


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
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);
  useEffect(() => {
    try { localStorage.setItem('lang', lang); } catch {}
  }, [lang]);

  // Persist material & sheet snap to sessionStorage
  useEffect(() => {
    try { sessionStorage.setItem('gm_material', selectedMaterial); } catch {}
  }, [selectedMaterial]);


  const [panelPos, setPanelPos] = useState<{ x: number; y: number }>({ x: 16, y: 72 });
  const panelRef = useRef<HTMLDivElement>(null);
  const dragData = useRef<{
    startX: number;
    startY: number;
    origX: number;
    origY: number;
    width: number;
    height: number;
  } | null>(null);

  const onDragging = useCallback((e: MouseEvent) => {
    if (!dragData.current) return;
    const dx = e.clientX - dragData.current.startX;
    const dy = e.clientY - dragData.current.startY;
    const newX = dragData.current.origX + dx;
    const newY = dragData.current.origY + dy;
    const margin = 8; // small inset so it doesn’t stick to the very edge
    const maxX = window.innerWidth - dragData.current.width - margin;
    const maxY = window.innerHeight - dragData.current.height - margin;
    const clampedX = Math.min(Math.max(margin, newX), maxX);
    const minY = 72; 
    const clampedY = Math.min(Math.max(minY, newY), maxY);
    setPanelPos({ x: clampedX, y: clampedY });
  }, []);

  const onTouchDragging = React.useCallback((e: TouchEvent) => {
    if (!dragData.current) return;
    const touch = e.touches[0];
    if (!touch) return;
    const dx = touch.clientX - dragData.current.startX;
    const dy = touch.clientY - dragData.current.startY;
    const newX = dragData.current.origX + dx;
    const newY = dragData.current.origY + dy;
    const margin = 8;
    const maxX = window.innerWidth - dragData.current.width - margin;
    const maxY = window.innerHeight - dragData.current.height - margin;
    const clampedX = Math.min(Math.max(margin, newX), maxX);
    const minY = 72; 
    const clampedY = Math.min(Math.max(minY, newY), maxY);
    setPanelPos({ x: clampedX, y: clampedY });
  }, []);

  const onDragEnd = useCallback(() => {
    dragData.current = null;
    window.removeEventListener('mousemove', onDragging);
    window.removeEventListener('mouseup', onDragEnd);
    window.removeEventListener('touchmove', onTouchDragging);
    window.removeEventListener('touchend', onDragEnd);
  }, [onDragging, onTouchDragging]);

  // Clean up any global listeners if the component unmounts mid‑drag
  useEffect(() => {
    return () => {
      onDragEnd();
    };
  }, [onDragEnd]);

  const onDragStartGeneric = (clientX: number, clientY: number) => {
    dragData.current = {
      startX: clientX,
      startY: clientY,
      origX: panelPos.x,
      origY: panelPos.y,
      width: panelRef.current?.offsetWidth ?? 0,
      height: panelRef.current?.offsetHeight ?? 0,
    };
    window.addEventListener('mousemove', onDragging);
    window.addEventListener('mouseup', onDragEnd);
    window.addEventListener('touchmove', onTouchDragging);
    window.addEventListener('touchend', onDragEnd);
  };

  const onMouseDragStart = (e: React.MouseEvent) => {
    onDragStartGeneric(e.clientX, e.clientY);
  };

  const onTouchDragStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    if (t) onDragStartGeneric(t.clientX, t.clientY);
  };

  const handlePanelMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    // Don't start drag when clicking buttons or selects or inputs
    if (target.closest('button,select,input')) return;
    onMouseDragStart(e);
  };

  const selectMaterial = (m: string) => {
    setSelectedMaterial(m);
  };

  const toggleLocation = (id: number) => {
    if (selectedLocation === id) {
      // start fade‑out
      setIsPanelClosing(true);
      if (panelTimer.current) clearTimeout(panelTimer.current);
      panelTimer.current = setTimeout(() => {
        setSelectedLocation(null);
        setIsPanelClosing(false);
        panelTimer.current = null;
      }, 250);                 // matches CSS duration
    } else {
      // Always open new panel, even if another is open
      setSelectedLocation(id);
    }
  };

  const toggleTheme = () => {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  };

  const toggleLangMenu = () => {
    setLangMenuOpen(o => !o);
  };

  const toggleSatellite = () => {
    setIsSatellite(s => !s);
  };

  // Shared closeInfo helper for info panel
  const closeInfo = () => {
    if (selectedLocation !== null) {
      setIsPanelClosing(true);
      if (panelTimer.current) clearTimeout(panelTimer.current);
      panelTimer.current = setTimeout(() => {
        setSelectedLocation(null);
        setIsPanelClosing(false);
        panelTimer.current = null;
      }, 250);
    }
  };

  // Removed bottom-sheet drag helpers

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

  // Removed MAX_MATERIALS, showAllMaterials, and displayedMaterials for unlimited material options

  const filteredLocations: LocationItem[] = useMemo(() => {
    return locations.filter(l => selectedMaterial === 'All' || l.materials.includes(selectedMaterial));
  }, [selectedMaterial]);


  const mapOptions = useMemo(() => ({
    ...baseOptions,
    mapTypeId: isSatellite ? 'hybrid' : 'roadmap',
    styles: isSatellite ? satelliteStyle : (theme === 'dark' ? greenFirstStyle : lightStyle),
  }), [theme, isSatellite]);


  const handleMarkerMouseOver = (id: number) => {
    if (hovered !== id) setHovered(id);
  };

  const handleMarkerMouseOut = () => {
    setHovered(null);
  };


  console.log('Map component rendering');
  
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100dvh' }}>
      {/* Desktop debug indicator */}

    <LoadScript
      key={lang}
      googleMapsApiKey="AIzaSyAmgx0ZaPWr71vBWcmFjWfnEdHpAik7D1U"
      language={lang}
      region="KZ"
    >
      <GoogleMap
        onClick={() => {
          if (selectedLocation !== null) {
            closeInfo();
          }
        }}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={center}
        zoom={12}
        options={mapOptions}
        onLoad={map => { mapRef.current = map; return undefined; }}
      >
        {/* Theme & Language toggles */}
        <div
          style={{ position: 'absolute', top: 16, left: 16, zIndex: 2501, pointerEvents: 'auto', display: 'flex', gap: 8 }}
        >
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: 'none',
              background: theme === 'dark' ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.6)',
              color: theme === 'dark' ? '#000' : '#fff',
              cursor: 'pointer',
              fontSize: 20,
              lineHeight: '20px',
              transition: 'transform 0.4s ease'
            }}
          >
            <img 
              src="/icons/theme.png" 
              alt="Toggle theme"
              style={{ 
                width: 20, 
                height: 20,
                objectFit: 'contain',
                filter: theme === 'light' ? 'brightness(0) invert(1)' : 'none'
              }} 
            />
          </button>

          <div style={{ position: 'relative' }}>
            <button
              onClick={toggleLangMenu}
              aria-label="Change language"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: 'none',
                background: theme === 'dark' ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.6)',
                color: theme === 'dark' ? '#000' : '#fff',
                cursor: 'pointer',
                fontSize: 14,
                lineHeight: '20px'
              }}
            >
              {lang.toUpperCase()}
            </button>
            {langMenuOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 48,
                  display: 'flex',
                  gap: 6,
                  background: 'transparent',
                  padding: 0,
                  pointerEvents: 'auto'
                }}
              >
                {(['en', 'ru', 'kz'] as Lang[]).filter(code => code !== lang).map((code, i) => (
                  <button
                    key={code}
                    onClick={() => { setLang(code); setLangMenuOpen(false); }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      border: 'none',
                      background: theme === 'dark' ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.6)',
                      color: theme === 'dark' ? '#000' : '#fff',
                      cursor: 'pointer',
                      fontSize: 14,
                      lineHeight: '20px',
                      animation: `bubbleIn 0.18s ease-out ${i * 0.05}s both`
                    }}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Floating Filters Panel (desktop) */}
        <div
          ref={panelRef}
          style={{
            position: 'absolute',
            left: panelPos.x,
            top: panelPos.y,
            zIndex: 2500,
            width: lang === 'ru' ? 420 : (lang === 'kz' ? 440 : 360),
            padding: 20,
            background: theme === 'light' ? 'rgba(0,0,0,0.60)' : 'rgba(255,255,255,0.70)', 
            color: theme === 'light' ? '#fff' : 'inherit',
            border: '1px solid #ccc',
            borderRadius: 10,
            backdropFilter: 'blur(4px)',
            userSelect: 'none',
            maxHeight: '70vh',
            overflowY: 'auto'
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 16, cursor: 'move' }}
            onMouseDown={handlePanelMouseDown}
            onTouchStart={onTouchDragStart}
          >
            <span style={{ fontSize: 18, fontWeight: 600 }}>{STRINGS[lang].filter}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 12 }}>
            {['All', ...MATERIAL_OPTIONS].map(m => (
              <label key={m} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <img 
                  src={MATERIAL_ICONS[m] ?? '/icons/all.png'} 
                  alt={m}
                  style={{ 
                    width: 22, 
                    height: 22, 
                    marginRight: 8,
                    objectFit: 'contain',
                    filter: theme === 'light' ? 'brightness(0) invert(1)' : 'none'
                  }} 
                />
                <input
                  type="radio"
                  checked={selectedMaterial === m}
                  onChange={() => selectMaterial(m)}
                  style={{ marginRight: 6 }}
                />
                {MATERIAL_LABELS[lang][m] ?? m}
              </label>
            ))}
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
              onMouseOver={() => handleMarkerMouseOver(id)}
              onMouseOut={handleMarkerMouseOut}
              onClick={() => toggleLocation(id)}
            />
          );
        })}
        {/* Hover bubble */}
        {hovered !== null && hovered !== selectedLocation && (
          <OverlayView
            position={locations.find(l => l.id === hovered)!.position}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              style={{
                transform: 'translate(-50%, -120%)',  // center & lift above marker
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid #ccc',
                borderRadius: 8,
                padding: 12,
                minWidth: 200,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                position: 'relative',
                pointerEvents: 'none',
                zIndex: 1000
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: 0,
                  height: 0,
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: '6px solid rgba(255,255,255,0.85)',
                  bottom: -6,
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              />
              {(() => {
                const cur = locations.find(l => l.id === hovered)!;
                const translations = locationTranslations[cur.name];
                const currentLang = translations ? translations[lang] : null;
                
                return (
                  <>
                    <h3 style={{ margin: '0 0 8px 0' }}>
                      {currentLang?.name || cur.name}
                    </h3>
                    {cur.photo && (
                      <img
                        src={cur.photo}
                        alt={currentLang?.name || cur.name}
                        style={{ width: 100, borderRadius: 8, marginBottom: 8 }}
                      />
                    )}
                    <p style={{ margin: 0 }}>
                      {currentLang?.info || cur.info}
                    </p>
                    {cur.audience && (
                      <p style={{ margin: '4px 0 0 0', fontSize: 12, color: '#555' }}>
                        {STRINGS[lang].for}: {currentLang?.audience || cur.audience}
                      </p>
                    )}
                  </>
                );
              })()}
            </div>
          </OverlayView>
        )}
        {/* Click panel (fixed top‑right) */}
        {(selectedLocation !== null || isPanelClosing) && (
          <div
            style={{
              position: 'absolute',
              top: 72,
              right: 16,
              zIndex: 2600,
              width: 340,
              maxWidth: '90vw',
              maxHeight: '80vh',
              overflowY: 'auto',
              background: 'rgba(255,255,255,0.95)',
              border: '1px solid #ccc',
              borderRadius: 10,
              padding: 20,
              boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
              animation: isPanelClosing
                ? 'fadeOutDown 0.25s ease-in forwards'
                : 'fadeInUp   0.25s ease-out'
            }}
          >
            {(() => {
              const cur = locations.find(l => l.id === selectedLocation)!;
              const translations = locationTranslations[cur.name];
              const currentLang = translations ? translations[lang] : null;
              

              
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
                    <h2 style={{ margin: 0, fontSize: 20 }}>
                      {currentLang?.name || cur.name}
                    </h2>
                    <button
                      onClick={closeInfo}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        fontSize: 22,
                        cursor: 'pointer',
                        lineHeight: '14px'
                      }}
                      aria-label="Close"
                    >
                      <img 
                  src="/icons/theme.png" 
                  alt="Close"
                  style={{ 
                    width: 18, 
                    height: 18,
                    objectFit: 'contain',
                    filter: theme === 'light' ? 'brightness(0) invert(1)' : 'none'
                  }} 
                />
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
                        <li key={m}>{MATERIAL_LABELS[lang][m] ?? m}</li>
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
    {/* Mobile bottom sheet & controls overlay removed */}
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
        −
      </button>
      <button
        onClick={toggleSatellite}
        className="w-10 h-10 rounded bg-black/70 border border-white/30 text-white flex items-center justify-center text-lg"
        title={isSatellite ? 'Map view' : 'Satellite view'}
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
        className="w-10 h-10 rounded bg-black/70 border border-white/30 text-white flex items-center justify-center text-lg"
        title={STRINGS[lang].myLocation}
      >
                        <img 
                  src="/icons/findme.png" 
                  alt="My location"
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

export default Map;