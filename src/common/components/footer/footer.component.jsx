import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LangContext } from '../../../context/lang/LangContext';
import styles from './footer.module.css';

const Footer = () => {

  const { getLangData } = useContext(LangContext);
  const { footer } = getLangData();

  const showDate = () => {
    return " 2021 -" +  new Date().getFullYear();
  }

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div className={styles.nav}>
          <div className={styles.navLink}>
            <Link to="/">{footer.home}</Link>
          </div>
          <div className={styles.navLink}>
            <Link to="/main/about">{footer.about}</Link>
          </div>
          <div className={styles.navLink}>
            <Link to="/main/feedback">{footer.contacts}</Link>
          </div>
          <div className={styles.navLink}>
            <Link to="/main/policy">{footer.policy}</Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        {`${footer.copyright}` + showDate()}
      </div>
    </div>
  )
}

export default Footer;
