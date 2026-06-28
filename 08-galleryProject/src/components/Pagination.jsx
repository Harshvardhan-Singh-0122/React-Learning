import React from 'react'

const Pagination = (props) => {
  return (
    <div className='flex justify-center items-center gap-2 my-5 '>
        <button 
          onClick={()=>{
            if(props.index>1){
              props.setIndex(props.index-1)
              props.setImgData([])
            }

          }}
          className='bg-amber-200 px-4 py-2 active:scale-95 rounded cursor-pointer'
        >Prev</button>
        <h3>page No. {props.index}</h3>
        <button
          onClick={()=>{
            props.setIndex(props.index+1)
            props.setImgData([])
          }}          
          className='bg-amber-200 px-4 py-2 active:scale-95 rounded cursor-pointer'
        >Next</button>
    </div>
  )
}

export default Pagination