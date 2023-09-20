import React from "react";
import Navbar from "./Navbar";
import "../styles/vision.css"; // CSS 파일을 import

function Vision() {
  return (
    <div>
      <Navbar />
      <header className="header">
        <h1>
            {/* <span style={{ color: 'FBF562' , fontSize:'80px'}}>Always Developing</span>{' '}
            <span style={{ color: '#43C0FF' , fontSize:'80px'}}>Finding All ways</span>  */}
            Always Developing Finding All ways
        </h1>

      </header>
      <body>
        <div className="center">
            <div className="visionMain">
                <p className="vision-text">우리는 도전에 두려워 하지 않습니다.</p>
                
                <p className="vision-text">"가보지 않은 길은 위험하잖아?"</p>
                <p className="vision-text">배는 정박해 있을 때 가장 안전하지만 그것은 배의 존재 이유가 아닙니다.</p> 
                <p className="vision-text">가보지 않은 길은 실패의 위험이 따르지만 우리는 혁신의 길을 가는 사람들입니다.</p>
                <br/>
                <p className="vision-highlight">'언제나 - Always' 도전하고 '모든 - All ways' 방법을 찾아내 더 나은 세상을 만들기 위해 노력합니다.</p>
            </div>
        </div>
        <div className="card-center">
            <div className="card-vision-left">
                
            </div>
            <div className="card-vision-right">
                
            </div>
            
            

        </div>
        
        <div className="card-container">
            <div className="temp-container">
            <div className="card" style={{ width : '10rem' }}>
                <img width="200px" src="/Society.png" alt="Society" className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">항상 더 나은 사회를 위해 개발하겠습니다.</p>
                </div>
            </div>
            
            <div className="card" style={{ width : '10rem' }}>
                <img width="105px" src="/Knowledge.png" alt="Knowledge" className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">항상 새로운 지식을 얻고자 노력하겠습니다.</p>
                </div>
            </div>

            <div className="card" style={{ width : '10rem' }}>
                <img width="105px" src="/Friends.png" alt="Friends" className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">항상 동료에게 믿음과 신뢰를 주겠습니다.</p>
                </div>
            </div>

            <div className="card" style={{ width : '10rem' }}>
                <img width="105px" src="/Leadership.png" alt="Leadership" className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">항상 주도적으로 행동하겠습니다.</p>
                </div>
            </div>
            </div>
        </div>

      </body>
    </div>
  );
}

export default Vision;
