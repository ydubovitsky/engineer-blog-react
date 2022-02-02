import styles from './pagination.module.css';
import { useDispatch } from 'react-redux';
import {
  changeCurrentPage,
} from '../../../redux/features/post/postSlice';

const Pagination = () => {

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div
        className={styles.button}
        onClick={() => dispatch(changeCurrentPage("previous"))}
      >
        <i className="fas fa-arrow-left"></i>
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