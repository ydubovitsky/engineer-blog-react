import cn from 'classnames';
import { useRef } from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {

  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    sidebarRef.current.classList.toggle(styles.isOpen);
  }

  return (
    <div className={styles.container} ref={sidebarRef} onClick={toggleSidebar}>
      <div className={styles.button}>
        <i className={cn("fas", "fa-cog", styles.icon)}></i>
      </div>
      <div className={styles.menu}>

      </div>
    </div>
  )
}

export default Sidebar;