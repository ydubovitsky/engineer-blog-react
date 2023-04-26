import { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigate, useSearchParams
} from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
import LoaderContent from "../../../../common/components/loader-content/loader-content.component";
import SocialIconsListComponent from '../../../../common/components/social-icons-list/social-icons-list.component';
import { LangContext } from '../../../../context/lang/LangContext';
import ByteImage from "../../../../hoc/byte-image/byte-image-component";
import { authEntitySelector } from '../../../../redux/features/auth/auth.slice';
import {
  deletePostById, getPostById, increasePostViewById, postEntityByIdSelector
} from '../../../../redux/features/post/post.slice';
import Author from './components/author/author.component';
import CommentForm from './components/comment-form/comment-form.component';
import Comments from './components/comments/comments.component';
import styles from './post-current.module.css';

const REDIRECT_TIME_AFTER_SUCCESSFUL_POST_REMOVING = 5000;

const PostCurrentPage = () => {

  // Context
  const { getLangData } = useContext(LangContext);
  const { post_current } = getLangData();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const printRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();

  const postId = parseInt(searchParams.get("id"));
  const post = useSelector(state => postEntityByIdSelector(state, postId));
  const { username, jwttoken } = useSelector(authEntitySelector);

  /**
   * Если поста нет в стейте, происходит запрос получения данных с id поста,
   * в противном случае, делается запрос на изменение количества просмотров
   */
  useEffect(() => {
    if (post === undefined) {
      dispatch(getPostById(postId));
    } else {
      dispatch(increasePostViewById(postId))
    }
  }, [])

  const showActionPostButtons = () => {
    if (username && jwttoken) {
      return (
        <div className={styles.nav}>
          <button onClick={handlerPrint}>{post_current.printArticle}</button>
          <button>{post_current.jumpToCode}</button>
          <button onClick={() => navigate(`/dashboard/post-form?id=${postId}`,)}>{post_current.editArticle}</button>
          <button onClick={deletePostHandler}>{post_current.deleteArticle}</button>
        </div>
      )
    }
  }

  const handlerPrint = useReactToPrint({
    content: () => printRef.current
  })

  /**
   * This method Deletes post by id and if response === OK shows PopUp and redirected to /main after some time
   */
  const deletePostHandler = () => {
    dispatch(deletePostById(postId)).then(data => {
      if (data.payload === 'OK') {
        setTimeout(() => {
          navigate("/");
        }, REDIRECT_TIME_AFTER_SUCCESSFUL_POST_REMOVING)
      }
    })
  }

  // Loader
  if (post === undefined) {
    return <LoaderContent />
  }

  return (
    <div className={styles.container} ref={printRef}>
      <ByteImage byteImage={post.postImage.byteImage} />
      <div className={styles.title}>{post.title}</div>
      <div className={styles.postDescription}>
        <div className={styles.author}><span>{post_current.writtenBy} </span> {post.author}</div>
        <div className={styles.date}><span>{post_current.updatedOn} </span>{post.updatedAt}</div>
        <div className={styles.category}><span>{post_current.category} </span> {post.category}</div>
        <div className={styles.description}>
          {post.description}
        </div>
      </div>
      <div className={styles.disclosure}>{post.disclosure}</div>
      <div className={styles.nav}>
        {showActionPostButtons()}
      </div>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: post.text }} />
      <div className={styles.conclusion}>
        <div className={styles.title}>{post_current.conclusion}</div>
        <p>{post.conclusion}</p>
      </div>
      <SocialIconsListComponent iconSize="2rem" />
      <Author name={post.author} />
      <Comments />
      <CommentForm />
    </div>
  )
}

export default PostCurrentPage;
