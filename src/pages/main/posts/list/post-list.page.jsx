import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useSearchParams
} from "react-router-dom";
import LoaderContent from '../../../../widgets/loader-content/loader-content.component';
import { LangContext } from '../../../../context/lang/LangContext';
import {
  getPostPaging,
  postEntitiesSelector
} from '../../../../redux/features/post/post.slice';
import Pagination from './components/pagination/pagination.component';
import PostListItem from './components/post-list-item/post-list-item.component';
import styles from './post-list.module.scss';

const PostListPage = () => {

  const dispatch = useDispatch();
  const postEntities = useSelector(postEntitiesSelector);

  // Get current page from query params : http://localhost:3000/main/posts?page=2
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page"));
  // Context
  const { getLangData } = useContext(LangContext);
  const { postList } = getLangData();

  useEffect(() => {
    dispatch(getPostPaging(page));
  }, [page]);

  const showPosts = (postsList) => (
    postsList?.map(post => <PostListItem key={post.id} {...post} />)
  )


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

export default PostListPage;
