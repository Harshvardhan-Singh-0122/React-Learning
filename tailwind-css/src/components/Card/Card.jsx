import React from 'react'
import UpperSection from './UpperSection'
import MiddleSection from './MiddleSection'
import LowerSection from './LowerSection'


const Card = (props) => {
  return (
    <div className='p-1 m-5 w-3xs bg-gray-200 rounded-2xl'>
      <div className='bg-white rounded-2xl p-3'>
        <UpperSection index={props.index} Card={props.Card} />
        <MiddleSection index={props.index} Card={props.Card} />
        <LowerSection index={props.index} Card={props.Card} />
      </div>
    </div>
  )
}

export default Card