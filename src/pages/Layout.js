import React, { useState } from 'react';
import Modal from 'react-modal';
import { customModalStyles } from '../ModalStyles';

Modal.setAppElement('#root');

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="layout">
      <header className="header">
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
            src="/minjun.jpeg"
            alt="minjun Image"
            className="center-image"
            onClick={handleImageClick} // 이미지 클릭 시 모달 열기
          />
      </header>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={customModalStyles}
      >
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Modal Content</h2>
          <p>이 곳에 모달에 표시할 내용을 추가하세요.</p>
          <p>모달 내용을 원하는 대로 커스터마이즈하세요.</p>
        </div>
      </Modal>
    </div>
  );
};

export default Layout;
