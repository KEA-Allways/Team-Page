import React, { useState } from 'react';
import Modal from 'react-modal';
import { customModalStyles } from '../ModalStyles';
import ModalContent from './ModalContent';


const modalHTMLContent = (
  <div>
    <header>
      <h1>나의 자기소개</h1>
    </header>
    <div className="container">
      <h2>안녕하세요, 제 이름은 [이름]입니다.</h2>
      <p>
        제 소개 내용을 여기에 작성하세요. 본인에 대한 간단한 정보, 관심사, 업적, 경험
        등을 소개합니다.
      </p>
      <h3>연락처</h3>
      <p>Email: [이메일 주소]</p>
      <p>
        GitHub: <a href="[GitHub 프로필 링크]">GitHub 프로필</a>
      </p>
    </div>
  </div>
);

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
            width="100px"
            src="/suha.png"
            alt="Suha Image"
            className="center-image"
            onClick={() => handleImageClick('suha')} // 이미지 클릭 시 모달 열기
          />
          <img
            width="100px"
            src="/sungjun.png"
            alt="sungjun Image"
            className="center-image"
            onClick={() => handleImageClick('sungjun')} // 이미지 클릭 시 모달 열기
          />
          <img
            width="100px"
            src="/changmeen.png"
            alt="changmeen Image"
            className="center-image"
            onClick={() => handleImageClick('changmeen')} // 이미지 클릭 시 모달 열기
          />
          <img
            width="100px"
            src="/dajeong.png"
            alt="dajeong Image"
            className="center-image"
            onClick={() => handleImageClick('dajeong')} // 이미지 클릭 시 모달 열기
          />
          <img
            width="100px"
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
