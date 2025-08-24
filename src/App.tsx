import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './components/Map';
import Mobile from './components/Mobile';
import { useIsMobile } from './hooks/useIsMobile';
import { Lang } from './data/translations';
import { locations as locationsData } from './data/locations';

function App() {
  const isMobile = useIsMobile();

  const [lang, setLang] = useState<'en' | 'ru' | 'kz'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as 'en' | 'ru' | 'kz') || 'en';
    }
    return 'en';
  });
  const [locations] = useState(locationsData);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
  }, [lang]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const handleMaterialSelect = (material: string) => {
    setSelectedMaterials(prev => {
      if (prev.includes(material)) {
        return prev.filter(m => m !== material);
      } else {
        return [...prev, material];
      }
    });
  };

  const commonProps = {
    lang,
    locations,
    selectedMaterials,
    selectMaterial: handleMaterialSelect,
    selectedLocation,
    selectLocation: setSelectedLocation,
    selectLang: setLang,
    theme,
  };

  const matchMediaResult = window.matchMedia('(max-width: 768px)').matches;
  const forceMobile = matchMediaResult;
  
  const ActiveComponent = (isMobile || forceMobile) ? Mobile : Map;
  
  return (
    <div>
      <ActiveComponent {...commonProps} />
    </div>
  );
}

export default App;