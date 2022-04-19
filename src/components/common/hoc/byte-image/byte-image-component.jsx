import styles from './byte-image.module.css';
import BlankImage from '../../../../resources/images/blank-image.jpg';

const ByteImage = ({ byteImage = ''}) => { //TODO Добавить изображение по умолчанию?
  return (
    <div className={styles.container}>
      <img src={byteImage ? `data:image/png;base64,${byteImage}` : <BlankImage />} alt="" />
    </div>
  )
}

export default ByteImage;