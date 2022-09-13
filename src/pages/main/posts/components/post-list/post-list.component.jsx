import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LangContext } from '../../../../../context/lang/LangContext';
import {
  useSearchParams
} from "react-router-dom";
import {
  getPostPaging,
  postEntitiesSelector,
  pageSizeSelector
} from '../../../../../redux/features/post/post.slice';
import PostListItem from './post-list-item/post-list-item.component';
import Pagination from './pagination/pagination.component';
import styles from './post-list.module.css';
import LoaderContent from '../../../../../common/components/loader-content/loader-content.component';

const PostList = () => {

  const dispatch = useDispatch();
  const postEntities = useSelector(postEntitiesSelector);
  const pageSize = useSelector(pageSizeSelector);

  // Get current page from query params : http://localhost:3000/main/posts?page=2
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page"));
  // Context
  const { getLangData } = useContext(LangContext);
  const { postList } = getLangData();

  useEffect(() => {
    dispatch(getPostPaging(page));
  }, [page]);

  const showPosts = (postsList) => {
    const posts
      = postsList?.slice((page - 1) * pageSize, page * pageSize)
        .map(post => {
          return <PostListItem key={post.id} {...post} />
        });
    return posts;
  }

  if (postEntities.length === 0) {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.latestPost}>
            <LoaderContent />
          </div>
          <div className={styles.postList}>
            {new Array(4).fill(null).map((_, idx) => <LoaderContent key={idx} />)}
          </div>
        </div>
        <Pagination />
      </>
    )
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.latestPost}>
          <div className={styles.columnTitle}>{postList.columnTitle}</div>
          <PostListItem {...postEntities[0]} />
        </div>
        <div className={styles.postList}>
          {showPosts(postEntities)}
        </div>
      </div>
      <Pagination />
    </>
  )
};

export default PostList;
