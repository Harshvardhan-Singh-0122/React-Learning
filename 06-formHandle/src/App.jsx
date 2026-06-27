import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');

  const submitBtn = (e) =>{
      e.preventDefault();
      console.log("form submitted by", title);
      setTitle('');
  }
  return (
    <div>
      <form onSubmit={(e)=>{
          submitBtn(e);
      }}>
        <input 
          type="text" 
          placeholder='Enter your name'
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
          value={title}
          className='p-2.5 m-2.5 border-2 rounded-2xl'/>
        <button className='p-2.5 m-2.5 border-2 rounded-2xl'>submit</button>
      </form>
    </div>
  )
}

export default App