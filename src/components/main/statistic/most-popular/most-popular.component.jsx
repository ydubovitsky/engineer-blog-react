import styles from './most-popular.module.css';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LangContext } from '../../../../context/LangContext';
import { mostPopularPostsSelector } from '../../../../redux/features/post/postSlice';
import { useSelector } from 'react-redux';

const MostPopular = () => {

  const mostPopularPosts = useSelector(mostPopularPostsSelector);
  const { getLangData } = useContext(LangContext);
  const { statistic } = getLangData();

  const showMostPopularPosts = () => {
    return mostPopularPosts.map((post, idx) => {
      return (
        <Link key={post.title} to={`/main/post/${post.id}`}>
          <div className={styles.article}>
            <div className={styles.index}>{idx + 1}</div>
            <div className={styles.articleTitle}>{post.title}</div>
            <div className={styles.view}>{post.views} views</div>
          </div>
        </Link>
      )
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{statistic.mostPopularTitle}</div>
      <div className={styles.articles}>
        {showMostPopularPosts()}
      </div>
    </div>
  )
};

export default MostPopular;