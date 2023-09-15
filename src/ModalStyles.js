import ReactModal from 'react-modal';

const customModalStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "360px",
    height: "180px",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
  },
};

ReactModal.setAppElement('#root'); // 모달이 열릴 때 화면 리더기 등의 접근성을 위해 설정합니다.

export { customModalStyles }; // 다른 파일에서 이 스타일을 가져올 수 있도록 내보냅니다.
