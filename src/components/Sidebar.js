import React, { useState } from 'react';
import { sidebarData } from '../data';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [location, setLocation] = useState('');

  const readPathname = (match, location) => {
    if (match) {
      setLocation(location.pathname);
    }
  };

  return (
    <nav className='sidebar'>
      <ul className='sidebar__links'>
        {sidebarData.map((item) => {
          const { id, icon, text, link } = item;
          return (
            <li
              key={id}
              className={location === link ? 'sidebar__item sidebar__item--active' : 'sidebar__item'}
            >
              <NavLink to={link} className='sidebar__link' isActive={readPathname}>
                {icon}
                <span>{text}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className='legal'>&copy; 2021 Trillo. All rights reserved.</div>
    </nav>
  );
};

export default Sidebar;
