import React from 'react';

const modalContentStyles = {
  modalContainer: {
    textAlign: 'center',
    padding: '60px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
  },
  header: {
    color: '#333',
  },
  name: {
    fontSize: '24px',
    color: '#333',
  },
  introduce: {
    fontSize: '18px',
    color: '#555',
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

  switch (modalType) {
    case 'suha':
      name = '황수하';
      self_introduce = 'asdfasdfa';
      email = 'hp980724@gmail.com';
      github_link = 'https://github.com/hp0724';
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
        <p style={modalContentStyles.introduce}>{self_introduce}</p>
        <h3 style={modalContentStyles.email}>Email: {email}</h3>
        <h3>
          GitHub:{' '}
          <a
            href={github_link}
            style={modalContentStyles.githubLink}
            onMouseEnter={(e) => (e.target.style = { ...modalContentStyles.githubLink, ...modalContentStyles.githubLinkHover })}
            onMouseLeave={(e) => (e.target.style = modalContentStyles.githubLink)}
          >
            {github_link}
          </a>
        </h3>
      </div>
    </div>
  );
}

export default ModalContent;
