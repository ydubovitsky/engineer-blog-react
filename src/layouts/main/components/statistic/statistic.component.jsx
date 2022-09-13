import MostPopular from './most-popular/most-popular.component';
import Categories from './categories/categories.component';
import styles from './statistic.module.css';

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