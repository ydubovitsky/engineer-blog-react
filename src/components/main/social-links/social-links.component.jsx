import styles from './social-links.module.css';

const SocialLinks = (props) => {
  return (
    <div className={styles.container}>
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
  );
};

export default SocialLinks;