import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Layout from "./Layout";

function Home(){
    return(
    <div>
        <div>
        <Navbar/>
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
        </div>     
    </div>
    )
}

export default Home;