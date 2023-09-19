import React, { useState } from 'react';
import Modal from 'react-modal';
import { customModalStyles } from '../styles/ModalStyles';
import ModalContent from './ModalContent';
import "../styles/Layout.css"
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
    <div className="">
      <header className="header">
 
      </header>

       
    </div>
  );
};

export default Layout;
