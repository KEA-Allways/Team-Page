import React, {useState, useEffect, useRef} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Welcome from './pages/Welcome';
import "./styles/App.css"; // 스타일링 파일 임포트
import Logo from './pages/Logo';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Members from './pages/Members';
import First from './pages/First';


function App() {
  

  return (
    (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<First />} />
          <Route path='/home' element={<Home />} />
          <Route path='/members' element={<Members />} />
        </Routes>
      </BrowserRouter>
      
    )
  );
}

export default App;
