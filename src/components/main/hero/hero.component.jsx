import styles from './hero.module.css';

const Hero = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.right}>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className={styles.sideHeader}>
          <div className={styles.subTitle}>Lorem, ipsum dolor.</div>
          <div className={styles.hr}></div>
          <div className={styles.title}>Lorem, ipsum dolor.</div>
          <div className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, error?</div>
          <button className={styles.button}>SEE MORE</button>
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