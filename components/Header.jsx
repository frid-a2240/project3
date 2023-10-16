import Link from 'next/link';
import React from 'react';
import HouseIcon from '@mui/icons-material/House';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import Filter2Icon from '@mui/icons-material/Filter2';
import Looks3Icon from '@mui/icons-material/Looks3';
import Filter4Icon from '@mui/icons-material/Filter4';
import './header.css';
const Header = () => {
    return (
      <header className='text-center p-4 md:p-8 lg:p-12'>
        <div className='bg-pink-200 p-4'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white animate-slide-up'>
            AUTÓMATAS FINITOS DETERMINISTAS
          </h1>
        </div>

      <div className='bg-white'>
        <nav>
          <ul className='flex justify-center'>
            <li className='text-center inline-block p-4 md:p-8 lg:p-12'>
              <Link href={'/inicio'}>
                <div className='text-center inline-block p-4 md:p-8 lg:p-12 hover:bg-pink-200'>
                  <HouseIcon fontSize='large' />
                </div>
              </Link>
            </li>
            <li className='text-center inline-block p-4 md:p-8 lg:p-12'>
              <Link href={'/ejercicio'}>
                <div className='text-center inline-block p-4 md:p-8 lg:p-12 hover:bg-pink-200'>
                  <LooksOneIcon fontSize='medium' />
                </div>
              </Link>
            </li>
            <li className='text-center inline-block p-4 md:p-8 lg:p-12'>
              <Link href={'/ejercicio02'}>
                <div className='text-center inline-block p-4 md:p-8 lg:p-12 hover:bg-pink-200'>
                  <Filter2Icon fontSize='medium' />
                </div>
              </Link>
            </li>
            <li className='text-center inline-block p-4 md:p-8 lg:p-12'>
              <Link href={'/ejercicio03'}>
                <div className='text-center inline-block p-4 md:p-8 lg:p-12 hover:bg-pink-200'>
                  <Looks3Icon fontSize='medium' />
                </div>
              </Link>
            </li>
            <li className='text-center inline-block p-4 md:p-8 lg:p-12'>
              <Link href={'/ejercicio04'}>
                <div className='text-center inline-block p-4 md:p-8 lg:p-12 hover:bg-pink-200'>
                  <Filter4Icon fontSize='medium' />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
