import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <p><i class="fas fa-user-shield"></i> Dashboard</p>
    </div>
  )
}

export default Navbar;