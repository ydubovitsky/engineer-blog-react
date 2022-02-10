import { Link } from "react-router-dom";
import styles from './social-nav-panel.module.css';
import { authSelector, logout } from '../../../redux/features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useContext } from "react";
import { LangContext } from '../../../context/LangContext';
import LangSwitcher from '../lang-switcher/lang-switcher.component';

const SocialNavPanel = () => {

  const dispatch = useDispatch();
  const { status, authEntity } = useSelector(authSelector);
  //Context
  const { getLangData } = useContext(LangContext);
  const { socialNavPanel } = getLangData();

  const showAuthButton = (status) => {
    if (status === 'succeeded') {
      return <Link to="/" onClick={() => dispatch(logout())}><i className="fas fa-sign-out-alt">Hello {authEntity.username}</i></Link>
    }
    return <Link to="/main/login"><i className="fas fa-sign-in-alt"></i></Link>
  }

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.menuItem}><p>{socialNavPanel.menu.home}</p></div>
        <div className={styles.menuItem}><p>{socialNavPanel.menu.about}</p></div>
        <div className={styles.menuItem}><p>{socialNavPanel.menu.contacts}</p></div>
        <div className={styles.menuItem}><p>{socialNavPanel.menu.policy}</p></div>
      </div>
      <div className={styles.langSwitcher}>
        <LangSwitcher />
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