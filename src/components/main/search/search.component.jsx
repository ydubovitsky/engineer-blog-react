import styles from './search.module.css';

const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Search</div>
      <div className={styles.searchContainer}>
        <input className={styles.input} type="text" name="" id="" />
        <button className={styles.button} placeholder='Enter your request...'>Search</button>
      </div>
    </div>
  )
};

export default Search;