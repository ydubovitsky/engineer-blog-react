import cn from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import UnitTitleComponent from '../../../shared/ui/unit-title/unit-title.component';
import SocialIconsListComponent from '../../../widgets/social-icons-list/social-icons-list.component';
import { LangContext } from '../../../context/lang/LangContext';
import { feedbackMessageAdd } from '../../../redux/features/feedback/feedback.slice';
import { smoothScrollToElement } from '../../../shared/utils/scroll.util';
import styles from './feedback.module.scss';

const FeedbackPage = () => {
  // Context
  const { getLangData } = useContext(LangContext);
  const { feedback } = getLangData();

  const dispatch = useDispatch();
  // По умолчанию в качестве параметра задается id поста
  const [feedbackForm, setFeedbackForm] = useState();

  useEffect(() => {
    smoothScrollToElement("feedback");
  }, [])

  const handlerInputForm = (event) => {
    const { name, value } = event.target;
    setFeedbackForm({
      ...feedbackForm,
      [name]: value
    })
  }

  return (
    <div id="feedback" className={styles.container}>
      <UnitTitleComponent text={feedback.title} />
      <div className={styles.subTitle}>{feedback.subtitle}</div>
      <div className={styles.socialMedia}>
        <SocialIconsListComponent iconSize="1.5rem" />
      </div>
      <div className={cn(styles.form, styles.svgBackground)}>
        <div className={styles.subtitle}>
          {feedback.required_fields}
        </div>
        <div className={styles.inputWithLabel}>
          <label htmlFor="name">{feedback.name}</label>
          <input type="text" name="name" onChange={handlerInputForm} />
        </div>
        <div className={styles.inputWithLabel}>
          <label htmlFor="message">{feedback.message}</label>
          <textarea name="message" onChange={handlerInputForm}></textarea>
        </div>
        <div className={styles.inputWithLabel}>
          <label htmlFor="email">{feedback.email_address}</label>
          <input type="text" name="email" onChange={handlerInputForm} />
        </div>
        <button className={styles.button} onClick={() => dispatch(feedbackMessageAdd(feedbackForm))}>
          {feedback.post_button}
        </button>
      </div>

    </div>
  )
}

export default FeedbackPage;
