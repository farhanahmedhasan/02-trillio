import React, { useState } from 'react';
import '../styles/components/_review.scss';

import { review } from '../data';

import { BsArrowRight } from 'react-icons/bs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, text, src, name, date, rating } = review[index];

  const nextReview = () => {
    if (index >= review.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevReview = () => {
    if (index === 0) {
      setIndex(review.length - 1);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className='userReview'>
      <figure className='review'>
        <blockquote key={id} className='review__text'>
          {text}
        </blockquote>

        <figcaption className='review__user'>
          <img src={src} alt={src} className='review__photo' />
          <div className='review__userBox'>
            <p className='review__userName'>{name}</p>
            <p className='review__userDate'>{date}</p>
          </div>
          <div className='review__rating'>{rating}</div>
        </figcaption>

        <div className='review__btnBox'>
          <button className='review__btnBox--nextReview' onClick={nextReview}>
            <FaChevronRight />
          </button>
          <button className='review__btnBox--PrevReview' onClick={prevReview}>
            <FaChevronLeft />
          </button>
        </div>
      </figure>

      <a href='/dg' className='btn btn--inline btn--hoverSpace'>
        Show All
        <span>
          <BsArrowRight className='arrow' />
        </span>
      </a>
    </div>
  );
};

export default Review;
