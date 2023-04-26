import styles from './email-icon.module.css';

const EmailIconAtomicComponent = ({ color, size }) => {
  return (
    <div className={styles.container}>
      <a href="https://github.com/ydubovitsky"
        target="_blank"
        rel="noreferrer"
      >
        <i className="far fa-envelope-open" style={{ color: color, fontSize: size }}></i>
      </a>
    </div>
  )
}

export default EmailIconAtomicComponent;