import styles from './popup.module.scss';
import cn from 'classnames';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { popupStateSelector, hidePopup } from '../../../redux/features/popup/popup.slice';

const SHOW_TIME_POPUP = 4000;

const Popup = () => {

  const dispatch = useDispatch();
  const { isVisible, popupEntity } = useSelector(popupStateSelector);

  useEffect(() => {
    if (isVisible === true) {
      setTimeout(() => {
        dispatch(hidePopup())
      }, SHOW_TIME_POPUP)
    }
  }, [isVisible])

  return (
    <div
      className={cn(styles.container, isVisible ? styles.active : null)}
      style={popupEntity.styles}
    >
      <p>{popupEntity.message}</p>
    </div>
  )
}

export default Popup;