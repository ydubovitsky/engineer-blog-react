import cn from 'classnames';
import { useRef } from 'react';
import styles from './sidebar.module.css';
import { Link } from 'react-router-dom';
import { authSelector, logout } from '../../../redux/features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';

const Sidebar = () => {

  const dispatch = useDispatch();
  const sidebarRef = useRef(null);
  const { authEntity } = useSelector(authSelector);

  const toggleSidebar = () => {
    sidebarRef.current.classList.toggle(styles.isOpen);
  }

  const showMenu = (user) => {
    if (user) {
      return <>
        <div className={styles}>Hello, {user}</div>
        <Link to={"/dashboard"}>Dashboard</Link>
        <div onClick={() => dispatch(logout())}>Logout</div>
      </>
    }
    return <>
      <h4>Please Login!</h4>
      <Link to={"/main/login"}>Login!</Link>
    </>
  }

  return (
    <div className={styles.container} ref={sidebarRef} onClick={toggleSidebar}>
      <div className={styles.button}>
        <i className={cn("fas", "fa-cog", styles.icon)}></i>
      </div>
      <div className={styles.menu}>
        {showMenu(authEntity.username)}
      </div>
    </div>
  )
}

export default Sidebar;