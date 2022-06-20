import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: '',
    age: null,
  });

  function handleClick(e) {
    e.preventDefault();
    console.log(user);
  }

  function handleNameInput(e) {
    setUser()
  }

  function handleAgeInput(e) {}

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <form className="d-flex flex-column card p-20">
        <input
          onInput={handleNameInput}
          type="text"
          className="mb-20"
          placeholder="Nom"
        />
        <input
          onInput={handleAgeInput}
          type="number"
          className="mb-20"
          placeholder="Age"
        />
        <button onClick={handleClick} className="btn btn-primary">
          Envoi
        </button>
      </form>
    </div>
  );
}

export default App;
