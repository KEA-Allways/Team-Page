
import React, {useState, useEffect, useRef} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/App.css"; // 스타일링 파일 임포트
import Home from './pages/Home';
import Members from './pages/Members';
import First from './pages/First';
import ReactCalendar from './pages/ReactCalendar';

  

function App() {
  
  return (
    (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<First />} />
          <Route path='/home' element={<Home />} />
          <Route path='/members' element={<Members />} />
          <Route path="/calender" element={<ReactCalendar />} />
        </Routes>
      </BrowserRouter>
      


    )
  );
}

export default App;
