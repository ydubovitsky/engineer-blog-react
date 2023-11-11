import cn from 'classnames';
import { useRef, useContext } from 'react';
import styles from './sidebar.module.scss';
import { Link } from 'react-router-dom';
import { authSelector, logout } from '../../../redux/features/auth/auth.slice';
import { useSelector, useDispatch } from 'react-redux';
import { LangContext } from '../../../context/lang/LangContext';

const Sidebar = () => {

  const dispatch = useDispatch();
  const sidebarRef = useRef(null);
  const { authEntity } = useSelector(authSelector);
  //Context
  const { getLangData } = useContext(LangContext);
  const { sidebar } = getLangData();

  const toggleSidebar = () => {
    sidebarRef.current.classList.toggle(styles.isOpen);
  }

  const showMenu = (user) => {
    if (user) {
      return <>
        <div className={styles.greetings}>{sidebar.greetings}, {user}</div>
        <Link to={"/dashboard"} className={styles.dashboard}>{sidebar.dashboard}</Link>
        <div onClick={() => dispatch(logout())} className={styles.logout}>{sidebar.logout}</div>
      </>
    }
    return <>
      <h4>{sidebar.login}</h4>
      <Link to={"/main/auth"} className={styles.btn}>{sidebar.loginBtn}</Link>
    </>
  }

  return (
    <div className={styles.container} ref={sidebarRef} onClick={toggleSidebar}>
      <div className={styles.button}>
        <i className={cn("fas", "fa-cog", styles.icon)}></i>
      </div>
      <div className={styles.menu}>
        {showMenu(authEntity?.username)}
      </div>
    </div>
  )
}

export default Sidebar;
