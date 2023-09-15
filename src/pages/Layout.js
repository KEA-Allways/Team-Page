import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from './Logo'; // 로고 컴포넌트 임포트
import './Layout'; // 스타일링을 위한 CSS 파일

const Layout = () => {
  return (
    <div className="layout">
        
      <header className="header">
        
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/Changmin" className="nav-link">
                Changmin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Suha" className="nav-link">
                Suha
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Sungjun" className="nav-link">
                Sungjun
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Dajung" className="nav-link">
                Dajung
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Minjue" className="nav-link">
                Minjue
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
