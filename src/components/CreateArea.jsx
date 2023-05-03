import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import {Zoom} from '@mui/material';

function CreateArea(props){

    //State to hold the changes.
    const [note,setNote] = useState({
        title: "",
        content : ""
    });
    
    const [isExpanded, setIsExpanded] = useState(false);

    //handling event changes and sets value in note;
    function handleChange(event){
        const {name, value} = event.target;
        setNote((prevValue)=>{
            return { ...prevValue , [name]: value};
        })
    }

    //Passes note argument to onAdd function and prevent default submit behaviour
    function handleClick(event){
        event.preventDefault();
        props.onAdd(note);
    }

    return(
        <div>
            <form className="create-note">
            {/* Renders input if isExpanded is true(when textArea is clicked) */}
            {isExpanded &&(
                <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
            )}
                <textarea name="content" onChange={handleChange} onClick={()=>{
                    setIsExpanded(true);
                }} value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />

                <Zoom in={isExpanded}>
                <Fab onClick={handleClick}> 
                <AddIcon />
                </Fab>
                </Zoom>
               
            </form>
        </div>
    );
}

export default CreateArea;