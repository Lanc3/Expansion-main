import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeRenderer = ({ code }) => {
  return (
    <SyntaxHighlighter language="jsx" style={materialOceanic}>
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeRenderer
