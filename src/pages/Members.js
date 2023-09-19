import React, {useState} from "react";
import Navbar from "./Navbar";
import Modal from 'react-modal';
import { customModalStyles } from '../styles/ModalStyles';
import ModalContent from './ModalContent';
Modal.setAppElement('#root');

function Members(){
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

    return(
        <div>
            <Navbar />
            
            <header className="header">
                
                    <h1>
                        <span style={{ color: 'FBF562' }}>Fancy</span>{' '}
                        <span style={{ color: '#43C0FF' }}>Members</span> 
                    </h1>

                <div style={{display : "flex", padding:"10px"}}>
                <div className="card" style={{ width : '25rem' }}>

                    <img width="150px" src="/suha.png" alt="Suha Image" className="card-img-top" />
                    
                    <div className="card-body">
                        <p className="card-text">안녕하세요 수하입니다. 반갑습니다</p>
                        <button onClick={() => handleImageClick('suha')}>View more</button>
                    </div>
                </div>

                <div className="card" style={{ width : '25rem' }}>

                    <img width="150px" src="/sungjun.png" alt="Sungjun Image" className="card-img-top" />
                    
                    <div className="card-body">
                        <p className="card-text">안녕하세요 성준입니다. 반갑습니다</p>
                        <button onClick={() => handleImageClick('sungjun')}>View more</button>
                    </div>
                </div>

                <div className="card" style={{ width : '25rem' }}>

                    <img width="150px" src="/changmeen.png" alt="Changmeen Image" className="card-img-top" />
                    
                    <div className="card-body">
                        <p className="card-text">안녕하세요 창민입니다. 반갑습니다</p>
                        <button onClick={() => handleImageClick('changmeen')}>View more</button>
                    </div>
                </div>

                <div className="card" style={{ width : '25rem' }}>

                    <img width="150px" src="/dajeong.png" alt="Dajeong Image" className="card-img-top" />
                    
                    <div className="card-body">
                        <p className="card-text">안녕하세요 다정입니다. 반갑습니다</p>
                        <button onClick={() => handleImageClick('dajeong')}>View more</button>
                    </div>
                </div>

                <div className="card" style={{ width : '25rem' }}>

                    <img width="150px" src="/minjun.jpeg" alt="Minjun Image" className="card-img-top" />
                    
                    <div className="card-body">
                        <p className="card-text">안녕하세요 민준입니다. 반갑습니다</p>
                        <button onClick={() => handleImageClick('minjun')}>View more</button>
                    </div>
                </div>
                </div>
            </header>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                style={customModalStyles}
                overlayClassName={{
                base: "overlay-base",
                afterOpen: "overlay-after",
                beforeClose: "overlay-before"
                }}
                className={{
                base: "content-base",
                afterOpen: "content-after",
                beforeClose: "content-before"
                }}
            >
                <ModalContent modalType={modalType} closeModal={closeModal}/>
            </Modal>
            
        </div>
    )
}

export default Members;