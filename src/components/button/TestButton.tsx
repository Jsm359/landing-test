import React, { useEffect, useRef } from 'react'
import classnames from 'classnames/bind'
import styles from './TestButton.module.scss'

const cx = classnames.bind(styles)

const getOffset = (n: number, factor: number) => Math.min(n * factor, 100)

export interface TestButtonProps {
  fixed?: boolean
  id?: string
}

export const TestButton = ({ fixed, id }: TestButtonProps) => {
  const btnRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (fixed && wrapperRef.current) {
        const wrapper = wrapperRef.current
        const anchor = document.getElementById('test_main')

        if (anchor && anchor.getBoundingClientRect().y < 0) {
          if (!wrapper.classList.contains(cx('fixed'))) {
            wrapper.classList.add(cx('fixed'))
            wrapper.classList.remove(cx('unfixed'))
          }
        } else {
          wrapper.classList.remove(cx('fixed'))
          wrapper.classList.add(cx('unfixed'))
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [fixed])

  useEffect(() => {
    const sensitivity = 20

    const handleMousemove = (e: MouseEvent) => {
      if (btnRef.current) {
        const x = Math.min((e.clientX / window.innerWidth - 0.5) * 2, 1)
        const y = Math.min((e.clientY / window.innerHeight - 0.5) * 2, 1)

        btnRef.current.style.setProperty(
          '--x',
          `${getOffset(x, sensitivity) + 50}%`
        )
        btnRef.current.style.setProperty(
          '--y',
          `${getOffset(y, sensitivity) + 50}%`
        )
      }
    }

    window.addEventListener('mousemove', handleMousemove)

    return () => {
      window.removeEventListener('mousemove', handleMousemove)
    }
  }, [])

  const classNameWrapper = cx('wrapper', {
    unfixed: fixed,
  })

  return (
    <div id={id} ref={wrapperRef} className={classNameWrapper}>
      <div ref={btnRef} className={cx('btn')}>
        <span>Получить ранний доступ</span>
      </div>
    </div>
  )
}
