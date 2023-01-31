import React from "react";
import "./Header.css";
import Logo from './robinhood.svg'

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo} width={25} alt="robinhood logo"/>
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__menuItems">
        <a href="/">Rewards</a>
        <a href="/">Investing</a>
        <a href="/">Spending</a>
        <a href="/">Retirement</a>
        <a href="/">Account</a>
      </div>
    </div>
  );
}

export default Header;
