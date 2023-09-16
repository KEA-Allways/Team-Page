import ReactModal from 'react-modal';
const customModalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100%",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      width: "80%",
      maxWidth: "600px",
      zIndex: "150",
      position: "relative",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "auto",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      backgroundColor: "#f9f9f9", // Light gray background color
      padding: "20px",
      color: "#333", // Dark text color
    },
  };
  
  export { customModalStyles };
  ReactModal.setAppElement('#root');