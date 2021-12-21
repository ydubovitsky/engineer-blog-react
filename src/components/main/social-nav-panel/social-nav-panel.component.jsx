import styles from './social-nav-panel.module.css';

const SocialNavPanel = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className="">Home</div>
        <div className="">About</div>
        <div className="">Contacts</div>
        <div className="">Privacy policy</div>
      </div>
      <div className={styles.socialContainer}>
        <div className={styles.social}>
          <div className={styles.link}>
            <i class="fab fa-facebook"></i>
          </div>
          <div className={styles.link}>
            <i class="fab fa-twitter"></i>
          </div>
          <div className={styles.link}>
            <i class="fab fa-google"></i>
          </div>
          <div className={styles.link}>
            <i class="fab fa-google"></i>
          </div>
          <div className={styles.link}>
            <i class="fab fa-github"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialNavPanel;