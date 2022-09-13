import {
  Link
} from "react-router-dom";
import cn from 'classnames';

import styles from './pagination-link-button.module.css';

const PaginationLinkButton = ({ handler, currentPage, children, style }) => {

  return (
    <Link to={`/main/posts?page=${currentPage}`}
      className={cn(styles.button, style)}
      onClick={handler}
    >
      {children}
    </Link>
  )
}

export default PaginationLinkButton;