import styles from './up-button.module.scss';
import { smoothScrollToElement } from '../../../../utils/scroll.util';

const UpButton = () => {

  return (
    <div className={styles.container} onClick={() => smoothScrollToElement('container')}>
      <i className="fa fa-arrow-up"></i>
    </div>
  )
}

export default UpButton;
