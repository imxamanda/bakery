import Navbar from '@/components/Navbar'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'


const cardapioca = () => {
  const [lojas, setLojas] = useState([])

  useEffect(() => {
      getAll()
  }, [])

  function getAll() {
      axios.get('/api/lojas').then(resultado => {
        setLojas(resultado.data);
      })
  }

  function excluir(id) {
      if (confirm('Deseja realmente excluir o registro?')) {
          axios.delete('/api/lojas/' + id)
          getAll()
      }
  }

  return (
    <Navbar titulo="Cadastro de Novas Lojas!">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>CEP</th>
                </tr>
            </thead>
            <tbody>
                    {lojas.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/funcionarios/loja/novaloja' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.cidade}</td>
                            <td>{item.estado}</td>
                            <td>{item.cep}</td>
                        
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Link href="/funcionarios/loja/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>
    </Navbar>
  )
}

export default cardapioca