import React, { useState } from 'react';

function CreateArea(props){

    //State to hold the changes.

    const [note,setNote] = useState({
        title: "",
        content : ""
    });

    //handling event changes and setting value in note;
    function handleChange(event){
        const {name, value} = event.target;
        setNote((prevValue)=>{
            return { ...prevValue , [name]: value};
        })
    }

    function handleClick(event){
        event.preventDefault();
        props.onAdd(note);
    }
    return(
        <div>
            <form className="create-note">
                <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
                <button onClick={handleClick}> Add</button>
            </form>
        </div>
    );
}

export default CreateArea;