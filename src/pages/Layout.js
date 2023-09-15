import React, { useState } from 'react';
import '../styles/Layout.css'; // 스타일링을 위한 CSS 파일

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 여부 상태

  // 이미지 클릭 시 모달 열기
  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="layout">
      <header className="header">
        {/* 부모 컨테이너 */}
        <div className="image-container" style={{ position: 'relative' }}>
          <img
            width="100px"
            src="/suha.png"
            alt="Suha Image"
            className="center-image"
            onClick={handleImageClick} // 이미지 클릭 시 모달 열기
          />
          <img
            width="100px"
            src="/sungjun.png"
            alt="sungjun Image"
            className="center-image"
            onClick={handleImageClick} // 이미지 클릭 시 모달 열기
          />
          <img
            width="100px"
            src="/changmeen.png"
            alt="changmeen Image"
            className="center-image"
            onClick={handleImageClick} // 이미지 클릭 시 모달 열기
          />
          <img
            width="100px"
            src="/dajeong.png"
            alt="dajeong Image"
            className="center-image"
            onClick={handleImageClick} // 이미지 클릭 시 모달 열기
          />
          <img
            width="100px"
            src="/sungjun.png"
            alt="sungjun Image"
            className="center-image"
            onClick={handleImageClick} // 이미지 클릭 시 모달 열기
          />

          {/* 모달 컴포넌트 */}
          {isModalOpen && (
            <div className="modal" style={{ position: 'absolute', top: '0', left: '0' }}>
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Modal Content</h2>
                <p>이 곳에 모달에 표시할 내용을 추가하세요.</p>
                {/* 예시: */}
                 
                <p>모달 내용을 원하는 대로 커스터마이즈하세요.</p>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Layout;
