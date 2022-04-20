import styles from './nav-panel.module.css';
import { useContext, useState } from 'react';
import { LangContext } from '../../../context/LangContext';
import { useDispatch } from 'react-redux';
import { getPostsByTitle } from '../../../redux/features/post/postSlice';

const NavPanel = () => {

  const dispatch = useDispatch();
  const { getLangData } = useContext(LangContext);
  const { navPAnel } = getLangData();
  const [searchString, setSearchString] = useState();

  const searchStringHandler = (event) => {
    setSearchString(event.target.value);
  }

  // Плавный скролл на основной контент!
  const scrollToContentHandler = () => {
    const anchor = document.getElementById('container');

    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.link}>{navPAnel.about}</div>
      <div className={styles.link}>{navPAnel.projects}</div>
      <div className={styles.link}>{navPAnel.contacts}</div>
      <div className={styles.link}>{navPAnel.posts}</div>
      <input type="text" name="" onChange={searchStringHandler} />
      <div
        className={styles.link}
        onClick={() => {
          dispatch(getPostsByTitle(searchString));
          scrollToContentHandler();
        }}
      ><i className="fas fa-search"></i>
      </div>
    </div>
  )
}

export default NavPanel;