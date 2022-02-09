import styles from './categories.module.css';
import { useContext } from 'react';
import { LangContext } from '../../../../context/LangContext';

const Categories = () => {

  const { getLangData } = useContext(LangContext);
  const { statistic } = getLangData();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{statistic.categoriesTitle}</div>
      <div className={styles.categories}>
        <div className={styles.category}>
          <div className={styles.name}>Lorem, ipsum dolor.</div>
          <div className={styles.count}>10</div>
        </div>
        <div className={styles.category}>
          <div className={styles.name}>Lorem, ipsum dolor.</div>
          <div className={styles.count}>10</div>
        </div>
        <div className={styles.category}>
          <div className={styles.name}>Lorem, ipsum dolor.</div>
          <div className={styles.count}>10</div>
        </div>
        <div className={styles.category}>
          <div className={styles.name}>Lorem, ipsum dolor.</div>
          <div className={styles.count}>10</div>
        </div>
      </div>
    </div>
  )
};

export default Categories;