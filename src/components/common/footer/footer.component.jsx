import RecentUpdate from '../recent-update/recent-update.component';
import SocialLinks from '../../main/social-links/social-links.component';
import styles from './footer.module.css';

const Footer = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.column}>
          <div className={styles.header}>
            Lorem, ipsum dolor.
          </div>
          <RecentUpdate />
          <RecentUpdate />
          <RecentUpdate />
          <RecentUpdate />
          <RecentUpdate />
        </div>
        <div className={styles.column}>
          <div className={styles.header}>
            Lorem ipsum dolor sit.
          </div>
          <RecentUpdate />
          <RecentUpdate />
          <RecentUpdate />
          <RecentUpdate />
          <RecentUpdate />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.header}>
          Lorem ipsum dolor sit.
        </div>
      </div>
    </div>
  );
};

export default Footer;