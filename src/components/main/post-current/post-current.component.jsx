import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigate, useParams
} from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
import { authEntitySelector } from '../../../redux/features/auth/authSlice';
import { getPostById, postEntityByIdSelector } from '../../../redux/features/post/postSlice';
import ByteImage from "../../common/hoc/byte-image/byte-image-component";
import LoaderContent from "../../common/loader-content/loader-content.component";
import Author from './author/author.component';
import CommentForm from './comment-form/comment-form.component';
import Comments from './comments/comments.component';
import styles from './post-current.module.css';
import SharedLinks from './shared-links/shared-links';
import SubPost from "./subpost/subpost.component";

const PostCurrent = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const printRef = useRef();

  const post = useSelector(state => postEntityByIdSelector(state, id));
  const { username, jwttoken } = useSelector(authEntitySelector);

  useEffect(() => {
    if (post === undefined) {
      dispatch(getPostById(id));
    }
  }, [])

  const showSubPosts = (subPosts) => {
    return subPosts?.map(subPost => <SubPost key={subPost.id} {...subPost} />)
  }

  const showActionPostButtons = () => {
    if (username && jwttoken) {
      return (
        <>
          <button onClick={() => navigate('/dashboard/post-form', { state: post })}>Edit Article</button>
          <button>Delete Article</button>
        </>
      )
    }
  }

  const handlerPrint = useReactToPrint({
    content: () => printRef.current
  })

  if (post === undefined) {
    return <LoaderContent />
  }

  return (
    <div className={styles.container} ref={printRef}>
      <ByteImage byteImage={post.postImage.byteImage} />
      <div className={styles.title}>{post.title}</div>
      <div className={styles.postDescription}>
        <div className={styles.author}><span>Written by </span> {post.author}</div>
        <div className={styles.date}><span>Updated on </span>{post.updatedAt}</div>
        <div className={styles.category}><span>Category - </span> {post.category}</div>
        <div className={styles.description}>
          {post.description}
        </div>
      </div>
      <div className={styles.disclosure}>{post.disclosure}</div>
      <div className={styles.nav}>
        <button>Jump to code</button>
        <button onClick={handlerPrint}>Print Article</button>
        {showActionPostButtons()}
      </div>
      <div className={styles.text}>
        <p>{post.text}</p>
      </div>
      <div className={styles.subPostsContainer}>
        {showSubPosts(post.subPosts)}
      </div>
      <div className={styles.conclusion}>
        <div className={styles.title}>Conclusion</div>
        <p>{post.conclusion}</p>
      </div>
      <SharedLinks />
      <Author name={post.author} />
      <Comments />
      <CommentForm />
    </div>
  )
}

export default PostCurrent;