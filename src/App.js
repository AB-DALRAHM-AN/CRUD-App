import React from 'react';
import './App.css';
import { Route, Router } from 'react-router-dom';

//Pages
import Navbar from './components/nav';
import Sidebar from './components/sidebar';


function App() {
  return (
    <div className="App">
      <>
        <Navbar/>
        <div className='row'>
          <div className='col-2'>
            <Sidebar/>
          </div>
          <div className='col-10'>
            test2
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
