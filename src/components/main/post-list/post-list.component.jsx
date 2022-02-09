import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  currentPageSelector, getPostPaging,
  postEntitiesSelector
} from '../../../redux/features/post/postSlice';
import PostListItem from '../post-list-item/post-list-item.component';
import styles from './post-list.module.css';
import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

const PostList = () => {

  const dispatch = useDispatch();
  const postEntities = useSelector(postEntitiesSelector);
  const currentPage = useSelector(currentPageSelector);
  //Context
  const { getLangData } = useContext(LangContext);
  const { postList } = getLangData();

  useEffect(() => {
    dispatch(getPostPaging(currentPage));
  }, [currentPage]);

  const showPosts = (postsList) => {
    const posts
      = postsList?.filter(post => post.id > currentPage * 5 && post.id < (currentPage * 5) + 5)
        .map(post => {
          return <PostListItem key={post.id} {...post} />
        });

    return posts;
  }

  return (
    <div className={styles.container}>
      <div className={styles.latestPost}>
        <div className={styles.columnTitle}>{postList.columnTitle}</div>
        <PostListItem {...postEntities[0]} />
      </div>
      <div className={styles.postList}>
        {showPosts(postEntities)}
      </div>
    </div>
  )
};

export default PostList;