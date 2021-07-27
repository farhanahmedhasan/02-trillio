import React from 'react';

import '../styles/components/_cta.scss';

const Cta = () => {
  return (
    <div className='cta'>
      <h2 className='cta__title'>Good News! We have four free rooms for your selected dates!</h2>
      <button className='btn btn--cta btn--pulsateDirect'>
        <span className='btn--cta__visible'>Book Now</span>
        <span className='btn--cta__invisible'>Only 4 rooms left</span>
      </button>
    </div>
  );
};

export default Cta;
