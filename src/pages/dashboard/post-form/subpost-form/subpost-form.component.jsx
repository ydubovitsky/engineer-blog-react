import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fillPostSubPostContent } from '../../../../redux/features/post-form/post-form.slice';
import Input from '../input/input.component';
import styles from './subpost-form.module.css';

const SubPost = ({ index, state }) => {

  const [subPost, setSubPost] = useState(state);
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
      <Input name="text" type="textarea" value={subPost?.text} handler={{ onChange: handlerInputForm }} />
      <Input name="sourceCode" type="textarea" value={subPost?.sourceCode} handler={{ onChange: handlerInputForm }} />
      {/* //TODO Value я картинки не работает! */}
      <Input name={`image_${index}`} type="image" handler={{ onChange: handlerInputForm }} />
      <Input name="imageDescription" type="text" value={subPost?.imageDescription} handler={{ onChange: handlerInputForm }} />
    </div>
  )
}

export default SubPost;
