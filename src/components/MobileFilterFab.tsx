import React, { useState, useRef, useCallback } from 'react';

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
  All: '🔄',
  Plastic: '🧴',
  Bottles: '🍾',
  Glass: '🧪',
  Paper: '📄',
  Metals: '🔩',
  Batteries: '🔋',
  'Industrial waste': '🏭',
  'Aluminium cans': '🥫',
  Clothes: '👕'
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
}

const MobileFilterFab: React.FC<Props> = ({ lang, selectedMaterial, selectMaterial }) => {
  console.log('MobileFilterFab rendering:', { lang, selectedMaterial });
  const [isExpanded, setIsExpanded] = useState(false);
  const [pos, setPos] = useState({ x: 16, y: 72 });
  const dragRef = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (!isExpanded) {
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        origX: pos.x,
        origY: pos.y
      };
    }
  }, [isExpanded, pos]);

  const onPointerMove = useCallback((e: PointerEvent) => {
    if (!dragRef.current || isExpanded) return;
    
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    
    const newX = dragRef.current.origX + dx;
    const newY = dragRef.current.origY + dy;
    
    // Constrain to viewport
    const maxX = window.innerWidth - 56;
    const maxY = window.innerHeight - 56;
    
    setPos({
      x: Math.max(16, Math.min(newX, maxX)),
      y: Math.max(72, Math.min(newY, maxY))
    });
  }, [isExpanded]);

  const onPointerUp = useCallback(() => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
    dragRef.current = null;
  }, [isExpanded]);

  React.useEffect(() => {
    if (!isExpanded) {
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      
      return () => {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
      };
    }
  }, [isExpanded, onPointerMove, onPointerUp]);

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        zIndex: 2500,
        pointerEvents: 'auto'
      }}
    >
      {isExpanded ? (
        <div
          style={{
            background: 'rgba(255,255,255,0.95)',
            border: '1px solid #ccc',
            borderRadius: 12,
            padding: 16,
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            minWidth: 280,
            maxWidth: '90vw'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 16, fontWeight: 600 }}>{STRINGS[lang].filter}</span>
            <button
              onClick={() => setIsExpanded(false)}
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
                justifyContent: 'center'
              }}
            >
              ×
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 8 }}>
            {['All', ...MATERIAL_OPTIONS].map(m => (
              <label key={m} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: 14 }}>
                <span style={{ fontSize: 16, marginRight: 6 }}>{MATERIAL_ICONS[m] ?? '♻️'}</span>
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
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(0,0,0,0.8)',
            color: '#fff',
            cursor: 'pointer',
            fontSize: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            touchAction: 'none'
          }}
          aria-label="Filter materials"
        >
          ⚙️
        </button>
      )}
    </div>
  );
};

export default MobileFilterFab; 