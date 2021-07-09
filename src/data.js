import { AiFillHome } from 'react-icons/ai';
import { GiCommercialAirplane } from 'react-icons/gi';
import { FaCarSide } from 'react-icons/fa';
import { BsMap } from 'react-icons/bs';

export const sidebarData = [
  { id: 1, text: 'Home', icon: <AiFillHome className='icon' />, link: '/' },
  { id: 2, text: 'Flight', icon: <GiCommercialAirplane className='icon' />, link: '/flight' },
  { id: 3, text: 'Car rental', icon: <FaCarSide className='icon' />, link: '/cars' },
  { id: 4, text: 'Tour', icon: <BsMap className='icon' />, link: '/tours' },
];
