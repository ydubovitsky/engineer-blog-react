import styles from './page-not-found.module.scss';

const PageNotFound = ({ message = 'Page not found' }) => {

  return (
    <div className={styles.container}>
      <div className={styles.number}>404</div>
      <div className={styles.text}><span>Ooops...</span><br />{message}</div>
    </div>
  )
}

export default PageNotFound;