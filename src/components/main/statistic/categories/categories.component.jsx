import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { LangContext } from '../../../../context/LangContext';
import { arrayOfKeysAndValuesOfCategoriesAndTheirCountSelector } from '../../../../redux/features/post/postSlice';
import styles from './categories.module.css';

const Categories = () => {

  const { getLangData } = useContext(LangContext);
  const { statistic } = getLangData();
  const arrayOfKeysAndValuesOfCategoriesAndTheirCount = useSelector(arrayOfKeysAndValuesOfCategoriesAndTheirCountSelector);

  const showCategories = () => {
    return (arrayOfKeysAndValuesOfCategoriesAndTheirCount.map(([key, value]) => {
      return (<div key={key} className={styles.category}>
        <div className={styles.name}>{key}</div>
        <div className={styles.count}>{value}</div>
      </div>
      )
    }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{statistic.categoriesTitle}</div>
      <div className={styles.categories}>
        {showCategories()}
      </div>
    </div>
  )
};

export default Categories;