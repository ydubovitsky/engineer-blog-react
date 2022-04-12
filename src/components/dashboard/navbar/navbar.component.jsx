import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/features/auth/authSlice';

const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Link to={"/dashboard"}><i class="fas fa-user-shield"></i> Dashboard</Link>
      <Link to={"/"}>Main</Link>
      <Link to={"/dashboard/post-list"}>Post List</Link>
      <span onClick={() => dispatch(logout())}>Logout</span>
    </div>
  )
}

export default Navbar;