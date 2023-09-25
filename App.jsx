import { useState } from 'react'
import Header from "./src/components/Header";
import CreateArea from './src/components/CreateArea';
import Note from "./src/components/Note"
import Footer from "./src/components/Footer";


function App() {
  //State to insert newNote 
  const [notes, setNotes] = useState([]);

  //Adds new note to array of notes;
  function addNotes(newNote){
   setNotes((prevNote)=>{
    return [...prevNote, newNote];
   })
  }

  //Delete note
  function deleteNotes(id){
    setNotes((prevNotes)=>{
      return(prevNotes.filter((note,index)=>{
        return index !== id;
      }));
    });
  }

  return (
   <div>
    <Header />
    <CreateArea onAdd={addNotes}/>
    {/* Mapping every element in array(notes) and rendering value of an array*/}
    {
      notes.map((note,index)=>{
      return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNotes} />
      })
    }
    <Footer />
   </div>
  )
}

export default App
