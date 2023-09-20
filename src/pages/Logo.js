import React from 'react';
import logoImage from "../assets/logo.png"; // 로고 이미지 경로
 // 로고 이미지 경로

function Logo() {
  return (
    <div style={{textAlign : "center"}}>
      <img src={logoImage} alt="로고" className="logo-image" width="500px" />
    </div>
  );
}

export default Logo;