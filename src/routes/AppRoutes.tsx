import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../config/layout/DefaultLayout';
import AddTransaction from '../pages/AddTransaction';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout component={Home} />} />
        <Route path="/add-transaction" element={<DefaultLayout component={AddTransaction} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
