import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// components
import Navbar from './components/nav';
import Sidebar from './components/sidebar';
//Pages
import Home from './pages/home';
import About from './pages/About';
import Products from './pages/products';
import Categories from './pages/categories';
import Add from './pages/add';
import Edit from './pages/edit';
import View from './pages/view';


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
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='about' element={<About/>} />
              <Route path='products' element={<Products/>} />
              <Route path='products/add' element={<Add/>} />
              <Route path='products/view/:productID' element={<View/>} />
              <Route path='products/edit/:productID' element={<Edit/>} />
              <Route path='categories' element={<Categories/>} />
            </Routes>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
