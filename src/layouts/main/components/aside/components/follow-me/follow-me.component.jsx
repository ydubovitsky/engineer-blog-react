import SocialIconsListComponent from '../../../../../../common/components/social-icons-list/social-icons-list.component';
import parse from 'html-react-parser';
import { useContext } from 'react';
import { LangContext } from '../../../../../../context/lang/LangContext';
import styles from './follow-me.module.css';

const FollowMe = () => {

  const { getLangData } = useContext(LangContext);
  const { aboutMe } = getLangData();

  return (
    <div className={styles.container}>
      <div className={styles.title}>Follow Me</div>
      <div className={styles.info}>
        {parse(aboutMe.paragraph)}
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

