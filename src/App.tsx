 // ✱ App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';

// correct relative paths (they live in src/components)
import Map from './components/Map';
import Mobile from './components/Mobile';
import { locations as locationsData } from './data/locations';

/* --- breakpoint logic (as before) --- */
const useIsMobile = () => {
  const [mobile, setMobile] = useState(false);
  
  useEffect(() => {
    // Use CSS media query for more reliable responsive detection
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    const updateMobile = (e: MediaQueryListEvent | MediaQueryList) => {
      setMobile(e.matches);
    };
    
    // Set initial value
    updateMobile(mediaQuery);
    
    // Listen for changes
    mediaQuery.addEventListener('change', updateMobile);
    
    return () => {
      mediaQuery.removeEventListener('change', updateMobile);
    };
  }, []);
  
  return mobile;
};

/* --- shared app-state --- */
function App() {
  const isMobile = useIsMobile();

  const [lang, setLang] = useState<'en' | 'ru' | 'kz'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as 'en' | 'ru' | 'kz') || 'en';
    }
    return 'en';
  });
  const [locations] = useState(locationsData);       // use shared locations data
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  // Save language to localStorage when it changes
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

  // Force mobile component for small viewports (for debugging)
  const matchMediaResult = window.matchMedia('(max-width: 768px)').matches;
  const forceMobile = matchMediaResult; // Direct use of media query result
  
  // Use responsive component selection
  const ActiveComponent = (isMobile || forceMobile) ? Mobile : Map;
  

  
  return (
    <div>
      <ActiveComponent {...commonProps} />
    </div>
  );
}

export default App;