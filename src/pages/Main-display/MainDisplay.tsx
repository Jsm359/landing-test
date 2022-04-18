import React, {useEffect, useState} from 'react'
import styles from './MainDisplay.module.scss'
import classnames from 'classnames/bind';
import { TestButton } from '../../components/button/TestButton';

const cx = classnames.bind(styles)

export const MainDisplay = () => {
  const [online, setOnline] = useState<number>()
  
  useEffect(() => {
    const calculateOnline = () => {
      const time = new Date().getHours()
      let min: number, max: number

      if (time > 3 && time < 10) {
        min = 20
        max = 40
      } else if (time >= 10 && time < 14) {
        min = 80
        max = 160
      } else if (time >= 14 && time < 19) {
        min = 160
        max = 240
      } else if (time > 19 && time < 23) {
        min = 240
        max = 470
      } else if (time >= 23 && time < 3) {
        min = 220
        max = 320
      } else {
        min = 10
        max = 20
      }

      setOnline(Math.ceil(min + Math.random() * (max - min)))
    }

    calculateOnline()

    const interval = setInterval(() => {
      calculateOnline()
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [setOnline])


  return (
    <div>
      <div className={cx('wrapper')}>
        <div className={cx('img_preview')} />
        <div className={cx('container')}>
          <div className={cx('content')}>
            <div className={cx('title-wrapper')}>
              <div className={cx('title')}>Быстрый поиск</div>
              <div className={cx('title')}>адекватных</div>
              <div className={cx('title')}>тиммейтов в<span>CS:GO</span></div>
            </div>

            <div className={cx('online')}>
              <div className={cx('online-counter')}>
                <span>{online}</span>
              </div>
              <div className={cx('online-title')}>Игроков онлайн</div>
            </div>
            <TestButton />
          </div>
        </div>
      </div>
      <TestButton fixed/>
    </div>
  )
}


