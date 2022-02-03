import { Link } from "react-router-dom";
import styles from './social-nav-panel.module.css';
import { authSelector, logout } from '../../../redux/features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';

const SocialNavPanel = (props) => {

  const dispatch = useDispatch();
  const { status, authEntity } = useSelector(authSelector);

  const showAuthButton = (status) => {
    if (status === 'succeeded') {
      return <Link to="/" onClick={() => dispatch(logout())}><i className="fas fa-sign-out-alt">Hello {authEntity.username}</i></Link>
    }
    return <Link to="/main/login"><i className="fas fa-sign-in-alt"></i></Link>
  }

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className="">Home</div>
        <div className="">About</div>
        <div className="">Contacts</div>
        <div className="">Privacy policy</div>
      </div>
      <div className={styles.socialContainer}>
        <div className={styles.link}>
          <i className="fab fa-facebook"></i>
        </div>
        <div className={styles.link}>
          <i className="fab fa-twitter"></i>
        </div>
        <div className={styles.link}>
          <i className="fab fa-google"></i>
        </div>
        <div className={styles.link}>
          <i className="fab fa-google"></i>
        </div>
        <div className={styles.link}>
          <i className="fab fa-github"></i>
        </div>
      </div>
      {showAuthButton(status)}
    </div>
  )
}

export default SocialNavPanel;