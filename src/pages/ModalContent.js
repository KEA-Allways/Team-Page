import React from 'react';

function ModalContent({ modalType, closeModal }) {
    let name = "";
    let self_introduce = "";
    let email = "";
    let github_link = "";

    switch(modalType) {
        case 'suha':
            name = "황수하";
            self_introduce = "asdfasdfa";
            email = "asdf";
            github_link = "asdf";
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