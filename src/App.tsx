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
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    
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

  const [lang, setLang] = useState<'en' | 'ru' | 'kz'>('en');
  const [locations] = useState(locationsData);       // use shared locations data
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const commonProps = {
    lang,
    locations,
    selectedMaterial,
    selectMaterial: setSelectedMaterial,
    selectedLocation,
    selectLocation: setSelectedLocation,
  };

  // Force mobile component for small viewports (for debugging)
  const matchMediaResult = window.matchMedia('(max-width: 640px)').matches;
  const forceMobile = matchMediaResult; // Direct use of media query result
  
  // Use responsive component selection
  const ActiveComponent = (isMobile || forceMobile) ? Mobile : Map;
  
  return (
    <div>
      {/* Debug indicator - remove this later */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        background: (isMobile || forceMobile) ? 'red' : 'green',
        color: 'white',
        padding: '8px 12px',
        fontSize: '16px',
        fontWeight: 'bold',
        zIndex: 9999,
        border: '2px solid white'
      }}>
        {(isMobile || forceMobile) ? '📱 MOBILE' : '🖥️ DESKTOP'} (viewport: {window.innerWidth}px)
      </div>
      <ActiveComponent {...commonProps} />
    </div>
  );
}

export default App;