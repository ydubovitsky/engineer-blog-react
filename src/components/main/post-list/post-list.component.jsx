import styles from './post-list.module.css';
import PostListItem from '../post-list-item/post-list-item.component';
import { getPostPaging, postEntitiesSelector } from '../../../redux/features/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const PostList = () => {

  const dispatch = useDispatch();
  const postEntities = useSelector(postEntitiesSelector);

  useEffect(() => {
    dispatch(getPostPaging(10));
    console.log(postEntities);
  }, [])

  return (
    <div className={styles.container}>
      {console.log(postEntities)}
      <div className={styles.latestPost}>
        <div className={styles.columnTitle}>Latest Post</div>
        <PostListItem {...postEntities[0]} />
      </div>
      <div className={styles.postList}>
        {postEntities?.filter(post => post.id !== 1)
          .map(post => {
            return <PostListItem key={post.id} {...post} />
          })}
      </div>
    </div>
  )
};

export default PostList;