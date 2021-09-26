import React from "react";
import LogoNetflix from "./img/netflixLogo.png";

import "./style/header.css";

const Header = ({ blackHeader }) => {
  return (
    <header className={blackHeader ? 'blackHeader' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src={ LogoNetflix } alt="Logo da Netflix"/>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="User"/>
        </a>
      </div>
    </header>
  )
}

export default Header;