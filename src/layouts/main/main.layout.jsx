import {
  Outlet
} from "react-router-dom";
import CookieAlert from "../../components/common/cookie-alert/cookie-alert.component";
import Footer from "../../components/common/footer/footer.component";
import Sidebar from '../../components/common/sidebar/sidebar.component';
import AboutMe from '../../components/main/about-me/about-me.component';
import ColumnWidgets from "../../components/main/column-widgets/column-widgets.component";
import FollowMe from '../../components/main/follow-me/follow-me.component';
import Hero from "../../components/main/hero/hero.component";
import LogoPanel from "../../components/main/logo-panel/logo-panel.component";
import NavPanel from "../../components/main/nav-panel/nav-panel.component";
import Search from '../../components/main/search/search.component';
import SocialNavPanel from "../../components/main/social-nav-panel/social-nav-panel.component";
import Statistic from "../../components/main/statistic/statistic.component";
import Subscribe from '../../components/main/subscribe/subscribe.component';
import TickerImage from "../../components/main/ticker-image/ticker-image.component";
import UpButton from "../../components/main/up-button/up-button.component";
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