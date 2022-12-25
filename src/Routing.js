import React from 'react';
import { Route } from 'react-router-dom';
import RegisterPage from './components/pages/RegisterPage';
import LoginPage from './components/pages/LoginPage';
import RestPage from './components/pages/RestPage';
import RestorePage from './components/pages/RestorePage';
import Main from './components/Main';

const PAGES_ROUTES = [
  {
    link: '/login',
    element: <LoginPage />,
    id: 2,
  },
  {
    link: '/register',
    element: <RegisterPage />,
    id: 3,
  },
  {
    link: '/rest',
    element: <RestPage />,
    id: 4,
  },
  {
    link: '/restore',
    element: <RestorePage />,
    id: 5,
  },
];

const Routing = PAGES_ROUTES.map((item) => (
  <Route path={item.link} element={item.element} key={item.id} />
));

export default Routing;
