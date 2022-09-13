import styles from './about.module.css';
import { useContext, useEffect } from 'react';
import { smoothScrollToElement } from '../../../utils/smoothScrollToElement';
import { LangContext } from '../../../context/lang/LangContext';

const AboutPage = () => {

  const { getLangData } = useContext(LangContext);
  const { about_blog } = getLangData();

  useEffect(() => {
    smoothScrollToElement("aboutBlog");
  }, [])

  return (
    <div id="aboutBlog"className={styles.container}>
      <div className={styles.column}>
        <h1>{about_blog.about}</h1>
        <p>{about_blog.paragraph_1}</p>
        <p>{about_blog.paragraph_2}</p>
        <div className={styles.socialLinks}>
          <i className="fab fa-github"></i>
          <i className="far fa-envelope-open"></i>
          <i className="fab fa-telegram"></i>
          <i className="fab fa-skype"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
      <div className={styles.column}>
        <img src="https://images.unsplash.com/photo-1504270856906-58da8a7e7102?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
      </div>
    </div>
  )
}

export default AboutPage;
