import React, {useState} from "react";


export default function Texttransform(props) {
    const [text, setText] = useState('Enter the text');
    // now wherever we use the text to update by the setText the value get updated 
    // without reloading the page beauty of react useState is the default value of text
    // console.log(useState('Enter the text'))
    // so to change the default only function must used like setText("kjaskjjds")
    // we can't change the state directly by overwidding state value

    // the very best thing of react impressed is that we can change only the 
    // editted text here means that text which was occoured due to state change

    const handleUpperCase = (e)=>{
        e.preventDefault()
        setText("the upperCase function is called")
        console.log("uppercase clicked", text)
    }

    const handleOnChange = (e)=>{
        // console.log("You can't changed") 
        setText(e.target.value)         // now we can update
        console.log(text)
    }

    return (
        <>
        <div className="form-container container mt-5">
            <form action="">
                <div className="container mt-5">
                    <h1>{props.heading}</h1>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Example Textarea
                    </label>
                    <textarea
                        className="text-content form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="exampleFormControlTextarea1"
                        rows="7"
                        cols="10"
                    ></textarea>
                </div>
                <button className="btn btn-primary m-3" onClick={handleUpperCase}>Upper Case</button>
            </form>
        </div>
        </>
    )
}