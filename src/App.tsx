import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './components/Map';
import Mobile from './components/Mobile';
import { useIsMobile } from './hooks/useIsMobile';
import { Lang } from './data/translations';
import { locations as locationsData } from './data/locations';

// Main App component - updated
function App() {
  const isMobile = useIsMobile();

  const [lang, setLang] = useState<'en' | 'ru' | 'kz'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as 'en' | 'ru' | 'kz') || 'en';
    }
    return 'en';
  });
  const [locations] = useState(locationsData);
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
  }, [lang]);

  const commonProps = {
    lang,
    locations,
    selectedMaterial,
    selectMaterial: setSelectedMaterial,
    selectedLocation,
    selectLocation: setSelectedLocation,
    selectLang: setLang,
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