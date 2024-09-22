import React from 'react';
import './HomePage.css';
import { useAccess } from '../../hooks/useAccess';
import { Link } from 'react-router-dom';
import { PAGES } from '../../router/router';

const HomePage = () => {
  useAccess();
  
  return (
    <div className='container'>
      <div className='left-bar'>
        <ul>
          <li><h2>Instagram</h2></li>
          <li>Головна</li>
          <li>Пошук</li>
          <li>Цікаве</li>
          <li>Reels</li>
          <li>Повідомлення</li>
          <li>Сповіщення</li>
          <li>Створити</li>
          <Link to={PAGES.PROFILE} className='link'>
            <li>Профіль</li>
          </Link>
        </ul>
      </div>
      <div className='main'>
        <div className='stories'>
          <div className='storie'></div>
          <div className='storie'></div>
          <div className='storie'></div>
          <div className='storie'></div>
          <div className='storie'></div>
          <div className='storie'></div>
          <div className='storie'></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
