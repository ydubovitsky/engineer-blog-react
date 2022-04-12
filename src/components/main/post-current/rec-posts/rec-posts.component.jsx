import styles from './rec-posts.module.css';
import { useSelector } from 'react-redux';
import { postEntityByIdSelector } from '../../../../redux/features/post/postSlice';
import ByteImage from '../../../common/hoc/byte-image/byte-image-component';

const RecPosts = ({ id }) => {

  const previousPost = useSelector(state => postEntityByIdSelector(state, parseInt(id - 1)));
  const nextPost = useSelector(state => postEntityByIdSelector(state, parseInt(id + 1)));

  return (
    <div className={styles.container}>
      <div className={styles.title}>Recommended Posts</div>
      <div className={styles.previousPost}>
        <p>{previousPost?.title}</p>
        <ByteImage byteImage={previousPost?.postImage.byteImage} />
      </div>
      <div className={styles.nextPost}>
        <p>{previousPost?.title}</p>
        <ByteImage byteImage={nextPost?.postImage.byteImage} />
      </div>
    </div>
  )
}

export default RecPosts;