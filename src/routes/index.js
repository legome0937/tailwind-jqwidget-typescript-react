import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import retry from '../utils/';

const HomePage = lazy(() => retry(() => import('../pages/home')));
// const MintPage = lazy(() => retry(() => import('../pages/mint')));

const AppRoute = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/mint' element={<MintPage />} /> */}
      </Routes>
  );
};

export default AppRoute;
