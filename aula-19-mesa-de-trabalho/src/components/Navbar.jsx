import React, { useContext } from 'react'
import "../App.css"
import LanguageContext from '../context'

const Navbar = () => {
    const { language, handleChangeLA } = useContext(LanguageContext)
    const { text } = language

    return (
        <div className="navbar">
            {/* DICA: Deixe essas informações dinâmicas, utilize os valores capturados via contexto (veja 'text', na linha 8) */}
            <p>{ text.home }</p> 
            <p>{ text.current }: { language.id } </p>
            <button onClick={() => handleChangeLA()}>{ text.button }</button>
        </div>
    )
}

export default Navbar