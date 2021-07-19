import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { configs } from '../../config';

import styles from './index.module.scss';

export const NavBar = () => {
  const match = useRouteMatch('/page1');
  return (
    <nav className={styles.navBar}>
      <div className={styles.brand}>
        <img className={styles.logo} src={configs.logo} />
        <h1>{configs.companyName}</h1>
      </div>
      <div className={styles.routeList}>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
      </div>
      <div className={styles.rightAction}>
        <Link to="/login">Login</Link>
        <Link to="/signUp">Sign Up</Link>
      </div>
    </nav>
  );
};
