import React from 'react'
import './Navbar.css';


const Navbar = () => {
  return (
    <div>
      <header>
        <div className="nav-bar">
            <div className="nav-left">
                <div className="logo">
                    <h1>EDYODA</h1>
                    <p>Stories</p>
                </div>
                <div className="menu">
                    <p>Explore Categories <i class="fa-solid fa-chevron-down"></i></p>
                </div>
            </div>

            <div className="nav-right">
                <div className="para">
                    <p>EdYoda is a learning and knowledge <br/> 
                    sharing platform for techies</p>
                </div>
                <div className="btn">
                    <button>Go To Main Website</button>
                </div>
            </div>
            
        </div>

      </header>
    </div>
  )
}

export default Navbar
