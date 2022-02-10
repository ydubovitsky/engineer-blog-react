import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';
import styles from './footer.module.css';

const Footer = () => {

  const { getLangData } = useContext(LangContext);
  const { footer } = getLangData();

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div className={styles.nav}>
          <div className={styles.navLink}>
            {footer.home}
          </div>
          <div className={styles.navLink}>
            {footer.about}
          </div>
          <div className={styles.navLink}>
            {footer.contacts}
          </div>
          <div className={styles.navLink}>
            {footer.policy}
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        {`${footer.copyright}` + new Date().getFullYear()} 
      </div>
    </div>
  )
}

export default Footer;