import React from 'react';
import '../styles/App.css'
import logoImage from "../assets/logo.png"; 

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-lg-0 px-lg-3" style={{backgroundColor: '#e3f2fd'}} >
                <a className="navbar-brand" href="/home"><img src={logoImage} width={70}/></a>
                <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>



                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">

                        <a href="/vision" class="nav-item nav-link">Vision</a>

                        <a href="/members" class="nav-item nav-link">Members</a>

                        <a href="/calendar" class="nav-item nav-link">Calendar</a>

                        {/* <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu bg-light m-0">
                                <a href="/home" class="dropdown-item">Home</a>
                                <a href="/vision" class="dropdown-item">Vision</a>
                                <a href="/members" class="dropdown-item">Members</a>
                                <a href="/calendar" class="dropdown-item">Calendar</a>
                            </div>
                        </div> */}
                    </div>
                    <div class="ms-auto d-none d-lg-flex">
                        <a class="btn btn-sm-square btn-primary ms-2" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-sm-square btn-primary ms-2" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-sm-square btn-primary ms-2" href=""><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-sm-square btn-primary ms-2" href=""><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </nav>

  );
}

export default Navbar;
