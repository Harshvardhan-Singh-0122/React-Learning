import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from './components/Pagination';
import Card from './components/Card';
const App = () => {

  const [imgData, setImgData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(()=>{
    getData();
  },[index])

  const getData = async ()=>{
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`);

    setImgData(res.data);
  }

  let printImgData = <h3 className='text-gray-500 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if(imgData.length > 0){
    printImgData = imgData.map((ele, idx)=>{
            return <Card ele={ele} idx={idx}/>
          })
  }
  return (
    <div className='bg-black text-white h-screen overflow-auto p-1.9'>
        <div className='flex flex-wrap gap-2 h-[80%] mx-10 my-5'>
          {printImgData}
        </div>
        <div>
          <Pagination index={index} setIndex = {setIndex} setImgData={setImgData}/>
        </div>
    </div>
  )
}

export default App