import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Navbar from "./Navbar";
import "../styles/vision.css";

function Vision() {
  return (
    <motion.div >
      <Navbar />
      <motion.header className="header" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1>
          Always Developing Finding All ways
        </h1>
      </motion.header>
      <motion.div className="center" >
       
        <motion.div className="vision-main" initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.0,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
          <p className="vision-text">우리는 도전에 두려워 하지 않습니다.</p>
          <p className="vision-text">"가보지 않은 길은 위험하잖아?"</p>
          <p className="vision-text">배는 정박해 있을 때 가장 안전하지만 그것은 배의 존재 이유가 아닙니다.</p>
          <p className="vision-text">가보지 않은 길은 실패의 위험이 따르지만 우리는 혁신의 길을 가는 사람들입니다.</p>
          <p className="vision-text">'언제나-Always' 도전하고 '모든-All ways' 방법을 찾아내 더 나은 세상을 만들기 위해 노력합니다.</p>
        </motion.div>
      </motion.div>
      <motion.div className="card-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="temp-container">
          <motion.div className="card" style={{ width: "10rem", height:"20rem" }} whileHover={{ scale: 1.05 }}>
            <img width="200px" src="/Society.png" alt="Society" className="card-img-top" />
            <div className="card-body">
              <p className="card-text">항상<br/> 더 나은 사회를 위해 개발하겠습니다.</p>
            </div>
          </motion.div>
          <motion.div className="card" style={{ width: "10rem" , height:"20rem" }} whileHover={{ scale: 1.05 }}>
            <img width="200px" src="/Knowledge.png" alt="Knowledge" className="card-img-top" />
            <div className="card-body">
              <p className="card-text">항상<br/> 새로운 지식을 얻고자 노력하겠습니다.</p>
            </div>
          </motion.div>
          <motion.div className="card" style={{ width: "10rem", height:"20rem" }} whileHover={{ scale: 1.05 }}>
            <img width="200px" src="/Friends.png" alt="Friends" className="card-img-top" />
            <div className="card-body">
              <p className="card-text">항상<br/> 동료에게 믿음과 신뢰를 주겠습니다.</p>
            </div>
          </motion.div>
           
          <motion.div className="card" style={{ width: "10rem", height:"20rem" }} whileHover={{ scale: 1.05 }}>
            <img width="200px" src="/Leadership.png" alt="Leadership" className="card-img-top" />
            <div className="card-body">
              <p className="card-text">항상<br/> 주도적으로 행동하겠습니다.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
       
    </motion.div>
  );
}

export default Vision;
