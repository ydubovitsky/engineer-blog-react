import styles from './subscribe.module.css';

const Subscribe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>SUBSCRIBE TO OUR NEWSLETTER</div>
      <div className={styles.subTitle}>Subscribe to our newsletter and receive new recipes in your inbox.</div>
      <input type="text" name="" placeholder='First Name' />
      <input type="text" name="" placeholder='Last Name' />
      <input type="text" name="" placeholder='Email' />
      <button className={styles.button}>Subscribe</button>
    </div>
  )
};

export default Subscribe;