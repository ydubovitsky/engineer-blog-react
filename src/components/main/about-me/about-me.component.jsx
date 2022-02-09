import styles from './about-me.module.css';
import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

const AboutMe = () => {

  const { getLangData } = useContext(LangContext);
  const { aboutMe } = getLangData();

  return (
    <div className={styles.container}>
      <div className={styles.columnTitle}>{aboutMe.columnTitle}</div>
      <div className={styles.avatar}>
        <img src="https://secure.gravatar.com/avatar/a1e1fa4e9559f47fe8abcb0f1df4357c?s=140&d=mm&r=g" alt="" />
      </div>
      <div className={styles.fio}>{aboutMe.fio}</div>
      <div className={styles.about}>{aboutMe.about}</div>
      <button className={styles.button}>{aboutMe.button}</button>
    </div>
  )
}

export default AboutMe;