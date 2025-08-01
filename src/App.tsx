import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './components/Map';
import Mobile from './components/Mobile';
import { locations as locationsData } from './data/locations';

function App() {
  const [lang, setLang] = useState<'en' | 'ru' | 'kz'>('en');
  const [locations] = useState(locationsData);
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

  // FORCE MOBILE COMPONENT FOR TESTING
  const ActiveComponent = Mobile;

  console.log('=== TEST DEBUG ===');
  console.log('Forcing Mobile component');
  console.log('ActiveComponent:', ActiveComponent);
  console.log('==================');

  return (
    <div>
      {/* Test indicator */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        background: 'red',
        color: 'white',
        padding: '8px 12px',
        fontSize: '16px',
        fontWeight: 'bold',
        zIndex: 9999,
        border: '2px solid white'
      }}>
        🧪 TEST: FORCED MOBILE (viewport: {window.innerWidth}px)
      </div>
      <ActiveComponent {...commonProps} />
    </div>
  );
}

export default App;