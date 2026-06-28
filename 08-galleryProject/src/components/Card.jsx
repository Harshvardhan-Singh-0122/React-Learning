import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div index={props.idx}>
              <a
                target="_blank" 
                href={props.ele.url}>
                <img 
                  className='h-40 w-40 rounded object-cover'
                  src={props.ele.download_url} alt="" />
                <h3>{props.ele.author}</h3>
              </a>
          </div>
    </div>
  )
}

export default Card