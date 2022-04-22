import styles from './up-button.module.css';
import { smoothScrollToElement } from '../../../utils/smoothScrollToElement';

const UpButton = () => {

  return (
    <div className={styles.container} onClick={() => smoothScrollToElement('content')}>
      <i className="fa fa-arrow-up"></i>
    </div>
  )
}

export default UpButton;