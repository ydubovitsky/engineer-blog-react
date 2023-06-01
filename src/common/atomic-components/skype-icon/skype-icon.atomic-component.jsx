import styles from './skype-icon.module.css';
import getRandomColor from '../../../utils/color.util';

const SkypeIconAtomicComponent = ({ size }) => {
  return (
    <div className={styles.container}>
      <a href="skype:listen_toyou">
        <i className="fab fa-skype" style={{ color: getRandomColor(), fontSize: size }}></i>
      </a>
    </div>
  )
}

export default SkypeIconAtomicComponent;
