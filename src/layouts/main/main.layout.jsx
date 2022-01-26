import {
  Route, Switch
} from "react-router-dom";
import Footer from "../../components/common/footer/footer.component";
import ColumnWidgets from "../../components/main/column-widgets/column-widgets.component";
import Content from "../../components/main/content/content.component";
import Hero from "../../components/main/hero/hero.component";
import LogoPanel from "../../components/main/logo-panel/logo-panel.component";
import NavPanel from "../../components/main/nav-panel/nav-panel.component";
import SocialNavPanel from "../../components/main/social-nav-panel/social-nav-panel.component";
import Statistic from "../../components/main/statistic/statistic.component";
import TickerImage from "../../components/main/ticker-image/ticker-image.component";
import SignIn from "../../components/main/sign-in/sign-in.component";
import styles from './main.module.css';

const Main = () => {
  return (
    <div className={styles.container}>
      <SocialNavPanel />
      <LogoPanel />
      <NavPanel />
      <Switch>
        <Route path="/login">
          <SignIn />
        </Route>
      </Switch>
      <div className={styles.content}>
        <Hero />
        <ColumnWidgets />
        <Content />
      </div>
      <TickerImage />
      <Statistic />
      <Footer />
    </div>
  )
}

export default Main;