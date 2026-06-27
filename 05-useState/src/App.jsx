import React, { useState } from 'react'
const App = () => {
  let [counter, setcounter] = useState(0);
  
  function clickedBtn(){
      setcounter(counter+1);
  }
  function resetBtn(){
      setcounter(0);
  }
  return (
    // <div className='flex justify-center items-center min-h-screen'>
      <div className='border-2 rounded-xl m-3 p-2 w-[180px] bg-gray-400 mx-auto'>
        <h4 className='rounded-3xl p-1 m-0.5 text-center bg-amber-200 text-xl font-medium'>counter is {counter}</h4>
        <div className='flex justify-between'>
          <button onClick={clickedBtn} className='p-2 m-2 bg-blue-300 text-white rounded-2xl w-[60px]'>count</button>
          <button onClick={()=>{
            resetBtn();
          }} className='p-2 m-2 bg-blue-300 text-white rounded-2xl w-[60px]'>reset</button>
        </div>
      </div>
    // </div>
  )
}

export default App