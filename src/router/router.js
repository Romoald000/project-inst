import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import HomePage from '../pages/Home/HomePage';
import ProfilePage from '../pages/Profile/ProfilePage';
import ErrorPage from '../pages/Error/ErrorPage';
import LoginPage from '../pages/Login/LoginPage';
import AllPage from '../pages/AllPage/AllPage';

export const PAGES = {
  LOGIN: '/login',
  HOME: '/home',
  PROFILE: '/profile',
  ERROR: '/error',
  ALL: '/'
}

const RouterPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGES.LOGIN} element={<LoginPage />} />
        <Route path={PAGES.HOME} element={<HomePage />} />
        <Route path={PAGES.PROFILE} element={<ProfilePage/>} />
        <Route path={PAGES.ERROR} element={<ErrorPage/>} /> 
        <Route path={PAGES.ALL} element={<AllPage/>} /> 
      </Routes>
    </BrowserRouter>
  )
};

export default RouterPages;
