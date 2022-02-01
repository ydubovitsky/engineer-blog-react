import {
  useParams
} from "react-router-dom";

import Author from './author/author.component';
import CommentForm from './comment-form/comment-form.component';
import Comments from './comments/comments.component';
import styles from './post-current.module.css';
import SharedLinks from './shared-links/shared-links';
import { useSelector } from "react-redux";
import { postEntityByIdSelector } from '../../../redux/features/post/postSlice';
import SubPost from "./subpost/subpost.component";

const PostCurrent = () => {

  const { id } = useParams();
  const { author,
    category,
    date,
    description,
    imageSource,
    text,
    title,
    disclosure,
    subPosts } = useSelector(state => postEntityByIdSelector(state, id));

  return (
    <div className={styles.container}>
      <img src={imageSource ? imageSource : 'https://i1.wp.com/demo.wpzoom.com/foodica/files/2013/01/FOX_7319-e1459676421430.jpg?resize=750%2C515&ssl=1'} alt="" />
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

      {subPosts?.map(subPost => <SubPost key={subPost.id} {...subPost} />)}

      <SharedLinks />
      <Author name={author} />
      <Comments />
      <CommentForm />
    </div>
  )
}

export default PostCurrent;