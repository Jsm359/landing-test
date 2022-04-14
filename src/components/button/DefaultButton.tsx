import React from 'react'
import styles from './DefaultButton.module.scss'
import classnames from 'classnames/bind';

const cx = classnames.bind(styles)

export const DefaultButton = () => {
  return (
    <button className={cx('wrapper')}>
      <span>Найти тиммейтов</span>
    </button>
  )
}
