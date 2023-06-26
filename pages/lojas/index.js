import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import cardapioca from '../funcionarios/cardapioca/cardapioca'
import axios from 'axios'

const index = () => {
  const [lojas, setLojas] = useState([])

useEffect(() => {
  getAll()
}, [])

function getAll() {
  axios.get('/api/lojas').then(resultado => {
      setLojas(resultado.data)
  })
}

  return (
    <Navbar titulo='Lojas'>
       <Row md={4}>
                {lojas.map(item => (
                    <Col key={item.id}>
                        <Card className="mb-3">
                            <Card.Img variant="top"/>
                            <Card.Body>
                                <Card.Title>{item.cidade}</Card.Title>
                                <p>Estado: {item.estado}</p>
                                <p>Cep: {item.cep}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
    </Navbar>
  )
}


export default index