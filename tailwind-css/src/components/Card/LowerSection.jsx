import React from 'react'

const LowerSection = (props) => {
  return (
    <div>
      <p className='text-[13px] text-gray-400'>{props.Card.email}</p>
      <p className='text-[13px] text-gray-400'>{props.Card.phone}</p>
    </div>
  )
}

export default LowerSection