

import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';
import React, { useState } from 'react';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {loggedIn ? <Main /> : <Login onLoginSuccess={() => setLoggedIn(true)} />}
    </div>
  );
}

export default App;
