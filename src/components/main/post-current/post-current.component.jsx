import {
  useParams
} from "react-router-dom";

import Author from './author/author.component';
import CommentForm from './comment-form/comment-form.component';
import Comments from './comments/comments.component';
import styles from './post-current.module.css';
import SharedLinks from './shared-links/shared-links';
import ByteImage from "../../common/hoc/byte-image/byte-image-component";
import RecPosts from "./rec-posts/rec-posts.component";
import { useSelector } from "react-redux";
import { postEntityByIdSelector } from '../../../redux/features/post/postSlice';
import SubPost from "./subpost/subpost.component";

const PostCurrent = () => {

  const { id } = useParams();
  const { author,
    category,
    date,
    description,
    postImage,
    text,
    title,
    disclosure,
    subPosts } = useSelector(state => postEntityByIdSelector(state, id));

  const showSubPosts = (subPosts) => {
    return subPosts?.map(subPost => <SubPost key={subPost.id} {...subPost} />)
  }

  return (
    <div className={styles.container}>
      <ByteImage byteImage={postImage} />
      <div className={styles.category}>{category}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>{date}</div>
      <div className={styles.author}>{author}</div>
      <div className={styles.disclosure}>{disclosure}</div>
      <div className={styles.nav}>
        <button>Jump to code</button>
        <button>Print Article</button>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div className={styles.text}>
        <p>{text}</p>
      </div>
      <div className={styles.subPostsContainer}>
        {showSubPosts(subPosts)}
      </div>
      <SharedLinks />
      <Author name={author} />
      <RecPosts id={id}/>
      <Comments />
      <CommentForm />
    </div>
  )
}

export default PostCurrent;