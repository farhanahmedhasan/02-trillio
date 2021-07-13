import React from 'react';
import Hotel1 from '../assets/img/hotel-1.jpg';
import Hotel2 from '../assets/img/hotel-2.jpg';
import Hotel3 from '../assets/img/hotel-3.jpg';

import { AiFillStar } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';

import '../styles/components/_hotel.scss';

const Hotel = () => {
  return (
    <main className='hotelView'>
      <div className='gallery'>
        <figcaption className='gallery__item'>
          <img src={Hotel1} alt='hotel' className='gallery__photo' />
        </figcaption>
        <figcaption className='gallery__item'>
          <img src={Hotel2} alt='hotel' className='gallery__photo' />
        </figcaption>
        <figcaption className='gallery__item'>
          <img src={Hotel3} alt='hotel' className='gallery__photo' />
        </figcaption>
      </div>

      <div className='overview'>
        <div className='overview__heading'>
          <h1>Hotel Las Pamas</h1>
        </div>

        <div className='overview__stars'>
          <AiFillStar className='overview__icon overview__icon--star' />
          <AiFillStar className='overview__icon overview__icon--star' />
          <AiFillStar className='overview__icon overview__icon--star' />
          <AiFillStar className='overview__icon overview__icon--star' />
          <AiFillStar className='overview__icon overview__icon--star' />
        </div>

        <div className='overview__loaction'>
          <FiMapPin className='overview__icon overview__icon--location' />
          <button className='btn btn--inline btn--animatedPulsate'>Albuferia Portugal</button>
        </div>

        <div className='overview__rating'>
          <div className='overview__ratingPoint'>8.7</div>
          <div className='overview__ratingCount'>412 votes</div>
        </div>
      </div>
    </main>
  );
};

export default Hotel;
