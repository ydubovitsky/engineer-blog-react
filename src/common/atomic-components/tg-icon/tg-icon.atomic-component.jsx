import styles from './tg-icon.module.css';

const TgIconAtomicComponent = ({ color, size }) => {
  return (
    <div className={styles.container}>
      <a href="https://github.com/y-dubovitsky"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-telegram" style={{ color: color, fontSize: size }}></i>
      </a>
    </div>
  )
}

export default TgIconAtomicComponent;