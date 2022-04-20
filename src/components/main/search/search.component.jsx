import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LangContext } from '../../../context/LangContext';
import { getPostsByTitle } from '../../../redux/features/post/postSlice';
import styles from './search.module.css';

const Search = () => {

  const dispatch = useDispatch();
  //Context
  const { getLangData } = useContext(LangContext);
  const { search } = getLangData();
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
      <div className={styles.title}>{search.title}</div>
      <div className={styles.searchContainer}>
        <input
          onChange={searchStringHandler}
          className={styles.input}
          placeholder={search.placeholder}
          type="text"
          />
        <button
          className={styles.button}
          onClick={() => {
            dispatch(getPostsByTitle(searchString));
            scrollToContentHandler();
          }}
        >{search.button}</button>
      </div>
    </div>
  )
};

export default Search;