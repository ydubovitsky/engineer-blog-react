import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeHighlighterComponent = ({text}) => {
  return (
    <SyntaxHighlighter
      language={"html"}
      wrapLongLines={true}
      showLineNumbers={true}
      useInlineStyles={true}
      style={docco}
    >
      {text}
    </SyntaxHighlighter>
  )
}

export default CodeHighlighterComponent;