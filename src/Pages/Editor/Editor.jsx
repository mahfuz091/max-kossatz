import "quill/dist/quill.snow.css";
import send from "../../assets/images/Send Button.svg";

// import dynamic from "next/dynamic";

import ReactQuill from "react-quill";
import { useState } from "react";
const Editor = () => {
  const [value, setValue] = useState("");
  const [wordCount, setWordCount] = useState(0);

  var modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],

      ["link"],
    ],
  };
  var formats = ["bold", "italic", "underline", "align", "color", "link"];
  const handleProcedureContentChange = (content, _, __, editor) => {
    setValue(content);
    const text = editor.getText();
    const strippedText = text.replace(/\s+/g, "").trim();
    const words = strippedText.split("").filter(Boolean).length;

    console.log(words);
    setWordCount(words);
  };

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div
      className='w-full '
      style={{
        display: "grid",
        border: "1px solid #E2E9EF",
        borderRadius: "10px",
      }}
    >
      <ReactQuill
        theme='snow'
        modules={modules}
        formats={formats}
        placeholder='write your content ....'
        onChange={handleProcedureContentChange}
        style={{ width: "100%", border: "none" }}
        className='form-container w-full'
      ></ReactQuill>
      <div className='flex items-center justify-end z-50'>
        <div>
          <p>{wordCount}/1000</p>
        </div>
        <button className='cursor-pointer' onClick={handleClick}>
          <img src={send} alt='' />
        </button>
      </div>
    </div>
  );
};

export default Editor;
