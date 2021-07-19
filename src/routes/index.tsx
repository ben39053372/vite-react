import React from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import { MainLayout } from '../Layout/MainLayout';

const isUserLogin = () => {
  console.log('isUserLogin');
  return false;
};

export const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'Login',
    component: React.lazy(() => import('../pages/Login')),
  },
  {
    path: '/signUp',
    name: 'Sign Up',
    component: React.lazy(() => import('../pages/SignUp')),
  },
  {
    path: '/forgotPassword',
    name: 'Forgot Password',
    component: React.lazy(() => import('../pages/ForgotPassword')),
  },
  {
    component: MainLayout,
    path: '/',
    routes: [
      {
        name: 'Main',
        path: '/',
        exact: true,
        component: React.lazy(() => import('../pages/Index')),
      },
      {
        name: 'Page 1',
        path: '/page1',
        component: React.lazy(() => import('../pages/page1')),
      },
      {
        name: 'Page 2',
        path: '/page2',
        component: React.lazy(() => import('../pages/page2')),
      },
      {
        name: 'Page 3',
        path: '/page3',
        component: React.lazy(() => import('../pages/page3')),
      },
      {
        name: 'Private',
        path: '/private',
        render: (props) =>
          isUserLogin() ? (
            React.lazy(() => import('../pages/Private'))
          ) : (
            <Redirect to="/login" />
          ),
      },
    ],
  },
];
