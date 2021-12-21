import styles from './about-me.module.css';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnTitle}>About Me</div>
      <div className={styles.avatar}>
        <img src="https://secure.gravatar.com/avatar/a1e1fa4e9559f47fe8abcb0f1df4357c?s=140&d=mm&r=g" alt="" srcset="" />
      </div>
      <div className={styles.fio}>Lorem, ipsum.</div>
      <div className={styles.about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad voluptas nulla adipisci, provident quaerat animi est dolorem tempore molestias ipsum consequatur ab distinctio quae vitae quod quia ratione possimus perspiciatis, consequuntur, et excepturi ea fuga natus? Temporibus, doloremque atque?</div>
      <button className={styles.button}>Read More</button>
    </div>
  )
}

export default AboutMe;