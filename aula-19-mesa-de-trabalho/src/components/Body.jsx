import React, { useContext } from 'react'
import LanguageContext from '../context'

const Body = () => {
    const { language, handleChangeLA } = useContext(LanguageContext)
    const { text } = language
    
    return (
        <div>
            {/* DICA: Utilize os valores capturados via contexto */}
            <h1>{text.title}</h1>
            <p>{ text.description}</p>
        </div>
    )
}

export default Body