import React from 'react';
import styles from './App.module.scss';
import classnames from 'classnames/bind';
import { MainDisplay } from './pages/Main-display/MainDisplay';

const cx = classnames.bind(styles)

export const App = () => {
  return (
    <div className={cx('app')}>
      <MainDisplay/>
    </div>
  )
}

