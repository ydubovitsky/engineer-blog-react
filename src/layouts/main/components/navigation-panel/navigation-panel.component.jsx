import cn from "classnames";
import { Link } from "react-router-dom";
import styles from './navigation-panel.module.css';
import { authSelector, logout } from '../../../../redux/features/auth/auth.slice';
import { useSelector, useDispatch } from 'react-redux';
import { useContext, useState } from "react";
import { LangContext } from '../../../../context/lang/LangContext';
import LangSwitcher from './components/lang-switcher/lang-switcher.component';
import SocialIconsListComponent from "../../../../common/components/social-icons-list/social-icons-list.component";

const NavigationPanelComponent = () => {

  const dispatch = useDispatch();
  const { status, authEntity } = useSelector(authSelector);
  //Context
  const { getLangData } = useContext(LangContext);
  const { socialNavPanel } = getLangData();
  const [isSidebarShow, setIsSidebarShow] = useState(false);

  const showAuthButton = (status) => {
    if (status === 'succeeded') {
      return <Link to="/" onClick={() => dispatch(logout())}><i className="fas fa-sign-out-alt">Hello {authEntity.username}</i></Link>
    }
    return <Link to="/main/auth"><i className="fas fa-sign-in-alt"></i></Link>
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar} onClick={() => setIsSidebarShow(!isSidebarShow)}>
        <i className="fa fa-bars"></i>
      </div>
      <div className={cn(styles.navContainer, isSidebarShow ? styles.showSidebar : '')}>
        <div className={styles.menu}>
          <div className={styles.menuItem}><Link to="/"><p>{socialNavPanel.menu.home}</p></Link></div>
          <div className={styles.menuItem}><Link to="/main/about"><p>{socialNavPanel.menu.about}</p></Link></div>
          <div className={styles.menuItem}><Link to="/main/feedback"><p>{socialNavPanel.menu.contacts}</p></Link></div>
          <div className={styles.menuItem}><Link to="/main/policy"><p>{socialNavPanel.menu.policy}</p></Link></div>
        </div>
        <LangSwitcher />
        <SocialIconsListComponent />
        <div className={styles.closeBtn} onClick={() => setIsSidebarShow(!isSidebarShow)}>
          <i className="fas fa-times-circle"></i>
        </div>
        {showAuthButton(status)}
      </div>
    </div>
  )
}

export default NavigationPanelComponent;
