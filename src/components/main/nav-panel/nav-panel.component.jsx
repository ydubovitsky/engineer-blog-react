import styles from './nav-panel.module.css';

const NavPanel = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.link}>About</div>
      <div className={styles.link}>Projects</div>
      <div className={styles.link}>Contacts</div>
      <div className={styles.link}>Articles</div>
      <div className={styles.link}><i class="fas fa-search"></i></div>
    </div>
  )
}

export default NavPanel;