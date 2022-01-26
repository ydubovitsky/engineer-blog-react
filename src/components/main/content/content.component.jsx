import {
  Route, Switch
} from "react-router-dom";
import Article from '../../article/article.component';
import AboutMe from '../about-me/about-me.component';
import FollowMe from '../follow-me/follow-me.component';
import PostList from '../post-list/post-list.component';
import Search from '../search/search.component';
import Subscribe from '../subscribe/subscribe.component';
import styles from './content.module.css';
import SignIn from '../sign-in/sign-in.component';

const Content = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.articles}>
        <Switch>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/">
            <PostList />
          </Route>
        </Switch>
      </div>
      <div className={styles.aside}>
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
  )
};

export default Content;