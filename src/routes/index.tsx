import React from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Main } from '../pages/Main';
import { Page1 } from '../pages/page1';
import { Page2 } from '../pages/page2';
import { Page3 } from '../pages/page3';
import { Private } from '../pages/Private';

const isUserLogin = () => {
  console.log("isUserLogin")
  return false
}


export const routes: RouteConfig[] = [
  {
    name: 'Main',
    path: '/',
    exact: true,
    component: Main
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
    render: (props) => isUserLogin() ? <Private /> : <Redirect to="/login" />
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];
