import {
  Outlet
} from "react-router-dom";
import CookieAlert from "../../common/components/cookie-alert/cookie-alert.component";
import Footer from "../../common/components/footer/footer.component";
import Sidebar from '../../common/components/sidebar/sidebar.component';
import AboutMe from './components/about-me/about-me.component';
import ColumnWidgets from "./components/column-widgets/column-widgets.component";
import FollowMe from './components/follow-me/follow-me.component';
import Hero from "./components/hero/hero.component";
import LogoPanel from "./components/logo-panel/logo-panel.component";
import NavPanel from "./components/nav-panel/nav-panel.component";
import Search from './components/search/search.component';
import SocialNavPanel from "./components/social-nav-panel/social-nav-panel.component";
import Statistic from "./components/statistic/statistic.component";
import Subscribe from './components/subscribe/subscribe.component';
import TickerImage from "./components/ticker-image/ticker-image.component";
import UpButton from "./components/up-button/up-button.component";
import styles from './main.module.css';

const Main = () => {

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
              <div className={styles.about}>
                <AboutMe />
              </div>
              <div className={styles.follow}>
                <FollowMe />
              </div>
              <div className={styles.subscribe}>
                <Subscribe />
              </div>
              <div className={styles.search}>
                <Search />
              </div>
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

export default Main;
