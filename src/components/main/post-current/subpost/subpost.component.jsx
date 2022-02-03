import styles from './subpost.module.css';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SubPost = ({ text, sourceCode, image, imageDescription }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>{text}</div>
      <div className={styles.code}>
        <SyntaxHighlighter
          language={"html"}
          wrapLongLines={true}
          showLineNumbers={true}
          useInlineStyles={true}
          style={docco}
        >
          {sourceCode}
        </SyntaxHighlighter>
        <img src={image} alt="" />
        <div className={styles.description}>{imageDescription}</div>
      </div>
    </div>
  )
};

export default SubPost;