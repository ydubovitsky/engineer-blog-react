import styles from './tg-icon.module.scss';

const TgIconAtomicComponent = ({ color, size }) => {
  return (
    <div className={styles.container}>
      <a href="https://github.com/ydubovitsky"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-telegram" style={{ color: color, fontSize: size }}></i>
      </a>
    </div>
  )
}

export default TgIconAtomicComponent;