import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Header from "./Header";
import CreateArea from './CreateArea';
import Note from './Note';
import Footer from "./Footer";


function App() {
 

  return (
   <div>
    <Header />
    <CreateArea />
    <Note />
    <Footer />
   </div>
  )
}

export default App
