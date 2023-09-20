import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/App.css';
import logoImage from "../assets/logo.png"; 
import GitIcon from "../assets/github.png";

function Navbar() {
  // 현재 URL 가져오기
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-lg-0 px-lg-3" style={{ backgroundColor: '#e3f2fd' }}>
      <a className="navbar-brand" href="/home"><img src={logoImage} width={70} alt="로고" /></a>
      <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav">
          <Link to="/vision" className={`nav-item nav-link ${location.pathname === '/vision' ? 'active' : ''}`}>Vision</Link>
          <Link to="/members" className={`nav-item nav-link ${location.pathname === '/members' ? 'active' : ''}`}>Members</Link>
          <Link to="/calendar" className={`nav-item nav-link ${location.pathname === '/calendar' ? 'active' : ''}`}>Calendar</Link>
        </div>
        <div className="ms-auto d-none d-lg-flex">
          <a className="navbar-brand" href='https://github.com/KEA-Allways/Team-Pages'><img src={GitIcon} alt="깃아이콘" className="logo-image" width="50px" /></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
