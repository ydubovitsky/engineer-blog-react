import styles from './up-button.module.css';

const UpButton = () => {

    // Плавный скролл на основной контент!
    const scrollToContentHandler = () => {
      const anchor = document.getElementById('container');
  
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

  return (
    <div className={styles.container} onClick={scrollToContentHandler}>
      <i className="fa fa-arrow-up"></i>
    </div>
  )
}

export default UpButton;