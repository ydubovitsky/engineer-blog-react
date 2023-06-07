import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LangContext } from '../../../../../../context/lang/LangContext';
import { getPostsByTitle } from '../../../../../../redux/features/post/post.slice';
import { smoothScrollToElement } from '../../../../../../utils/scroll.util';
import styles from './search.module.css';

const Search = ({ isShowTitle, style }) => {

  const dispatch = useDispatch();
  //Context
  const { getLangData } = useContext(LangContext);
  const { search } = getLangData();
  const [searchString, setSearchString] = useState();

  const searchStringHandler = (event) => {
    setSearchString(event.target.value);
  }

  return (
    <div className={styles.container} style={{ ...style?.container }}>
      {isShowTitle ? <div className={styles.title}>{search.title}</div> : null}
      <div className={styles.searchContainer} style={{ ...style?.searchContainer }}>
        <input
          onChange={searchStringHandler}
          className={styles.input}
          placeholder={search.placeholder}
          style={{...style?.input}}
          type="text"
        />
        <button
          className={styles.button}
          style={{...style?.button}}
          onClick={() => {
            dispatch(getPostsByTitle(searchString));
            smoothScrollToElement('container');
          }}
        >{search.button}</button>
      </div>
    </div>
  )
};

export default Search;
