import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fillPostSubPostContent } from '../../../redux/features/post-form/postFormSlice';
import Input from '../input/input.component';
import styles from './subpost-form.module.css';

const SubPost = ({ index }) => {

  const [subPost, setSubPost] = useState();
  const dispatch = useDispatch();

  const handlerInputForm = (event) => {
    const { name, value } = event.target;
    setSubPost({
      ...subPost,
      [name]: value
    })
  }

  useEffect(() => {
    dispatch(fillPostSubPostContent({ index, subPost }));
  }, [subPost]);

  return (
    <div className={styles.container}>
      <Input name="text" type="textarea" handler={{ onChange: handlerInputForm }} />
      <Input name="sourceCode" type="textarea" handler={{ onChange: handlerInputForm }} />
      <Input name={`image_${index}`} type="image" handler={{ onChange: handlerInputForm }} />
      <Input name="imageDescription" type="text" handler={{ onChange: handlerInputForm }} />
    </div>
  )
}

export default SubPost;
