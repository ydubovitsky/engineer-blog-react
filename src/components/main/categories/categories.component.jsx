import styles from './categories.module.css';

const Categories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Categories</div>
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