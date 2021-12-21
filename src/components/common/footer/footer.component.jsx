import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div className={styles.nav}>
          <div className={styles.navLink}>
            home
          </div>
          <div className={styles.navLink}>
            about
          </div>
          <div className={styles.navLink}>
            contact
          </div>
          <div className={styles.navLink}>
            privacy policy
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        COPYRIGHT © 2021 DESIGNED BY ME
      </div>
    </div>
  )
}

export default Footer;