import React from 'react';

import Logo from '../../assets/icons/logo.svg?react';
import Task1 from '../task1/Task1';
import HeaderLinks from './HeaderLinks';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Task1 />
      <div className={styles.nav}>
        <HeaderLinks />
      </div>
    </header>
  );
};

export default Header;
