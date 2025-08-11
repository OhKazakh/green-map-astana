import React, { useState, useCallback } from 'react';

// Constants from Map.tsx
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

interface Props {
  lang: Lang;
  selectedMaterial: string;
  selectMaterial: (material: string) => void;
  theme: 'dark' | 'light';
}

const MobileFilterFab: React.FC<Props> = ({ lang, selectedMaterial, selectMaterial, theme }) => {
  console.log('MobileFilterFab rendering:', { lang, selectedMaterial });
  const [isExpanded, setIsExpanded] = useState(false);
  const [pos] = useState({ x: 16, y: 20 }); // Moved slightly left to avoid overlap

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    // Stop event from bubbling up to prevent immediate closure
    e.stopPropagation();
    
    if (!isExpanded) {
      setIsExpanded(true);
    }
  }, [isExpanded]);

  const closePanel = useCallback(() => {
    setIsExpanded(false);
  }, []);

  // Close panel when clicking outside
  React.useEffect(() => {
    if (isExpanded) {
      const handleClickOutside = (e: Event) => {
        const target = e.target as Element;
        
        // Check if click is outside the filter panel
        const isOutsidePanel = !target.closest('[data-filter-panel]');
        
        // Check if click is on the map or any map-related element
        const isOnMap = target.closest('.google-map') || 
                       target.closest('[role="application"]') ||
                       target.closest('.gm-style') ||
                       target.closest('.gm-fullscreen-control') ||
                       target.closest('.gm-svpc') ||
                       target.closest('.gm-control-active');
        
        // Also check if click is on the body or html (blank space)
        const isOnBlankSpace = target === document.body || 
                              target === document.documentElement ||
                              target.tagName === 'BODY' ||
                              target.tagName === 'HTML';
        
        if (isOutsidePanel || isOnMap || isOnBlankSpace) {
          closePanel();
        }
      };
      
      // Handle both mouse and touch events with capture phase
      document.addEventListener('mousedown', handleClickOutside, true);
      document.addEventListener('touchstart', handleClickOutside, true);
      document.addEventListener('click', handleClickOutside, true);
      
      // Listen for custom close event from Mobile component
      const handleCustomClose = () => closePanel();
      window.addEventListener('closeFilterPanel', handleCustomClose);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside, true);
        document.removeEventListener('touchstart', handleClickOutside, true);
        document.removeEventListener('click', handleClickOutside, true);
        window.removeEventListener('closeFilterPanel', handleCustomClose);
      };
    }
  }, [isExpanded, closePanel]);

  console.log('Filter panel position:', pos, 'zIndex: 99999');
  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        zIndex: 99999,
        pointerEvents: 'auto'
      }}
    >
      {isExpanded ? (
        <div
          data-filter-panel
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'rgba(255,255,255,0.95)',
            border: '1px solid #ccc',
            borderRadius: 12,
            padding: 16,
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            minWidth: 280,
            maxWidth: 'calc(100vw - 140px)', // Further reduced to ensure no overlap with buttons
            animation: 'slideInRight 0.3s ease-out'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 16, fontWeight: 600 }}>{STRINGS[lang].filter}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              style={{
                border: 'none',
                background: 'transparent',
                fontSize: 20,
                cursor: 'pointer',
                padding: 0,
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'bounceIn 0.5s ease-out'
              }}
            >
              ×
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 8 }}>
            {['All', ...MATERIAL_OPTIONS].map((m, index) => (
              <label 
                key={m} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer', 
                  fontSize: 14,
                  animation: `fadeInUp 0.4s ease-out ${index * 0.1}s both`
                }}
              >
                <img 
                  src={MATERIAL_ICONS[m] ?? '/icons/all.png'} 
                  alt={m}
                  style={{ 
                    width: 24, 
                    height: 24, 
                    marginRight: 6,
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
      ) : (
        <button
          onPointerDown={onPointerDown}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: 'none',
            background: theme === 'dark' ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.8)',
            color: theme === 'dark' ? '#000' : '#fff',
            cursor: 'pointer',
            fontSize: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            touchAction: 'none',
            animation: 'fabBounceIn 0.6s ease-out'
          }}
          aria-label="Filter materials"
        >
          <img 
            src="/icons/settings.png" 
            alt="Filter materials"
            style={{ 
              width: 24, 
              height: 24,
              objectFit: 'contain',
              filter: theme === 'light' ? 'brightness(0) invert(1)' : 'none'
            }} 
          />
        </button>
      )}
    </div>
  );
};

export default MobileFilterFab; 