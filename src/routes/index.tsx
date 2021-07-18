import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import { ForgotPassword } from '../pages/ForgotPassword';
import { Login } from '../pages/Login';
import { Index } from '../pages/Index';
import { Page1 } from '../pages/page1';
import { Page2 } from '../pages/page2';
import { Page3 } from '../pages/page3';
import { Private } from '../pages/Private';
import { SignUp } from '../pages/SignUp';
import { MainLayout } from '../Layout/MainLayout';
import { EmptyLayout } from '../Layout/EmptyLayout';

const isUserLogin = () => {
  console.log('isUserLogin');
  return false;
};

export const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signUp',
    name: 'Sign Up',
    component: SignUp,
  },
  {
    path: '/forgotPassword',
    name: 'Forgot Password',
    component: ForgotPassword,
  },
  {
    component: MainLayout,
    path: '/',
    routes: [
      {
        name: 'Main',
        path: '/',
        exact: true,
        component: Index,
      },
      {
        name: 'Page 1',
        path: '/page1',
        component: Page1,
      },
      {
        name: 'Page 2',
        path: '/page2',
        component: Page2,
      },
      {
        name: 'Page 3',
        path: '/page3',
        component: Page3,
      },
      {
        name: 'Private',
        path: '/private',
        render: (props) =>
          isUserLogin() ? <Private /> : <Redirect to="/login" />,
      },
    ],
  },
];
