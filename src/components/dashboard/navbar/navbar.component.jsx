import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <p><i class="fas fa-user-shield"></i> Dashboard</p>
      <Link to={"/dashboard/post-list"}>Post List</Link>
      <Link to={"/main"}>Main</Link>
      <Link to={"/main"}>Logout</Link>
    </div>
  )
}

export default Navbar;