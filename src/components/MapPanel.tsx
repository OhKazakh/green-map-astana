import React, { useRef, useCallback, useEffect, useState } from 'react';
import './Map.css';

type Lang = 'en' | 'ru' | 'kz';

interface MapPanelProps {
  lang: Lang;
  theme: 'dark' | 'light';
  selectedMaterial: string;
  onMaterialSelect: (material: string) => void;
  materialOptions: string[];
  materialIcons: Record<string, string>;
  materialLabels: Record<Lang, Record<string, string>>;
}

const MapPanel: React.FC<MapPanelProps> = ({
  lang,
  theme,
  selectedMaterial,
  onMaterialSelect,
  materialOptions,
  materialIcons,
  materialLabels
}) => {
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
    const margin = 8;
    const maxX = window.innerWidth - dragData.current.width - margin;
    const maxY = window.innerHeight - dragData.current.height - margin;
    const clampedX = Math.min(Math.max(margin, newX), maxX);
    const minY = 72; 
    const clampedY = Math.min(Math.max(minY, newY), maxY);
    setPanelPos({ x: clampedX, y: clampedY });
  }, []);

  const onTouchDragging = useCallback((e: TouchEvent) => {
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
    if (target.closest('button,select,input')) return;
    onMouseDragStart(e);
  };

  return (
    <div
      ref={panelRef}
      className={`map-panel ${theme} ${lang}`}
      style={{
        left: panelPos.x,
        top: panelPos.y,
      }}
    >
      <div
        className="map-panel-header"
        onMouseDown={handlePanelMouseDown}
        onTouchStart={onTouchDragStart}
      >
        <span className="map-panel-title">
          {lang === 'en' ? 'Filter' : lang === 'ru' ? 'Фильтр' : 'Сүзгі'}
        </span>
      </div>
      <div className="map-panel-grid">
        {materialOptions.map(m => (
          <label key={m} className="map-panel-option">
            <img 
              src={materialIcons[m] ?? '/icons/all.png'} 
              alt={m}
              className={`map-panel-option-icon ${theme === 'light' ? 'light' : ''}`}
            />
            <input
              type="radio"
              checked={selectedMaterial === m}
              onChange={() => onMaterialSelect(m)}
              className="map-panel-option-input"
            />
            {materialLabels[lang][m] ?? m}
          </label>
        ))}
      </div>
    </div>
  );
};

export default MapPanel;
