import MostPopular from './components/most-popular/most-popular.component';
import Categories from './components/categories/categories.component';
import styles from './statistic.module.scss';

const Statistic = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mostPopular}>
        <MostPopular />
      </div>
      <div className={styles.categories}>
        <Categories />
      </div>
      <div className={styles.archives}>
      </div>
    </div>
  )
};

export default Statistic;
