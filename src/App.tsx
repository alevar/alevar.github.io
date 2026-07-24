// src/App.tsx
import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    // Immediate redirect to homepage
    window.location.replace('https://alevar.github.io/homepage');
  }, []);
  return null;
};

export default App;