import {
  Outlet
} from "react-router-dom";
import CookieAlert from "../../common/components/cookie-alert/cookie-alert.component";
import Footer from "../../common/components/footer/footer.component";
import Sidebar from '../../common/components/sidebar/sidebar.component';
import AsideComponent from "./components/aside/aside.component";
import ColumnWidgets from "./components/column-widgets/column-widgets.component";
import Hero from "./components/hero/hero.component";
import LogoPanel from "./components/logo-panel/logo-panel.component";
import NavPanel from "./components/nav-panel/nav-panel.component";
import SocialNavPanel from "./components/social-nav-panel/social-nav-panel.component";
import Statistic from "./components/statistic/statistic.component";
import TickerImage from "./components/ticker-image/ticker-image.component";
import UpButton from "./components/up-button/up-button.component";
import styles from './main.module.css';

const MainLayout = () => {

  return (
    <div className={styles.container}>
      <Sidebar />
      <SocialNavPanel />
      <LogoPanel />
      <NavPanel />
      <div className={styles.content}>
        <Hero />
        <ColumnWidgets />
        <div className={styles.contentContainer} id="container">
          <div className={styles.posts}>
            <Outlet />
          </div>
          <div className={styles.aside}>
            <div className={styles.sticky}>
              <AsideComponent />
            </div>
          </div>
        </div>
      </div>
      <TickerImage />
      <CookieAlert />
      <Statistic />
      <UpButton />
      <Footer />
    </div>
  )
}

export default MainLayout;
