export const MAP_CONSTANTS = {
  PANEL: {
    MARGIN: 8,
    MIN_Y: 72,
    DEFAULT_X: 16,
    DEFAULT_Y: 72,
    WIDTH: {
      EN: 360,
      RU: 420,
      KZ: 440
    },
    PADDING: 20,
    BORDER_RADIUS: 10,
    MAX_HEIGHT: '70vh'
  },
  ANIMATION: {
    PANEL_CLOSE_DELAY: 250,
    HOVER_BUBBLE_OFFSET: 'translate(-50%, -120%)',
    TOOLTIP_ARROW_SIZE: 6,
    FADE_DURATION: 250
  },
  Z_INDEX: {
    CONTROLS: 2501,
    PANEL: 2500,
    MARKERS: 1000,
    INFO_PANEL: 2600,
    TOOLBAR: 2600
  },
  MARKER: {
    SCALE: 6,
    STROKE_WEIGHT: 2,
    USER_SCALE: 8,
    USER_PULSE_SIZE: 32,
    HOVER_MIN_WIDTH: 200
  },
  MAP: {
    DEFAULT_ZOOM: 12,
    USER_LOCATION_ZOOM: 15,
    CENTER: {
      lat: 51.125417,
      lng: 71.433722
    },
    BOUNDS: {
      NORTH: 51.3,
      SOUTH: 51.0,
      WEST: 71.3,
      EAST: 71.6
    }
  },
  COLORS: {
    USER_LOCATION: '#00aaff',
    USER_PULSE: 'rgba(0,170,255,0.45)',
    BUSINESS_MARKER: {
      DARK: '#ff8f00',
      LIGHT: '#e65100'
    },
    PUBLIC_MARKER: {
      DARK: '#3ddc84',
      LIGHT: '#2e7d32'
    },
    WHITE: '#ffffff',
    LIGHT_GRAY: '#f5f5f5',
    GRAY: '#ccc',
    DARK_GRAY: '#555'
  },
  SIZES: {
    BUTTON_SMALL: 40,
    BUTTON_LARGE: 48,
    ICON_SMALL: 20,
    ICON_LARGE: 24,
    FONT_SMALL: 12,
    FONT_MEDIUM: 14,
    FONT_LARGE: 18,
    FONT_XLARGE: 20
  },
  SPACING: {
    SMALL: 6,
    MEDIUM: 8,
    LARGE: 12,
    XLARGE: 16,
    XXLARGE: 20
  }
};

export interface LocationItem {
  id: number;
  category: "BIG" | "SMALL";
  name: string;
  position: { lat: number; lng: number };
  info: string;
  photo: string | null;
  icon: string;
  materials: string[];
  audience: string;
}

export const MATERIAL_OPTIONS = [
  'All',
  'Paper',
  'Glass',
  'Clothes',
  'Aluminium cans',
  'Industrial waste',
  'Plastic',
  'Bottles',
  'Metals'
];

export const MATERIAL_ICONS: Record<string, string> = {
  All: '/icons/all.png',
  Plastic: '/icons/plastic.png',
  Bottles: '/icons/bottles.png',
  Glass: '/icons/glass.png',
  Paper: '/icons/paper.png',
  Metals: '/icons/metals.png',
  'Industrial waste': '/icons/industrial.png',
  'Aluminium cans': '/icons/alucan.png',
  Clothes: '/icons/clothes.png'
};

export const MATERIAL_LABELS = {
  en: {
    All: 'All',
    Plastic: 'Plastic',
    Bottles: 'Bottles',
    Glass: 'Glass',
    Paper: 'Paper',
    Metals: 'Metals',
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
    'Industrial waste': 'Өнд. қалд.',
    'Aluminium cans': 'Алюм. банкалар',
    Clothes: 'Киім'
  }
};

export const STRINGS = {
  en: { filter: 'Filter', for: 'Materials', materialsList: 'Select materials:', myLocation: 'My location' },
  ru: { filter: 'Фильтр', for: 'Материалы', materialsList: 'Выберите материалы:', myLocation: 'Моё местоположение' },
  kz: { filter: 'Сүзгі', for: 'Материалдар', materialsList: 'Материалдарды таңдаңыз:', myLocation: 'Орналасқан жерім' },
};
