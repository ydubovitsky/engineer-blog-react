import {
  Outlet
} from "react-router-dom";
import AboutMe from '../about-me/about-me.component';
import FollowMe from '../follow-me/follow-me.component';
import Search from '../search/search.component';
import Subscribe from '../subscribe/subscribe.component';
import styles from './content.module.css';

//TODO Вообще это ненужный слой по идее
const Content = () => {

  return (
    <div className={styles.container} id="container">
      <div className={styles.posts}>
        {/* TODO Может переделать как то? Мб семантику изменить */}
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
  )
};

export default Content;