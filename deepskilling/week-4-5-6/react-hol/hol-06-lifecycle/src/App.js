import React, { useState } from 'react';
import LifecycleDemo from './components/LifecycleDemo';

function App() {
  const [showSecond, setShowSecond] = useState(true);
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>HOL 6 – Component Lifecycle</h1>
      <LifecycleDemo name="Component A" />
      <button onClick={() => setShowSecond(s => !s)} style={{ margin: '10px 0', padding: '8px 16px' }}>
        {showSecond ? 'Unmount' : 'Mount'} Component B
      </button>
      {showSecond && <LifecycleDemo name="Component B" />}
    </div>
  );
}
export default App;
