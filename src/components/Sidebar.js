import React from 'react';
import { sidebarData } from '../data';
import { Link, useParams } from 'react-router-dom';

const Sidebar = () => {
  console.log(useParams());

  return (
    <nav className='sidebar'>
      <ul className='sidebar__links'>
        {sidebarData.map((item) => {
          const { id, icon, text, link } = item;
          return (
            <li key={id} className='sidebar__item sidebar__item--active'>
              <Link to={link} className='sidebar__link'>
                {icon}
                <span>{text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className='legal'>&copy; 2021 Trillo. All rights reserved.</div>
    </nav>
  );
};

export default Sidebar;
