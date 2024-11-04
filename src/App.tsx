// src/App.tsx
import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://alevar.github.io/homepage';
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

export default App;
