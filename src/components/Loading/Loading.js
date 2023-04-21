import React from 'react'
import './Loading.css'
import ReactLoading from 'react-loading';

const Loading = () => {
  let type = "bars";
  let color = "black";
  return (
    <div className='loading'>
        <ReactLoading type={type} color={color} height={100} width={100} />
    </div>
  )
}

export default Loading