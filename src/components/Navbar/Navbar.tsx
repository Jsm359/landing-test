import { useTypedSelector } from '../hooks/useTypedSelector'
import styles from './Navbar.module.scss'
import classnames from 'classnames/bind';
import { DefaultButton } from '../button/DefaultButton';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { AuthActionCreators } from '../../store/reducers/auth/action-creators';
import { useActions } from '../hooks/useActions';

const cx = classnames.bind(styles)

export const Navbar = () => {
  const { isAuth, user } = useTypedSelector(state => state.auth)
  const {logout} = useActions()

  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <div>
          <Logo className={cx('logo')} />
        </div>
        <div className={cx('btn-nav')}>
          {isAuth
            ?
            <><div  className={cx('nickname')}>{user.username}</div><DefaultButton onClick={logout} label='Выйти' /></>
            :
            ''
          }
        </div>
      </div>
    </div>
  )
}

