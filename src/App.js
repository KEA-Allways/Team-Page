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
          <Link to="/Suha">
            <img
              width="100px"
              src="/suha.png" // 이미지 경로를 /로 시작하도록 수정
              alt="Suha Image"
              className="center-image"
            />
          </Link>

          <Link to="/Changmeen">
            <img
              width="100px"
              src="/changmeen.png" // 이미지 경로를 /로 시작하도록 수정
              alt="Changmeen Image"
              className="center-image"
            />
          </Link>

          <Link to="/Sungjun">
            
          </Link>

          <Link to="/Changmeen">Changmeen</Link>
          <Link to="/Dajeong">Dajeong</Link>
          <Link to="/Minjun">Minjun</Link>
          <Link to="/Suha">Suha</Link>
          <Link to="/Sungjun">
            <img
              width="100px"
              src="/Sungjun.png" // 이미지 경로를 /로 시작하도록 수정
              alt="Sungjun Image"
              className="center-image"
            />
            </Link>
        </nav>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
