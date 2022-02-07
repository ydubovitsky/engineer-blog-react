import cn from 'classnames';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fillPostMainContent,
  newPostSelector
} from '../../../redux/features/post/postSlice';
import Input from '../input/input.component';
import SubPost from '../subpost-form/subpost-form.component';
import callApi from '../../../redux/requests/callApi';
import styles from './post-form.module.css';

const PostForm = () => {

  const dispatch = useDispatch();
  const [post, setPost] = useState();
  const [subPosts, setSubPosts] = useState([<SubPost index={0} />]);
  const refForm = useRef(null);
  const newPost = useSelector(newPostSelector);

  useEffect(() => {
    dispatch(fillPostMainContent(post));
  }, [post]);

  const addSubPostFormElement = () => {
    setSubPosts(
      [...subPosts,
      <SubPost
        key={subPosts.length}
        index={subPosts.length}
      />]);
  }

  const handlerDataPost = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value
    });
  }

  const sendRequest = async (refForm, newPost) => {
    const files = getAllNamedFilesFromForm(refForm);
    const body = new FormData();
    files.forEach(file => body.append('files', file));
    body.append('newPost', JSON.stringify(newPost));

    const payload = {
      method: 'POST',
      requestBody: body,
      path: '/api/post/add'
    }
    // data: JSON.stringify(requestBody),

    const data = await callApi(payload);
    convertBytesToImageElement(data);
  }

  /**
   * This method return all Files from the form with types 'file' with name = <input name=....
   * @returns 
   */
  const getAllNamedFilesFromForm = (refForm) => {
    const fileListElements = refForm.current.querySelectorAll('input[type=file]');
    const files = Array.from(fileListElements)
      .map(fileElement => {
        const renamedFile = new File([fileElement.files[0]], fileElement.name);
        return renamedFile;
      });
    return files;
  }

  return (
    <form ref={refForm} className={cn(styles.container, styles.svgBackground)}>
      <div className={styles.mainInfo}>
        <Input name="postImage" type="image" handler={{ onChange: handlerDataPost }} />
        <Input name="category" type="text" handler={{ onChange: handlerDataPost }} />
        <Input name="title" type="text" handler={{ onChange: handlerDataPost }} />
        <Input name="date" type="text" handler={{ onChange: handlerDataPost }} />
        <Input name="author" type="text" handler={{ onChange: handlerDataPost }} />
        <Input name="disclosure" type="text" handler={{ onChange: handlerDataPost }} />
        <Input name="description" type="textarea" handler={{ onChange: handlerDataPost }} />
      </div>
      <div className={styles.subPosts}>
        {subPosts?.map(subPost => {
          return subPost
        })}
      </div>
      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.button}
          onClick={addSubPostFormElement}
        >Add SubPost
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => sendRequest(refForm, newPost)}
        >Save Post <i className="fas fa-save"></i>
        </button>
      </div>
    </form>
  )
}

export default PostForm;

// --------------------------- Util Functions ---------------------------

const printDataFromFormData = (formData) => {
  for (var pair of formData.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
  }
}

const convertBytesToImageElement = (data) => {
  const img = document.createElement('img');
  img.setAttribute('src', `data:image/png;base64,${data.postImage}`);
  console.log(data);
  document.body.appendChild(img);
  data.subPosts.forEach(post => {
    const img = document.createElement('img');
    img.setAttribute('src', `data:image/png;base64,${post.subPostImage}`);
    // console.log(data);
    document.body.appendChild(img);
  })
}