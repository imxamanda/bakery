import Navbar from '@/components/Navbar'
import React from 'react'
import { Table } from 'react-bootstrap'

const index = () => {
  return (
    <Navbar titulo="Envie seu Currículo">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Cargo</th>
                    <th>Escolaridade</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th>Loja</th>
                </tr>
            </thead>
            </Table>
    </Navbar>
  )
}

export default index