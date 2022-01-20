import styles from './content.module.css';
import PostList from '../post-list/post-list.component';
import AboutMe from '../about-me/about-me.component';
import FollowMe from '../follow-me/follow-me.component';
import Subscribe from '../subscribe/subscribe.component';
import Search from '../search/search.component';
import Article from '../../article/article.component';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const Content = (props) => {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.articles}>
          <Routes >
            <Route path="/" element={<PostList />} />
            <Route path="/article" element={<Article />} />
          </Routes>
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
    </Router>
  )
};

export default Content;