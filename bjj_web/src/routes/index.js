// routes/index.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../screens/Login/index';
import Dashboard from '../screens/Dashboard/index';

const routes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
];

export default routes;	

export function renderRoutes(routeList) {
  return (
    <Routes>
      {routeList.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}