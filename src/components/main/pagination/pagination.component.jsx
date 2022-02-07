import styles from './pagination.module.css';
import cn from 'classnames';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  changeCurrentPage,
  currentPageSelector,
  maxPageCountSelector
} from '../../../redux/features/post/postSlice';

const Pagination = () => {

  const dispatch = useDispatch();
  const currentPage = useSelector(currentPageSelector);
  const maxPageCount = useSelector(maxPageCountSelector);

  return (
    <div className={styles.container}>
      <div
        className={styles.button}
        onClick={() => dispatch(changeCurrentPage("previous"))}
      >
        <i className="fas fa-arrow-left"></i>
      </div>

      <div className={styles.center}>
        <div
          className={styles.button}
          onClick={() => dispatch(changeCurrentPage("previous"))}
        >
          0
        </div>
        <div className={styles.etc}>...</div>
        <div
          className={cn(styles.button, styles.active)}
          onClick={() => dispatch(changeCurrentPage("previous"))}
        >
          {currentPage}
        </div>
        <div className={styles.etc}>...</div>
        <div
          className={styles.button}
          onClick={() => dispatch(changeCurrentPage("previous"))}
        >
          {maxPageCount}
        </div>
      </div>

      <div
        className={styles.button}
        onClick={() => dispatch(changeCurrentPage("next"))}
      >
        <i className="fas fa-arrow-right"></i>
      </div>
    </div>
  )
}

export default Pagination;