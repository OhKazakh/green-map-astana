import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [mobile, setMobile] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    const updateMobile = (e: MediaQueryListEvent | MediaQueryList) => {
      setMobile(e.matches);
    };
    
    updateMobile(mediaQuery);
    
    mediaQuery.addEventListener('change', updateMobile);
    
    return () => {
      mediaQuery.removeEventListener('change', updateMobile);
    };
  }, []);
  
  return mobile;
};