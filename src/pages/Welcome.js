import React from 'react';
import logoImage from "../assets/logo.png"; // 로고 이미지 경로
import { motion } from "framer-motion"
// ㅇ
function Welcome() {
  return (
    <motion.div
      initial={{ 
        opacity: 1
      }}
      animate={{
        opacity: 0,
        y : 100
      }}
      transition={{
        duration: 2
      }}
    >
    
      <center>
      <img src={logoImage} alt="로고" className="logo-image" width="500px" />
      </center>
    </motion.div>
  ); 
}

export default Welcome;
