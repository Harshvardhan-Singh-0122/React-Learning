import React, { useState } from 'react'
import NotesSection from './components/NotesSection';

const App = () => {

  const [title, setTitle] = useState('');
  const [descri, setDescri] = useState('');
  const [notes, setNotes] = useState([]);


  const formHandle = (e)=>{
      e.preventDefault();
      console.log(title);
      console.log(descri);
      
      setTitle('');
      setDescri('');

  }

  const addNotes = (e)=>{
    const copyNote = [...notes];
    const newNote = {title : title, descri: descri};
    copyNote.push(newNote);
    setNotes(copyNote)
  }

  const deleteNote = (idx) =>{
    const copyNote = [...notes];
    copyNote.splice(idx,1);
    setNotes(copyNote);
  }




  return (
    <div className='flex justify-start '>
      <form onSubmit={(e)=>{
          formHandle(e);
          addNotes(e);
        }}>
        <div className='flex flex-col m-5'>
          <input 
          type="text"
          placeholder='Enter title of note'
          className='border-2 w-xl p-1 m-1.5 rounded' 
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
          value={title}
          />
          <textarea
          placeholder='Enter description of Note...'
          className='border-2 w-xl h-48 p-1 m-1.5 rounded'
          onChange={(e)=>{
            setDescri(e.target.value);
          }}
          value={descri}
          >
          </textarea>
          <button 
          className='border-2 w-xl  p-1 m-1.5 rounded-2xl bg-black text-white active:scale-95'
          >Add Notes</button>
        </div>
      </form>
      <div className=' m-2 p-1 flex flex-wrap'>
          {
            notes.map((ele, idx)=>{
              return <div   index={idx} className="h-50 w-40 m-3.5 p-2.5 bg-amber-100">
                        <h3 className=' text-black  border-b'>{ele.title}</h3>
                        <p className=' mt-1.5 text-gray-500 w-36 h-30'>{ele.descri}</p>
                        <button
                        className=' text-xs font-medium w-15 ml-10 p-2 bg-amber-700 rounded active:scale-95'
                        onClick={()=>{
                          deleteNote(idx);
                        }}
                        >Delete</button>
                      </div>
            })
          }
        
        
        
      </div>
    </div>
  )
}

export default App