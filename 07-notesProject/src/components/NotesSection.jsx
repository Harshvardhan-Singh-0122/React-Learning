import React from 'react'

const NotesSection = () => {
  return (
    <div>
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
    </div>
  )
}

export default NotesSection