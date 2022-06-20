import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: '',
    age: null,
  });

  const [usersList, setUsersList] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    const newUsersList = [...usersList, { ...user }];
    setUsersList(newUsersList);
  }

  function handleInput(e, input) {
    const value = e.target.type === 'number' ? +e.target.value : e.target.value;
    setUser({
      ...user,
      [input]: value,
    });
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20 ">
      <form className="d-flex flex-column card p-20 mb-20">
        <input
          onInput={(e) => handleInput(e, 'name')}
          type="text"
          className="mb-20"
          placeholder="Nom"
        />
        <input
          onInput={(e) => handleInput(e, 'age')}
          type="number"
          className="mb-20"
          placeholder="Age"
        />
        <button onClick={handleClick} className="btn btn-primary">
          Envoi
        </button>
      </form>
      <ul className="d-flex flex-column card p-20">
        {usersList.map((u) => (
          <li key={u.name}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
