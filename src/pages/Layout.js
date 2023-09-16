import React, { useState } from 'react';
import Modal from 'react-modal';
import { customModalStyles } from '../styles/ModalStyles';
import ModalContent from './ModalContent';


 
Modal.setAppElement('#root');

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleImageClick = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalType(null);
    setIsModalOpen(false);
  };


  return (
    <div className="layout">
      <header className="header">
      <img
            width="200px"
            src="/suha.png"
            alt="Suha Image"
            className="center-image"
            onClick={() => handleImageClick('suha')} // 이미지 클릭 시 모달 열기
          />
          <img
            width="200px"
            src="/sungjun.png"
            alt="sungjun Image"
            className="center-image"
            onClick={() => handleImageClick('sungjun')} // 이미지 클릭 시 모달 열기
          />
          <img
            width="200px"
            src="/changmeen.png"
            alt="changmeen Image"
            className="center-image"
            onClick={() => handleImageClick('changmeen')} // 이미지 클릭 시 모달 열기
          />
          <img
            width="200px"
            src="/dajeong.png"
            alt="dajeong Image"
            className="center-image"
            onClick={() => handleImageClick('dajeong')} // 이미지 클릭 시 모달 열기
          />
          <img
            width="200px"
            src="/minjun.jpeg"
            alt="minjun Image"
            className="center-image"
            onClick={() => handleImageClick('minjun')} // 이미지 클릭 시 모달 열기
          />
      </header>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={customModalStyles}
      >
        <ModalContent modalType={modalType} closeModal={closeModal}/>
      </Modal>
    </div>
  );
};

export default Layout;
