import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className='card'>
        <div className="upperSection" style={{backgroundColor : props.card?.color}}>
            <div className="upper">
                <h3>{props.card.date}</h3>
                <button> <Bookmark /> </button>
            </div>

            <div className="middle">
                <div className="middle-upper">
                    <div className='middle-left'>
                        <h3>{props.card.company}</h3>
                        <h2>{props.card.post}</h2>
                    </div>
                    <div>
                        <img src={props.card.img} alt="" />
                    </div>
                </div>
                <div className="tag">
                    {
                        props.card.tag.map((ele)=>{
                            return <h4>{ele}</h4>
                        })
                    }
                </div>
            </div>
        </div>

        <div className="lower">
            <div>
                <h4>{props.card.price}</h4>
                <p>{props.card.place}</p>
            </div>
            <div>
                <button>Details</button>
            </div>
        </div>
    </div>
  )
}

export default Card