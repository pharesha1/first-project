import React from "react";
import headerLogo from '../Images/logo192.png';

export default function Header(){
    return(
      <header>
          <nav className='nav'>
            <div className='nav-logo-div'>
              <img src={headerLogo} alt='website-logo' className='nav-logo'/>
              <h3>ReactFacts</h3>
            </div>
            <ul className='nav-items'>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
    );
  }