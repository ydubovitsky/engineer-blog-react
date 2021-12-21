import styles from './follow-me.module.css';

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const FollowMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Follow Me</div>
      <div className={styles.info}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nesciunt adipisci odio tenetur vero architecto est, corporis, aperiam atque consequatur quod, reprehenderit delectus ad quis fugiat. Quia maxime error totam?</div>
      <div className={styles.links}>
        <i className="fab fa-github"></i>
        <i className="far fa-envelope-open"></i>
        <i className="fab fa-telegram"></i>
        <i className="fab fa-skype"></i>
        <i className="fab fa-twitter"></i>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.links}>
        <i className="fab fa-github" style={{ color: getRandomColor() }}></i>
        <i className="far fa-envelope-open" style={{ color: getRandomColor() }}></i>
        <i className="fab fa-telegram" style={{ color: getRandomColor() }}></i>
        <i className="fab fa-skype" style={{ color: getRandomColor() }}></i>
        <i className="fab fa-twitter" style={{ color: getRandomColor() }}></i>
      </div>
    </div>
  )
};

export default FollowMe;

