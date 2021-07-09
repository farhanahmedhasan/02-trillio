import React from 'react';
import logo from '../assets/img/logo.png';
import user from '../assets/img/user.jpg';

import { BsSearch, BsFillBookmarksFill } from 'react-icons/bs';
import { IoChatboxSharp } from 'react-icons/io5';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='trillio logo' className='logo' height='50px' />

      <form action='#' className='search'>
        <input type='search' className='search__input' placeholder='Search hotels' />

        <button type='submit' className='search__button'>
          <BsSearch className='search__icon' />
        </button>
      </form>

      <nav className='userNav'>
        <div className='userNav__iconBox'>
          <BsFillBookmarksFill className='userNav__icon' />
          <span className='userNav__notification'>2</span>
        </div>

        <div className='userNav__iconBox'>
          <IoChatboxSharp className='userNav__icon' />
          <span className='userNav__notification'>13</span>
        </div>

        <div className='userNav__user'>
          <img src={user} alt='user' className='userNav__userPhoto' />
          <span className='userNav__userName'>Hasan</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
