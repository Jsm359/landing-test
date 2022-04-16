import React, { useEffect, useRef } from 'react'
import classnames from 'classnames/bind'
import styles from './EarlyAccess.module.scss'

const cx = classnames.bind(styles)



export const EarlyAccess = () => {
  return (
    <div className={cx('container')}>
      <h1>Получить ранний доступ</h1>
    </div>
  )
}