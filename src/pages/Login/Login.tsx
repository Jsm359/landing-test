import React from 'react'
import styles from './Login.module.scss'
import classnames from 'classnames/bind';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Card } from 'antd';

const cx = classnames.bind(styles)

export const Login = () => {
  return (
    <div className={cx('containter')}>
      <div className={cx('wrapper')}>
        <Card>
          <LoginForm />
        </Card>
      </div>
    </div>
  )
}
