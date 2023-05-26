import React, { useState, useRef } from "react";
// import fonts from '../Api/random_fonts'
// import styled from 'styled-components';

// export const StyledHighlightedText = styled.div`
//   span {
//     font-family: ${({ fontFamily }) => fontFamily};
//   }
// `;

const alphabets = "abcdefghijklmnopqrstuvwxyz"

export default function Texttransform(props) {
    const [text, setText] = useState('Enter the text');
    const [highlightedText, setHighlightedText] = useState("");
    const textareaRef = useRef(null);

    const handleUpperCase = (e) => {
        e.preventDefault()
        const textarea = textareaRef.current
        const selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd)
        const newText = selectedText.toUpperCase()
        const updatedText = `${text.substring(0, textarea.selectionStart)}${newText}${text.substring(textarea.selectionEnd)}`
        setText(updatedText)
        props.showAlerts("Converted to upperCase!", "success")
    }

    const handleOnChange = (e) => {
        const addedText = e.target.value
        setText(addedText)
    }

    // const handleHighlightedText = (e) => {
    //     e.preventDefault()
    //     const textarea = textareaRef.current
    //     const selectionText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd)
    //     // const updatedText = text.replace(selectionText, highlightedText);
    //     // setText(updatedText);
    //     const highlightedText = `<span style="background-color: yellow">${selectionText}</span>`;
    //     const updatedText =
    //         text.substring(0, textarea.selectionStart) +
    //         highlightedText +
    //         text.substring(textarea.selectionEnd);
    //     return updatedText
    // }

    const handleHighlightedText = (e) => {
        e.preventDefault()
        const textarea = textareaRef.current
        const selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd)
        const highlightedText = `<span style="background-color: yellow">${selectedText}</span>`;
        setHighlightedText(highlightedText);
    }

    // const handleFonts = (e) => {
    //     e.preventDefault();
    //     const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    //     const textarea = textareaRef.current;
    //     const selectedText = textarea.value.substring(
    //         textarea.selectionStart,
    //         textarea.selectionEnd
    //     );
    //     const fontText = `<span>${selectedText}</span>`;
    //     const updatedText = `${text.substring(0,textarea.selectionStart
    //     )}${fontText}${text.substring(textarea.selectionEnd)}`;
    //     setText(updatedText);
    //     setHighlightedText(randomFont);
    // };

    const handleCopy = (e) => {
        e.preventDefault()
        const textarea = textareaRef.current
        textarea.select()
        navigator.clipboard.writeText(textarea.value)
        props.showAlerts("text copied to clipboard", "success")
    }

    const handleDeletion = (e) => {
        e.preventDefault()
        setText('')
        props.showAlerts("text cleared successfully!", "alert")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // const txtLen = textareaRef.current.value;
        const txtLen = document.querySelector('.randomtext textarea').value;
        let s = "";
        for (let i = 0; i < txtLen; i++) {
            s += alphabets[Math.floor((Math.random()*txtLen)%26)];
        }
        setText(s);
    };
    const handleRemoveSpaces = (e)=>{
        e.preventDefault()
        const nextText = text.split(/[ ]+/)
        setText(nextText.join(" "))
    }


    return (
        <>
            <div className={`form-container container mt-2 bg-${props.mode}`}>
                <form action="">
                    <div className="container mt-3">
                        <div className="randomtext" style={{ "position": "absolute", "top": "15.5rem", "right": "8.7rem" }} >
                            <p style={{ "margin": "0" }}>Enter random text</p>
                            <textarea className="text-size" placeholder="Enter words.."></textarea>
                            <button className="btn btn-primary" style={{"marginBottom": "2rem"}} onClick={handleSubmit}>submit</button>
                        </div>
                        <h1>{props.heading}</h1>
                        <textarea
                            className="text-content form-control"
                            value={text}
                            onChange={handleOnChange}
                            ref={textareaRef}
                            id="exampleFormControlTextarea1"
                            rows="7"
                            cols="10"
                        ></textarea>
                    </div>
                    <div className="btns mt-2">
                        <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Upper Case</button>
                        <button className="btn btn-primary mx-2" onClick={handleHighlightedText}>Highlight</button>
                        {/* <button className="btn btn-primary m-3" onClick={handleFonts}>Random Fonts</button> */}
                        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
                        <button className="btn btn-primary mx-2" onClick={handleDeletion}>Clear Text</button>
                        <button className="btn btn-primary mx-2" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
                    </div>
                    <div
                        className="highlighted-text"
                        dangerouslySetInnerHTML={{ __html: highlightedText }}
                    ></div>
                </form>
                <div className="container mt-2 d-flex justify-content-between">
                    <div className="left" style={{ "width": "45%" }}>
                        <h1>Track your progress</h1>
                        <p>{text.split(" ").length} words and {text.length} characters</p>
                        <p>Average time to read {text.split(" ").length * 0.008} mins</p>
                    </div>
                    <div className="right" style={{ "width": "45%", "textAlign": "center", wordWrap: "break-word"    }}>
                        <h2>Preview</h2>
                        <p style={{ "maxWidth": "100%", "height": "auto", "overflow": "auto"}}>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}