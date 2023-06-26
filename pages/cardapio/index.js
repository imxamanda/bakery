import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import cardapioca from '../funcionarios/cardapioca/cardapioca'
import axios from 'axios'

const index = () => {
  const [cardapioca, setCardapioca] = useState([])

useEffect(() => {
  getAll()
}, [])

function getAll() {
  axios.get('/api/cardapioca').then(resultado => {
      setCardapioca(resultado.data)
  })
}

  return (
    <Navbar titulo='Cardápio'>
       <Row md={4}>
                {cardapioca.map(item => (
                    <Col key={item.id}>
                        <Card className="mb-3">
                            <Card.Img variant="top"/>
                            <Card.Body>
                                <Card.Title>{item.nome}</Card.Title>
                                <p>Tipo: {item.tipo}</p>
                                <p>Descrição: {item.descricao}</p>
                                <p>Calorias: {item.calorias}</p>
                                <p>Data de Cadastro: {item.dtcadastro}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
    </Navbar>
  )
}


export default index