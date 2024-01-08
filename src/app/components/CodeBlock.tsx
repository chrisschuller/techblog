import styled from "@emotion/styled";
import hljs from "highlight.js";
import Stylable from "../types/Stylable";

interface CodeBlockProps extends Stylable {
  filename: string;
  language: string;
  content: string;
}

const CodeBlockContainer = styled.div`
  background: #282c34;
  color: #868c9a;
  padding: 60px 0px 20px 30px;
  border-radius: 10px;
  font-size: 14px;
  position: relative;
  box-shadow: 4px 4px 9px -7px #000000;
`;

const Filename = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  padding: 5px 15px;
  color: #ffffff;
  transform: translateX(-50%);
`;

const Language = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px 15px;
  color: white;
  background: #15171b;
  border-radius: 10px;
`;

function CodeBlock({ filename, language, content, style }: CodeBlockProps) {
  return (
    <CodeBlockContainer style={style}>
      <Filename>{filename}</Filename>
      <Language>{language}</Language>
      <div style={{ overflowY: "auto" }}>
        <pre>
          <code
            dangerouslySetInnerHTML={{
              __html: hljs.highlight(content, {
                language,
              }).value,
            }}
          ></code>
        </pre>
      </div>
    </CodeBlockContainer>
  );
}

export default CodeBlock;
