import React from 'react'
import styles from './DefaultButton.module.scss'
import classnames from 'classnames/bind';

const cx = classnames.bind(styles)

export interface DefaultButtonProps {
  label: string;
  onClick?:() => void;
}

export const DefaultButton = ({label, onClick}: DefaultButtonProps) => {
  return (
    <button className={cx('wrapper')} onClick={onClick}>
      <span>{label}</span>
    </button>
  )
}
