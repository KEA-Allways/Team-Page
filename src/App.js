import React, {useState, useEffect} from 'react';
import Layout from './pages/Layout';
import Welcome from './pages/Welcome';
import "./styles/App.css"; // 스타일링 파일 임포트
import Logo from './pages/Logo';

function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 2000); // 2초 후 로고를 숨김
  }, []);


  return (
    (
      <div>
        {showLogo 
        ? <Welcome /> 
        : <div>
        <header className="header">
          <div className="header-content">
            <Logo />
            
            <h1>
              <span style={{ color: 'FBF562' }}>ALWAYS</span>{' '}
              <span style={{ color: '#43C0FF' }}>ALL WAYS</span> 
            </h1>
          </div>
        </header>
        
        <Layout/>
      </div>}
      </div>
    )
  );
}

export default App;
