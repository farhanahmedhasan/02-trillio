import { AiFillHome } from 'react-icons/ai';
import { GiCommercialAirplane } from 'react-icons/gi';
import { FaCarSide } from 'react-icons/fa';
import { BsMap } from 'react-icons/bs';

import userSrc1 from './assets/img/user-1.jpg';
import userSrc2 from './assets/img/user-2.jpg';
import userSrc3 from './assets/img/user-3.jpg';
import userSrc5 from './assets/img/user-5.jpg';

export const sidebarData = [
  { id: 1, text: 'Hotel', icon: <AiFillHome className='icon' />, link: '/' },
  { id: 2, text: 'Flight', icon: <GiCommercialAirplane className='icon' />, link: '/flight' },
  { id: 3, text: 'Car rental', icon: <FaCarSide className='icon' />, link: '/cars' },
  { id: 4, text: 'Tour', icon: <BsMap className='icon' />, link: '/tours' },
];

export const review = [
  {
    id: 1,
    name: 'Nick Smith',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nihil! sit amet consectetur adipisicing elit',
    src: userSrc1,
    date: 'Feb 23rd 2017',
    rating: 7.8,
  },
  {
    id: 2,
    name: 'Emily Watson',
    text: 'Lorem ipsum dolor sit amet consectetur sit amet consectetur adipisicing adipisicing elit. Dolor, nihil! sit amet consectetur adipisicing elit',
    src: userSrc2,
    date: 'July 25th 2021',
    rating: 8,
  },
  {
    id: 3,
    name: 'Jerry',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nihil! sit amet consectetur adipisicing elit',
    src: userSrc3,
    date: 'Feb 3rd 2020',
    rating: 8.8,
  },
  {
    id: 4,
    name: 'Morty',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nihil! sit amet consectetur adipisicing elit',
    src: userSrc5,
    date: 'Aug 12th 2018',
    rating: 6.8,
  },
];
