import SocialIconsListComponent from '../../../../common/components/social-icons-list/social-icons-list.component';
import styles from './follow-me.module.css';

const FollowMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Follow Me</div>
      <div className={styles.info}>
        <p>Hi there! This is my personal blog, where i write about programming and other closest technology.</p>
        <p>I love programming, especially - JavaScript, React ❤️ Redux, React Native, Java and related technologies.</p>
        <p>Buy the way, this blog has written via React/Redux on frontend and Java/Spring on backend.</p>
      </div>
      <div className={styles.socialIcons}>
        <SocialIconsListComponent iconSize="2rem" />
      </div>
      <div className={styles.hr}></div>
      <div className={styles.socialIcons}>
        <SocialIconsListComponent iconSize="2rem" />
      </div>
    </div>
  )
};

export default FollowMe;

