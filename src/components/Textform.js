import React, { useState, useRef } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const textAreaRef = useRef(null);
  const [selectedText, setSelectedText] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontSize, setFontSize] = useState(16);

  const handleUpperCase = () => {
    if (selectedText.length > 0) {
      const newText = text.replace(selectedText, selectedText.toUpperCase());
      setText(newText);
    }
  };

  const handleClearText = () => {
    setText('');
    setSelectedText('');
    setHighlightedText('');
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleMouseUp = () => {
    const textarea = textAreaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const highlightedText = text.slice(start, end);
    setSelectedText(highlightedText);
    setHighlightedText(highlightedText);
  };

  const changeFontFamily = (font) => {
    setFontFamily(font);
  };

  const changeFontSize = (size) => {
    setFontSize(size);
  };

  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  return (
    <div className="form-container container mt-5">
      <form action="">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h3>{props.heading}</h3>
          </label>
          <textarea
            className="text-content form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            cols="10"
            value={text}
            onChange={handleChange}
            onMouseUp={handleMouseUp}
            ref={textAreaRef}
            style={{ fontFamily: fontFamily, fontSize: fontSize }}
          ></textarea>
        </div>
        <button type="button" onClick={handleUpperCase} className="btn btn-info mx-2">
          Upper Case
        </button>
        <button type="button" onClick={handleClearText} className="btn btn-danger mx-2">
          Clear Text
        </button>
        <div className="mt-2">
          {text && (
            <>
              <p>Highlighted Text: {highlightedText}</p>
              <p>Text Preview: {text}</p>
              <p>Word Count: {countWords(text)}</p>
            </>
          )}
        </div>
        <div className="mt-2">
          <h4>Font Family:</h4>
          <button type="button" onClick={() => changeFontFamily('Arial')} className="btn btn-light mx-2">
            Arial
          </button>
          <button type="button" onClick={() => changeFontFamily('Times New Roman')} className="btn btn-light mx-2">
            Times New Roman
          </button>
          <button type="button" onClick={() => changeFontFamily('Courier New')} className="btn btn-light mx-2">
            Courier New
          </button>
        </div>
        <div className="mt-2">
          <h4>Font Size:</h4>
          <button type="button" onClick={() => changeFontSize(14)} className="btn btn-light mx-2">
            14
          </button>
          <button type="button" onClick={() => changeFontSize(16)} className="btn btn-light mx-2">
            16
          </button>
          <button type="button" onClick={() => changeFontSize(18)} className="btn btn-light mx-2">
            18
          </button>
        </div>
      </form>
    </div>
  );
}
