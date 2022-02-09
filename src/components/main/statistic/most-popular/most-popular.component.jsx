import styles from './most-popular.module.css';

import { useContext } from 'react';
import { LangContext } from '../../../../context/LangContext';

const MostPopular = () => {

  const { getLangData } = useContext(LangContext);
  const { statistic } = getLangData();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{statistic.mostPopularTitle}</div>
      <div className={styles.articles}>
        <div className={styles.article}>
          <div className={styles.index}>1</div>
          <div className={styles.articleTitle}>Lorem ipsum dolor sit amet.</div>
          <div className={styles.view}>8872 views</div>
        </div>
        <div className={styles.article}>
          <div className={styles.index}>1</div>
          <div className={styles.articleTitle}>Lorem ipsum dolor sit amet.</div>
          <div className={styles.view}>8872 views</div>
        </div>
        <div className={styles.article}>
          <div className={styles.index}>1</div>
          <div className={styles.articleTitle}>Lorem ipsum dolor sit amet.</div>
          <div className={styles.view}>8872 views</div>
        </div>
        <div className={styles.article}>
          <div className={styles.index}>1</div>
          <div className={styles.articleTitle}>Lorem ipsum dolor sit amet.</div>
          <div className={styles.view}>8872 views</div>
        </div>
      </div>
    </div>
  )
};

export default MostPopular;