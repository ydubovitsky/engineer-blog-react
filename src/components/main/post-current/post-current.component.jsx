import styles from './post-current.module.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SharedLinks from './shared-links/shared-links';
import Author from './author/author.component';
import Comments from './comments/comments.component';
import CommentForm from './comment-form/comment-form.component';

const PostCurrent = () => {
  return (
    <div className={styles.container}>
      <img src="https://i1.wp.com/demo.wpzoom.com/foodica/files/2013/01/FOX_7319-e1459676421430.jpg?resize=750%2C515&ssl=1" alt="" />
      <div className={styles.category}>Category</div>
      <div className={styles.title}>Lorem ipsum dolor sit amet.</div>
      <div className={styles.date}>October 3, 2020 </div>
      <div className={styles.author}>Matthey James Smith</div>
      <div className={styles.disclosure}>This post may contain affiliate links. We may earn money from the companies mentioned in this post. #sponsoredpost.</div>
      <div className={styles.nav}>
        <button>Jump to code</button>
        <button>Print Article</button>
      </div>
      <div className={styles.description}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia et temporibus ex quasi placeat iste, eos omnis cumque maiores quod vel ducimus tempora corrupti, nisi a accusantium animi aut quas. Consequatur, illum ducimus ipsam deleniti, voluptas tempora aliquam quam voluptatum accusamus, at quas minima? Sed vitae vel atque ad tempore.
        </p>
      </div>
      <div className={styles.text}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores perspiciatis quae incidunt odio, deleniti architecto accusamus vitae qui culpa quas maiores dolor placeat tenetur porro dolorum cupiditate. Dolor nostrum veritatis assumenda a ab, minima cupiditate molestiae beatae. Dolore reprehenderit, optio harum explicabo temporibus voluptatibus qui dicta cum dolores praesentium porro quas, quisquam eligendi assumenda accusamus dolorum pariatur repudiandae impedit minima a excepturi eum aliquid. Molestiae, dolorem repudiandae error in earum laborum fugit quas inventore ad eos consequatur itaque nisi optio incidunt accusamus modi vel aliquam qui veritatis sequi recusandae. Omnis enim quis, optio blanditiis eos dolorum ipsam dolorem accusantium quod quas eum fuga aliquid eaque explicabo pariatur quasi voluptatem, rerum tempora, veniam consectetur. Voluptas ut eveniet fuga aliquam cum autem ipsa repellat impedit sint exercitationem praesentium accusamus voluptates voluptatem, eius aspernatur distinctio ipsum illo provident rerum pariatur. Perferendis autem modi natus, veritatis exercitationem aut itaque ipsa quam officia perspiciatis amet impedit non iste. Rem mollitia, quas molestias ipsa numquam rerum asperiores aspernatur, nulla dolore expedita, quae minus. Harum facilis doloremque neque quam accusantium provident autem maxime laboriosam laborum, reprehenderit excepturi amet voluptatibus nesciunt possimus ipsam tenetur aliquam iste. Laudantium non voluptate magni vel nobis obcaecati perspiciatis illo hic! Esse doloremque possimus nobis repellendus fugiat. Inventore consectetur cumque ullam debitis esse alias quis repellendus tempora ex dolores. Quas illum quo eius ex reprehenderit quam natus, dicta iusto. Iure, illo possimus recusandae temporibus non consequatur maiores voluptates debitis nesciunt exercitationem voluptatibus nisi facere sit dolores asperiores aliquid qui veritatis dignissimos ullam ad minima laboriosam architecto. Fugit, dolorem aut qui dolor facilis iure animi obcaecati asperiores recusandae id atque cupiditate exercitationem illo nemo! Reprehenderit quae illum modi aspernatur iusto ut repellendus aperiam quia aliquam nulla possimus harum blanditiis recusandae ducimus ratione quis mollitia iure, voluptates laboriosam nobis dolores veritatis. Debitis, iure similique quod fugiat omnis cumque sint dicta vitae numquam accusantium distinctio alias voluptatem qui reiciendis fuga doloribus. Fugiat molestias nesciunt omnis deleniti ducimus laboriosam similique, itaque adipisci officiis rerum pariatur sequi debitis impedit? Ab eos tenetur consectetur et tempore pariatur, nesciunt minus voluptates sit eius quod, maiores atque culpa hic, expedita fuga rem? Illo voluptatibus reprehenderit, corporis ex ratione rem nobis ab quaerat eaque.
        </p>
      </div>
      <div className={styles.code}>
        <SyntaxHighlighter language={"javascript"} wrapLongLines={true} showLineNumbers={true} useInlineStyles={true} style={docco}>
          {`<div>
            <div className={styles.category}>Category</div>
              <div className={styles.title}>Lorem ipsum dolor sit amet.</div>
              <div className={styles.date}>October 3, 2020 </div>
              <div className={styles.author}>Matthey James Smith</div>
              <div className={styles.nav}>
                <button>Jump to code</button>
                <button>Print Article</button>
              </div>
              <div className={styles.description}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia et temporibus ex quasi placeat iste, eos omnis cumque maiores quod vel ducimus tempora corrupti, nisi a accusantium animi aut quas. Consequatur, illum ducimus ipsam deleniti, voluptas tempora aliquam quam voluptatum accusamus, at quas minima? Sed vitae vel atque ad tempore.
                </p>
              </div>
            </div>
            `}
        </SyntaxHighlighter>
      </div>
      <SharedLinks />
      <Author />
      <Comments />
      <CommentForm />
    </div>
  )
}

export default PostCurrent;