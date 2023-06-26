import Navbar from '@/components/Navbar'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import cardapioca from '../funcionarios/cardapioca/cardapioca'

useEffect(() => {
  getAll()
}, [])

function getAll() {
  axios.get('/api/funcionários/cardapioca/cardapioca').then(resultado => {
      setCursos(resultado.data)
  })
}

const index = () => {
  return (
    <Navbar titulo='Cardápio'>
      <Col className="mb-4">
        <Card
         nome={item.nome}
         tipo={item.tipo}
         descricao={item.descricao}
         calorias={item.calorias}
         dtcadastro={item.dtcadastro}
        />
      </Col>

        
    </Navbar>
  )
}

export default index