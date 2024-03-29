import { useState } from 'react';
import {
  useSelector
} from 'react-redux';
import { useSearchParams } from "react-router-dom";
import { maxPageCountSelector } from '../../../../../../redux/features/post/post.slice';
import PaginationLinkButton from './pagination-link-button/pagination-link-button.component';
import styles from './pagination.module.scss';

const Pagination = () => {

  // Read the param from url, for example http://localhost:3000/main/posts?page=3
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page'));
  // Set init param
  const [currentPage, setCurrentPage] = useState(page);
  const maxPageCount = useSelector(maxPageCountSelector);

  //TODO МБ упростить функцию
  const changePageByDirection = (direction) => {
    switch (direction) {
      case 'next': {
        if (currentPage !== maxPageCount) {
          setCurrentPage(currentPage => currentPage + 1);
        }
        break;
      }
      case 'previous': {
        if (currentPage > 1) setCurrentPage(currentPage => currentPage - 1);
        break;
      }
      case 'init': {
        setCurrentPage(1);
        break;
      }
      default: {
        setCurrentPage(currentPage);
        break;
      }
    }
  }

  return (
    <div className={styles.container}>
      <PaginationLinkButton
        // Вынести в отдельную функцию?
        currentPage={currentPage > 1 ? currentPage - 1 : currentPage}
        handler={() => changePageByDirection("previous")}
      >
        <i className="fas fa-arrow-left"></i>
      </PaginationLinkButton>
      <div className={styles.center}>
        <PaginationLinkButton
          handler={() => changePageByDirection("init")}
          currentPage={currentPage}
        >
          <p>1</p>
        </PaginationLinkButton>
        <div className={styles.etc}>...</div>
        <PaginationLinkButton
          currentPage={currentPage}
          style={[styles.heart, styles.active]}
        >
          <p>{currentPage}</p>
        </PaginationLinkButton>
        <div className={styles.etc}>...</div>
        <PaginationLinkButton
        currentPage={currentPage}>
          <p>{maxPageCount}</p>
        </PaginationLinkButton>
      </div>
      <PaginationLinkButton
        currentPage={maxPageCount > currentPage ? currentPage + 1 : currentPage}
        handler={() => changePageByDirection("next")}
      >
        <i className="fas fa-arrow-right"></i>
      </PaginationLinkButton>
    </div>
  )
}

export default Pagination;
