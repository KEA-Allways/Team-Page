import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

function Home(){
    return(
    <div>
        <div>
        <Navbar/>
            <header className="header">
                <div className="header-content">
                    <Logo />
                    <h1>
                        <span style={{ color: '#FBF562', fontSize:'70px'  }}>ALWAYS  </span>
                        <span style={{ color: '#43C0FF', fontSize:'70px' }}>ALL WAYS</span> 
                    </h1>
                </div>
            </header>
        </div>     
    </div>
    )
}

export default Home;