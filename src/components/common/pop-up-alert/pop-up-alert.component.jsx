import styles from './pop-up-alert.module.css';

const POPUP_TIME_LIVE = 5000;

//TODO Можно улучшить логику, в данный момент появление/исчезновение регулируется CSS.
const PopUpAlert = ({ message, backGroundColor, isShowPopUp, timeLive = POPUP_TIME_LIVE }) => {

  if (isShowPopUp === false) {
    return null;
  }

  return (
    <div className={styles.container} style={{ backgroundColor: backGroundColor }}>
      <p>{message}</p>
    </div>
  )
}

export default PopUpAlert;