import React from 'react';
import { Link } from 'react-router-dom';
import Style from './header.module.css';

function Header (){
    return (
      <div className={Style.header}>
        <Link to="/">HOME</Link>
      </div>
    );
};

export default Header;