import styles from './about-me.module.css';
import { useContext } from 'react';
import { LangContext } from '../../../../../../context/lang/LangContext';
import AvatarImg from './images/avatar.jpg';

const AboutMe = () => {

  const { getLangData } = useContext(LangContext);
  const { aboutMe } = getLangData();

  return (
    <div className={styles.container}>
      <div className={styles.columnTitle}>{aboutMe.columnTitle}</div>
      <div className={styles.avatar}>
        <img src={AvatarImg} alt="" />
      </div>
      <div className={styles.fio}>{aboutMe.fio}</div>
      <div className={styles.about}>{aboutMe.about}</div>
      <button className={styles.button}>{aboutMe.button}</button>
    </div>
  )
}

export default AboutMe;
