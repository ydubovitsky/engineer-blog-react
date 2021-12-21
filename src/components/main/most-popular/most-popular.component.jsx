import styles from './most-popular.module.css';

const MostPopular = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Most Popular</div>
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