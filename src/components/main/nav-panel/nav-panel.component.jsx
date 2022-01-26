import styles from './nav-panel.module.css';

const NavPanel = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.link}>About</div>
      <div className={styles.link}>Projects</div>
      <div className={styles.link}>Contacts</div>
      <div className={styles.link}>Articles</div>
      <input type="text" name=""/>
      <div className={styles.link}><i className="fas fa-search"></i></div>
    </div>
  )
}

export default NavPanel;