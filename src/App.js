import React, { useState } from 'react';

function App() {
  console.log('Rendu du composant App');
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(true);

  function handleClick() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setShowCount(!showCount);
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <button onClick={handleClick} className="mb-20">
        +1 {showCount && <span> - Valeur : {count}</span>}
      </button>
    </div>
  );
}

export default App;
