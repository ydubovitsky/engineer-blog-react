import styles from './twitter-icon.module.scss';
import getRandomColor from '../../utils/color.util';

const TwitterIconAtomicComponent = ({ size }) => {
  return (
    <div className={styles.container}>
      <a href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-twitter" style={{ color: getRandomColor(), fontSize: size }}></i>
      </a>
    </div>
  )
}

export default TwitterIconAtomicComponent;
