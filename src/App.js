import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import DashBoard from './Components/DashBoard';

function App() {
  return (
    <div className='App bg-dark'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/DashBoard' element={<DashBoard />}/>
        </Routes>       
      </BrowserRouter>
    </div>
  );
}

export default App;