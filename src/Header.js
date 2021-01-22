import React from 'react';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <Avatar className='head__avatar' alt='Simon' src='{user?.photoURL}' />
        <AccessTimeIcon />
      </div>
      <div className='header__search'>
        <SearchIcon />
        <input type='text' />
      </div>
      <div className='header__right'>
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;