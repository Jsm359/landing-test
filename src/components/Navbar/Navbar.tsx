import { useTypedSelector } from '../hooks/useTypedSelector'
import styles from './Navbar.module.scss'
import classnames from 'classnames/bind';
import { DefaultButton } from '../button/DefaultButton';
import { ReactComponent as Logo } from '../../assets/logo.svg'

const cx = classnames.bind(styles)

export const Navbar = () => {
  const { isAuth } = useTypedSelector(state => state.auth)

  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <div>
          <Logo className={cx('logo')} />
        </div>
        <div className={cx('btn-nav')}>
          {isAuth
            ?
            <><div className={cx('nickname')}>Jsm</div><DefaultButton onClick={() => console.log('Выйти')} label='Выйти' /></>
            :
            <DefaultButton onClick={() => console.log('Войти')} label='Войти' />
          }
        </div>
      </div>
    </div>
  )
}
