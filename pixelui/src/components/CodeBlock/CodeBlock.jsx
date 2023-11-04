import React from "react";
import "./CodeBlock.css";
import SyntaxHighLighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeBlock({ codeText }) {
  return (
    <div className="codeblock">
      <SyntaxHighLighter
        language="jsx"
        style={vs2015}
        customStyle={{
          padding: "20px",
          lineHeight: "25px",
          width: "100%",
          borderRadius: "8px",
          fontSize: "14px",
        }}
        wrapLongLines
      >
        {codeText}
      </SyntaxHighLighter>
    </div>
  );
}

export default CodeBlock;
