import styles from './hero.module.css';
import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

const Hero = () => {

  const { getLangData } = useContext(LangContext);
  const { hero } = getLangData();

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.right}>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className={styles.sideHeader}>
          <div className={styles.subTitle}>{hero.subTitle}</div>
          <div className={styles.hr}></div>
          <div className={styles.title}>{hero.title}</div>
          <div className={styles.text}>
            <p>{hero.text}</p>
          </div>
          <button className={styles.button}>{hero.button}</button>
        </div>
        <div className={styles.left}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className={styles.pageDots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;