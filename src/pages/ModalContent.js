import React from 'react';

function ModalContent({ modalType, closeModal }) {
    let name = "";
    let self_introduce = "";
    let email = "";
    let github_link = "";

    switch(modalType) {
        // modalType
        // 수하 : suha, 성준 : sungjun, 창민 : changmeen, 다정 : dajeong, 민준 : minjun

        case 'suha':
            name = "황수하";
            self_introduce = "";
            email = "";
            github_link = "";
            break;

        case 'sungjun':
            name = "김성준";
            self_introduce = "";
            email = "";
            github_link = "";
            break;
            
        case 'changmeen':
            name = "류창민";
            self_introduce = "소프트웨어학과 17학번 류창민 입니다. 잘 부탁드리겠습니다.";
            email = "fbckdals99@gmail.com";
            github_link = "https://github.com/changmeen";
            break;

        case 'dajeong':
            name = "최다정";
            self_introduce = "";
            email = "";
            github_link = "";
            break;

        case 'minjun':
            name = "김민준";
            self_introduce = "";
            email = "";
            github_link = "";
            break;
        // Add more cases for other modal types if needed

        default:
            break;
    }

    return (
        <div>
            <header>
                <h1>나의 자기소개</h1>
            </header>
            <div className="container">
                <h2>안녕하세요, 제 이름은 {name} 입니다.</h2>
                <p>{self_introduce}</p>
                <h3>연락처</h3>
                <p>Email: {email}</p>
                <p>GitHub: <a href={github_link}>GitHub 프로필</a></p>
            </div>
        </div>
    );
}

export default ModalContent;