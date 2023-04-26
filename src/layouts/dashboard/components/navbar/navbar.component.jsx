import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../redux/features/auth/auth.slice';

const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Link to={"/"}>Main</Link>
      <Link to={"/dashboard/post-form"}>Post Form</Link>
      <span onClick={() => dispatch(logout())}>Logout</span>
    </div>
  )
}

export default Navbar;
