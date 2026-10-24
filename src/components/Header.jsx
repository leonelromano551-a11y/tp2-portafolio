import React from 'react'

const Header = ({nombre, profesion}) => {
  return (
    <header>
        <h1>{nombre}</h1>
        <h2>{profesion}</h2>
    </header>
  )
}

export default Header;
