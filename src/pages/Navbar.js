import React from 'react';
import logoImage from "../assets/logo.png"; // 로고 이미지 경로
import '../styles/App.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid" >
        <a className="navbar-brand" href="/home"><img src={logoImage} width={50}/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/vision">Vision</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/members">Members</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/calender">Calender</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
