import styles from './search.module.css';
import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';

const Search = () => {

  //Context
  const { getLangData } = useContext(LangContext);
  const { search } = getLangData();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{search.title}</div>
      <div className={styles.searchContainer}>
        <input className={styles.input} placeholder={search.placeholder} type="text" name="" />
        <button className={styles.button}>{search.button}</button>
      </div>
    </div>
  )
};

export default Search;