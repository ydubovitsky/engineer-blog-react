import styles from './logo-panel.module.css';

const LogoPanel = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Engineer Blog</div>
      <div className={styles.subtitle}>FOOD BLOGGING THEME FOR WORDPRESS</div>
    </div>
  )
}

export default LogoPanel;