
import React from 'react';
import './App.css';
import ListaTareas from './components/ListaTareas';

import Logo from './images/free-logo.png'
function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <div className='cont-logo'>
          <img 
          src={Logo}
          alt="" 
          className='logo' />
        </div>
        <div className='lista-tareas'>
          <h1>Mis tareas</h1>
          <ListaTareas/>
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;