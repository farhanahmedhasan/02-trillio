import React from 'react';
import { sidebarData } from '../data';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <ul className='sidebar__links'>
        {sidebarData.map((item) => {
          const { id, icon, text, link } = item;
          return (
            <li key={id} className='sidebar__item '>
              <NavLink to={link} exact={true} className='sidebar__link' activeClassName='sidebar__link--active'>
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
