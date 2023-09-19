import React from 'react';
import GitIcon from "../assets/github.png"; // GitHub 이미지 경로
import MailIcon from "../assets/email.png"; // Email 이미지 경로

const modalContentStyles = {
  modalContainer: {
    textAlign: 'center',
    padding: '60px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    fontFamily: 'Gowun Dodum'
  },
  header: {
    color: '#333',
    fontFamily: 'Gowun Dodum'
  },
  name: {
    fontSize: '24px',
    color: '#333',
    fontFamily: 'Gowun Dodum'
  },
  introduce: {
    fontSize: '18px',
    color: '#555',
    fontFamily: 'Gowun Dodum'
  },
  email: {
    fontSize: '20px',
    color: '#333',
  },
  githubLink: {
    fontSize: '20px',
    color: '#007BFF',
    textDecoration: 'none',
  },
  githubLinkHover: {
    textDecoration: 'underline',
  },
};

function ModalContent({ modalType, closeModal }) {
  let name = '';
  let self_introduce = '';
  let email = '';
  let github_link = '';

    switch(modalType) {
        // modalType
        // 수하 : suha, 성준 : sungjun, 창민 : changmeen, 다정 : dajeong, 민준 : minjun

        case 'suha':
            name = "황수하";
            self_introduce = "항상 배우고 싶은 개발자 황수하입니다.";
            email = "hp980724@gmail.com";
            github_link = "https://github.com/hp0724";
            break;

        case 'sungjun':
            name = "김성준";
            self_introduce = "코드로 세상을 더 살만한 곳으로 만들고 싶은 프론트엔드 개발자 지망생 김성준입니다.";
            email = "kis07150@gmail.com";
            github_link = "https://github.com/sungjun-singer";
            break;
            
        case 'changmeen':
            name = "류창민";
            self_introduce = "소프트웨어학과 17학번 류창민 입니다. 잘 부탁드리겠습니다.";
            email = "fbckdals99@gmail.com";
            github_link = "https://github.com/changmeen";
            break;

        case 'dajeong':
            name = "최다정";
            self_introduce = "사용자에게 맞는 맞춤형 기능을 제공하는 개발자가 되겠습니다.";
            email = "hers010801@gmail.com";
            github_link = "https://github.com/allrightDJ0108";
            break;

        case 'minjun':
            name = "김민준";
            self_introduce = "매일 재미있게 개발하고 싶습니다~";
            email = "jmk7117@naver.com";
            github_link = "https://github.com/minjun0707";
            break;
        // Add more cases for other modal types if needed

    default:
      break;
  }

  return (
    <div style={modalContentStyles.modalContainer}>
      <header>
        <h1 style={modalContentStyles.header}>나의 자기소개</h1>
      </header>
      <div className="container">
        <h2 style={modalContentStyles.name}>안녕하세요, 제 이름은 {name} 입니다.</h2>
        <p style={modalContentStyles.introduce}>
            {self_introduce}
        </p>
        <br/>
        <h3 style={modalContentStyles.email}>
          <img src={MailIcon} alt="메일아이콘" className="logo-image" width="30px" />
          &nbsp; {email}
        </h3>
        <h3>
          <a
            href={github_link}
            style={modalContentStyles.githubLink}
            // onMouseEnter={(e) => (e.target.style = { ...modalContentStyles.githubLink, ...modalContentStyles.githubLinkHover })}
            // onMouseLeave={(e) => (e.target.style = modalContentStyles.githubLink)}
          >
            <img src={GitIcon} alt="깃아이콘" className="logo-image" width="30px" />
            &nbsp; {github_link}
          </a>
        </h3>
      </div>
    </div>
  );
}

export default ModalContent;
