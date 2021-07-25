import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

import '../styles/components/_details.scss';

import friend1 from '../assets/img/user-2.jpg';
import friend2 from '../assets/img/user-4.jpg';
import friend3 from '../assets/img/user-5.jpg';
import friend4 from '../assets/img/user-3.jpg';

const Detail = () => {
  return (
    <div className='detail'>
      <div className='description'>
        <p className='paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta minima obcaecati ducimus
          laborum! Sapiente voluptatem possimus temporibus laborum veniam doloribus maxime suscipit,
          necessitatibus doloremque reprehenderit. Maiores quibusdam delectus atque dicta vel aperiam commodi.
        </p>

        <p className='paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque, voluptatibus eveniet ipsa
          eaque beatae fugiat ex error maiores sunt?
        </p>

        <ul className='list'>
          <li className='list__item'>
            <AiOutlineRight className='list__icon' />
            Close to the Beach
          </li>
          <li className='list__item'>
            <AiOutlineRight className='list__icon' />
            Breakfast Included
          </li>
          <li className='list__item'>
            <AiOutlineRight className='list__icon' />
            Free Airport Shuttle
          </li>
          <li className='list__item'>
            <AiOutlineRight className='list__icon' />
            Free Wifi in all Rooms
          </li>
          <li className='list__item'>
            <AiOutlineRight className='list__icon' />
            Air Conditioning & Hiting
          </li>
          <li className='list__item'>
            <AiOutlineRight className='list__icon' />
            Pets Allowed
          </li>
          <li className='list__item'>
            <AiOutlineRight className='list__icon' />
            We Speak All Languages
          </li>
          <li className='list__item'>
            <AiOutlineRight className='list__icon' />
            Perfect for families
          </li>
        </ul>

        <div className='recommend'>
          <div className='recommend__count'>Nisa and 3 other friend recommend this hotel</div>
          <div className='recommend__friend'>
            <img src={friend1} alt='friend1' className='recommend__photo' />
            <img src={friend2} alt='friend2' className='recommend__photo' />
            <img src={friend3} alt='friend3' className='recommend__photo' />
            <img src={friend4} alt='friend4' className='recommend__photo' />
          </div>
        </div>
      </div>

      <div className='userReview'>User Review</div>
    </div>
  );
};

export default Detail;
