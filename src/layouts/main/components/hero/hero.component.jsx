import cn from 'classnames';
import styles from './hero.module.css';
import { useContext, useState } from 'react';
import { LangContext } from '../../../../context/lang/LangContext';
import { smoothScrollToElement } from '../../../../utils/smoothScrollToElement';
//TODO! Сделать так, чтобы сразу массив импортировался!
import {
  FirstSlideImage,
  SecondSlideImage,
  ThirdSlideImage
} from "./images";

const Hero = () => {

  const images = [FirstSlideImage, SecondSlideImage, ThirdSlideImage];
  const { getLangData } = useContext(LangContext);
  const { hero } = getLangData();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Устанавливает рандомное число в диапазоне в качестве номера для текущего слайда
  const sliderHandler = (_, min = 0, max = images.length - 1) => {
    let rand = min + Math.random() * (max + 1 - min);
    setCurrentSlide(Math.floor(rand));
  }

  const showDotsElements = () => {
    return images.map((_, idx) => {
      return <div key={idx} className={cn(styles.dot, idx === currentSlide ? styles.dotActive : '')}></div>
    })
  }

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${images[currentSlide]})` }}>
      <div className={styles.overlay}>
        <div className={styles.right} onClick={sliderHandler}>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className={styles.sideHeader}>
          <div className={styles.subTitle}>{hero.subTitle}</div>
          <div className={styles.hr}></div>
          <div className={styles.title}>{hero.title}</div>
          <div className={styles.text}>
            <p>{hero.text}</p>
          </div>
          <button className={styles.button} onClick={() => smoothScrollToElement('container')}>{hero.button}</button>
        </div>
        <div className={styles.left} onClick={sliderHandler}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className={styles.pageDots}>
          {showDotsElements()}
        </div>
      </div>
    </div>
  );
};

export default Hero;
