import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
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
                <li>Профіль</li>
            </ul>
        </div>
        <div className='main'>
            <div className='storie'></div>
            <div className='storie'></div>
            <div className='storie'></div>
            <div className='storie'></div>
            <div className='storie'></div>
        </div>
    </div>
  );
};

export default HomePage;
