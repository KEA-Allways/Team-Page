import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './pages/Layout';
import "./styles/App.css"; // 스타일링 파일 임포트
import Logo from './pages/Logo';

function App() {
  return (
    (
      <div>
        <header className="header">
          <div className="header-content">
            <Logo />
            
            <h1>
              <span style={{ color: 'FBF562' }}>ALWAYS</span>{' '}
              <span style={{ color: '#43C0FF' }}>ALL WAYS</span> 
            </h1>
          </div>
        </header>
        
        <Layout/>
      </div>
    )
  );
}

export default App;
