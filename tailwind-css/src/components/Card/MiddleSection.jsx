import React from 'react'

const MiddleSection = (props) => {
  return (
    <div className='mb-3.5'>
      <div className='mb-3'>
          <h2 className='text-2xl'>{props.Card.name}</h2>
          <p className='text-gray-500'>Project Lead</p>
      </div>
      <div className='flex justify-between'>
        <div>
          <p className='text-[10px] text-gray-400 '>Department</p>
          <h5 className='text-[15px]'>{props.Card.Department}</h5>
        </div>
        <div>
          <p className='text-[10px] text-gray-400 '>Joining</p>
          <h5 className='text-[15px]'>{props.Card.joining}</h5>
        </div>
      </div>

    </div>
  )
}

export default MiddleSection