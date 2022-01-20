import cn from 'classnames';
import styles from './shared-links.module.css';

const SharedLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hr}></div>
      <div className={styles.title}>Tags</div>
      <div className={styles.hr}></div>
      <div className={styles.linksContainer}>
        <a href="http://" className={cn(styles.link, styles.tweet)}><i class="fab fa-google"></i>TWEET</a>
        <a href="http://" className={cn(styles.link, styles.tweet)}><i class="fab fa-google"></i>TWEET</a>
        <a href="http://" className={cn(styles.link, styles.tweet)}><i class="fab fa-google"></i>TWEET</a>
        <a href="http://" className={cn(styles.link, styles.tweet)}><i class="fab fa-google"></i>TWEET</a>
      </div>
    </div>
  )
}

export default SharedLinks;