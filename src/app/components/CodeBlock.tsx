import hljs from "highlight.js";

interface CodeBlockProps {
  filename: string;
  language: string;
  content: string;
}

function CodeBlock({ filename, language, content }: CodeBlockProps) {
  return (
    <div
      style={{
        background: "#282C34",
        color: "#868c9a",
        padding: "60px 0px 20px 30px",
        borderRadius: "10px",
        fontSize: "14px",
        position: "relative",
        maxWidth: "90vw",
        boxShadow: "4px 4px 9px -7px #000000",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          padding: "5px 15px",
          color: "#ffffff",
          transform: "translateX(-50%)",
        }}
      >
        {filename}
      </div>
      <div
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          padding: "5px 15px",
          background: "#15171b",
          color: "white",
          borderRadius: "10px",
        }}
      >
        {language}
      </div>
      <div style={{ overflowY: "auto" }}>
        <pre>
          <code
            dangerouslySetInnerHTML={{
              __html: hljs.highlight(content, { language }).value,
            }}
          ></code>
        </pre>
      </div>
    </div>
  );
}

export default CodeBlock;
