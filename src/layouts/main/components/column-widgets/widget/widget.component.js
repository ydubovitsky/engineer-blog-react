import styles from "./widget.module.css";

const Widget = ({ imageSrc, text, href }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className={styles.overlay}>
      </div>
      <a href={href} rel="noreferrer" target="_blank" className={styles.button}>{text}</a>
    </div>
  )
}

export default Widget;