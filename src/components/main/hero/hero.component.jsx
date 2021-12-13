import NavHeader from '../nav-header/hav-header.component';
import styles from './hero.module.css';

const Hero = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Engineer Blog</h1>
        <h3>Записки на манжетах</h3>
        <div className={styles.line} />
        <div className={styles.nav}>
          <NavHeader />
        </div>
      </div>
      <div className={styles.avatar}>
        <img src="http://demo.alx.media/slanted/wp-content/uploads/sites/5/2019/03/slanted-profile.png" alt="" srcset="" />
      </div>
    </div>
  );
};

export default Hero;