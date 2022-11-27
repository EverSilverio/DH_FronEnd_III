import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <>
         <nav>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contato</Link>
         </nav>
         <h1><a href="/">Mais do que bebidas, vamos celebrar o encontro!!</a></h1>
      </>
   )
}

export default Navbar