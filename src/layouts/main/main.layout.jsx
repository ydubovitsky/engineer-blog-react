import CookieAlert from "../../components/common/cookie-alert/cookie-alert.component";
import Footer from "../../components/common/footer/footer.component";
import Sidebar from '../../components/common/sidebar/sidebar.component';
import ColumnWidgets from "../../components/main/column-widgets/column-widgets.component";
import Content from "../../components/main/content/content.component";
import Hero from "../../components/main/hero/hero.component";
import LogoPanel from "../../components/main/logo-panel/logo-panel.component";
import NavPanel from "../../components/main/nav-panel/nav-panel.component";
import SocialNavPanel from "../../components/main/social-nav-panel/social-nav-panel.component";
import Statistic from "../../components/main/statistic/statistic.component";
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
        {/* Основной динамическй контент */}
        <Content />
      </div>
      <TickerImage />
      <CookieAlert/>
      <Statistic />
      <UpButton />
      <Footer />
    </div>
  )
}

export default Main;