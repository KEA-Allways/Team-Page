import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Changmeen from './pages/Changmeen';
import Dajeong from './pages/Dajeong';
import Minjun from './pages/Minjun';
import Suha from './pages/Suha';
import Sungjun from './pages/Sungjun';
import './App.css'; // 스타일링 파일 임포트
import Logo from './pages/Logo';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="header">
          <Logo/>
          <h1>
            <span style={{ color: 'FBF562' }}>ALWAYS</span>{' '}
            <span style={{ color: '#43C0FF' }}>ALL WAYS</span> 
          </h1>


        </header>
        
        <nav className="nav">

        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="Suha" element={<Suha />} />
          <Route path="Dajeong" element={<Dajeong />} />
          <Route path="Sungjun" element={<Sungjun />} />
          <Route path="Changmeen" element={<Changmeen />} />
          <Route path="Minjun" element={<Minjun />} />
          
          </Route>
          </Routes>
          

        </nav>
        
      </div>
    </BrowserRouter>
  );
}

export default App;