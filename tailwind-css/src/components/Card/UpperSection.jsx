import React from "react";

const UpperSection = (props) => {
  return (
    <div className=' flex justify-between p-2 '>
        <div>
            <img
                className='size-10 rounded-full '
                src={props.Card.img}
                alt=""
            />
        </div>
        <div>
            <p className="text-[10px] pl-2 pr-2 pt-0.5 pb-0.5 color-white text-blue-500 rounded-4xl bg-blue-300">
                {props.Card.status}
            </p>
        </div>
    </div>
  );
};

export default UpperSection;
