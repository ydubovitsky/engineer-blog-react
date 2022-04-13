import cn from 'classnames';
import styles from './shared-links.module.css';

const SharedLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        <a href="http://" className={cn(styles.link, styles.tweet)}><i class="fab fa-google"></i> TWEET</a>
        <a href="http://" className={cn(styles.link, styles.vk)}><i class="fab fa-vk"></i> VK</a>
        <a href="http://" className={cn(styles.link, styles.facebook)}><i class="fab fa-facebook"></i> FaceBook</a>
        <a href="http://" className={cn(styles.link, styles.telegram)}><i class="fab fa-telegram"></i> Telegram</a>
      </div>
    </div>
  )
}

export default SharedLinks;