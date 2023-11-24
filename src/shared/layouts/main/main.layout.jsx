import {
  Outlet
} from "react-router-dom";
import CookieAlert from "../../../widgets/cookie-alert/cookie-alert.component";
import Footer from "../../../widgets/footer/footer.component";
import Sidebar from '../../../widgets/sidebar/sidebar.component';
import AsideComponent from "./components/aside/aside.component";
import ColumnWidgets from "./components/column-widgets/column-widgets.component";
import Hero from "./components/hero/hero.component";
import LogoPanel from "./components/logo-panel/logo-panel.component";
import NavPanel from "./components/nav-panel/nav-panel.component";
import NavigationPanelComponent from "./components/navigation-panel/navigation-panel.component";
import Statistic from "./components/statistic/statistic.component";
import TickerImage from "./components/ticker-image/ticker-image.component";
import UpButton from "./components/up-button/up-button.component";
import { Fade } from 'react-awesome-reveal';
import styles from './main.module.scss';

const MainLayout = () => {

  return (
    <div className={styles.container}>
      <Sidebar />
      <NavigationPanelComponent />
      <Fade cascade>
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
      </Fade>
      <TickerImage />
      <CookieAlert />
      <Statistic />
      <UpButton />
      <Footer />
    </div>
  )
}

export default MainLayout;
