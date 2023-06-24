import React from 'react'
import { Container } from 'react-bootstrap'
import Rodape from './Rodape'
import Cabecalho from './Cabecalho'
import Logo from './Logo'

const Navbar = (props) => {
  
  return (
    <>
    <Logo></Logo>
    <Cabecalho/>
    <div className='bg-danger text-white py-1 text-center mb-3'>
    <h1>{props.titulo}</h1>
    </div>
    <Container className='mb-5'>
    {props.children}
    </Container>
     <Rodape/>
    </>
  )
}

export default Navbar