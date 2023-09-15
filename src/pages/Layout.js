import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from './Logo'; // 로고 컴포넌트 임포트
import './Layout'; // 스타일링을 위한 CSS 파일

const Layout = () => {
  return (
    <div className="layout">
        
      <header className="header">
        

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
          <Link to="/Dajeong">
            <img
              width="100px"
              src="/dajeong.png" // 이미지 경로를 /로 시작하도록 수정
              alt="Dajeong Image"
              className="center-image"
            />
          </Link>
          <Link to="/Minjun">
          <img
              width="100px"
              src="/minjun.jpeg" // 이미지 경로를 /로 시작하도록 수정
              alt="Dajeong Image"
              className="center-image"
            />
          </Link>
          
          <Link to="/Sungjun">
          <img
              width="100px"
              src="/Sungjun.png" // 이미지 경로를 /로 시작하도록 수정
              alt="Sungjun Image"
              className="center-image"
            />
          </Link>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;