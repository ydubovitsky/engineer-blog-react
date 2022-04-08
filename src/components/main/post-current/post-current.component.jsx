import {
  useParams
} from "react-router-dom";
import { useEffect } from 'react';
import Author from './author/author.component';
import CommentForm from './comment-form/comment-form.component';
import Comments from './comments/comments.component';
import styles from './post-current.module.css';
import SharedLinks from './shared-links/shared-links';
import ByteImage from "../../common/hoc/byte-image/byte-image-component";
import RecPosts from "./rec-posts/rec-posts.component";
import { useSelector, useDispatch } from "react-redux";
import { postEntityByIdSelector, getPostById } from '../../../redux/features/post/postSlice';
import SubPost from "./subpost/subpost.component";
import LoaderContent from "../../common/loader-content/loader-content.component";

const PostCurrent = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const post = useSelector(state => postEntityByIdSelector(state, id));

  useEffect(() => {
    if (post === undefined) {
      dispatch(getPostById(id));
    }
  }, [])

  const showSubPosts = (subPosts) => {
    return subPosts?.map(subPost => <SubPost key={subPost.id} {...subPost} />)
  }

  if (post === undefined) {
    return <LoaderContent />
  }

  return (
    <div className={styles.container}>
      <ByteImage byteImage={post.postImage} />
      <div className={styles.category}>{post.category}</div>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.date}>{post.date}</div>
      <div className={styles.author}>{post.author}</div>
      <div className={styles.disclosure}>{post.disclosure}</div>
      <div className={styles.nav}>
        <button>Jump to code</button>
        <button>Print Article</button>
      </div>
      <div className={styles.description}>
        <p>{post.description}</p>
      </div>
      <div className={styles.text}>
        <p>{post.text}</p>
      </div>
      <div className={styles.subPostsContainer}>
        {showSubPosts(post.subPosts)}
      </div>
      <SharedLinks />
      <Author name={post.author} />
      <RecPosts id={id} />
      <Comments />
      <CommentForm />
    </div>
  )
}

export default PostCurrent;