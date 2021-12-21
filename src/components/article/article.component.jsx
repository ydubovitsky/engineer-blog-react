import styles from './article.module.css';

const Article = () => {
  return (
    <div className={styles.container}>
      <img src="https://i1.wp.com/demo.wpzoom.com/foodica/files/2013/01/FOX_7319-e1459676421430.jpg?resize=750%2C515&ssl=1" alt="" srcset="" />
      <div className={styles.category}>Category</div>
      <div className={styles.title}>Lorem ipsum dolor sit amet.</div>
      <div className={styles.date}>October 3, 2020 </div>
      <div className={styles.description}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia et temporibus ex quasi placeat iste, eos omnis cumque maiores quod vel ducimus tempora corrupti, nisi a accusantium animi aut quas. Consequatur, illum ducimus ipsam deleniti, voluptas tempora aliquam quam voluptatum accusamus, at quas minima? Sed vitae vel atque ad tempore.
        </p>
      </div>
      <button className={styles.button}>Continue reading</button>
    </div>
  )
}

export default Article;