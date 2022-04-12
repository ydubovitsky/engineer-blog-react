import styles from './subpost.module.css';
import ByteImage from '../../../common/hoc/byte-image/byte-image-component';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SubPost = ({ text, sourceCode, subPostImage, imageDescription }) => {
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
        <ByteImage byteImage={subPostImage.byteImage} />
        <div className={styles.description}>{imageDescription}</div>
      </div>
    </div>
  )
};

export default SubPost;