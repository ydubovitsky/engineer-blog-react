import styles from './github-icon.module.css';

const GithubIconAtomicComponent = ({ color, size }) => {
  return (
    <div className={styles.container}>
      <a href="https://github.com/y-dubovitsky"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github" style={{ color: color, fontSize: size }}></i>
      </a>
    </div>
  )
}

export default GithubIconAtomicComponent;