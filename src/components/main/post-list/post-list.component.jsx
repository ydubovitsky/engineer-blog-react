import styles from './post-list.module.css';
import PostListItem from '../post-list-item/post-list-item.component';
import {
  getPostPaging,
  postEntitiesSelector,
  currentPageSelector,
  postPerPageSelector
} from '../../../redux/features/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const PostList = () => {

  const dispatch = useDispatch();
  const postEntities = useSelector(postEntitiesSelector);
  const currentPage = useSelector(currentPageSelector);

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
      {console.log(postEntities)}
      <div className={styles.latestPost}>
        <div className={styles.columnTitle}>Latest Post</div>
        <PostListItem {...postEntities[0]} />
      </div>
      <div className={styles.postList}>
        {showPosts(postEntities)}
      </div>
    </div>
  )
};

export default PostList;