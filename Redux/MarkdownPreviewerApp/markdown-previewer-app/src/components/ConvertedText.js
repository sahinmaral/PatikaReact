import React from "react";
import { useSelector } from "react-redux";
import { getText } from "../redux/markdownSlice";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ConvertedText() {
  const text  = useSelector(getText);

  return (
      <ReactMarkdown
        children={text}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
  );
}

export default ConvertedText;
