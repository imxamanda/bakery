import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/cardapio">Cardápio</Nav.Link>
            <Nav.Link href="/lojas">Lojas</Nav.Link>
           

            <NavDropdown title="Funcionários" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cadastrar no Cardápio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cadastrar Nova Loja</NavDropdown.Item>
             
            </NavDropdown>

            <Nav.Link href="/trabalhe">| Trabalhe Conosvo</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    </>


  )
}

export default Cabecalho