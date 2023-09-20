import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Layout from "./Layout";

function Home(){
    return(
    <div>
        <div>
        <Navbar/>
            <header className="header" style={{ padding: "0px" }}>
                <div className="header-content">
                    <Logo />
                    <h1>
                        <span style={{ color: 'FBF562', fontSize:'70px'  }}>ALWAYS</span>
                        &nbsp;&nbsp;<span style={{ color: '#43C0FF', fontSize:'70px' }}>ALL WAYS</span> 
                    </h1>
                </div>
            </header>
            <Layout/>
        </div>     
    </div>
    )
}

export default Home;