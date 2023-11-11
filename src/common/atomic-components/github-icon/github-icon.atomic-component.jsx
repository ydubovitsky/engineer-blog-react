import styles from './github-icon.module.scss';

const GithubIconAtomicComponent = ({ color, size }) => {
  return (
    <div className={styles.container}>
      <a href="https://github.com/ydubovitsky"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github" style={{ color: color, fontSize: size }}></i>
      </a>
    </div>
  )
}

export default GithubIconAtomicComponent;