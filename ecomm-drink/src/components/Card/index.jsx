import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ data }) => {

  const navigate  = useNavigate()
  
  return (
   
    <div className='card' onClick={() => navigate(`/beer/${data.id}`)}> 
        <h3>{data.name}</h3>
        <p>{data.tagline}</p>
        <img src={data.image_url} alt="beer-detail" />
    </div>
  )
}

export default Card