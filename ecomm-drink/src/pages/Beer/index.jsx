import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const Beer = () => {
    const [beer, setBeer] = useState([])
    const { id } = useParams()

    const getBeer = async () => {

        const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
        const data = await res.json()
        setBeer(data[0])
    }

    useEffect(() => {
        getBeer()
    }, [])

    return (
        <div className='beer'>
            {
                beer.image_url ?
                    <div className='card'>
                        <h2>Cerveja número: {id}</h2>

                        <img src={beer.image_url} alt="beer-detail" />
                        <p>{beer.tagline}</p>
                        <p>{beer.description}</p>
                        <p>{beer.brewers_tips} </p>
                        <button><Link to='/'>Voltar</Link></button>
                    </div>

                    :
                    <p>Loading</p>
            }
        </div>
    )
}

export default Beer