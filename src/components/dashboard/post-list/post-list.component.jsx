import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  currentPageSelector
} from '../../../redux/features/pagination/paginationSlice';
import {
  getPostPaging,
  postEntitiesSelector
} from '../../../redux/features/post/postSlice';
import PostListItem from '../post-list-item/post-list-item.component';
import styles from './post-list.module.css';

const PostList = () => {

  const dispatch = useDispatch();
  const postEntities = useSelector(postEntitiesSelector);
  const currentPage = useSelector(currentPageSelector);

  useEffect(() => {
    dispatch(getPostPaging());
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
      <div className={styles.postList}>
        {showPosts(postEntities)}
      </div>
    </div>
  )
};

export default PostList;