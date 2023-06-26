import Navbar from '@/components/Navbar'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const cardapioca = () => {
  const [cardapioca, setCardapioca] = useState([])

  useEffect(() => {
      getAll()
  }, [])

  function getAll() {
      axios.get('/api/cardapioca').then(resultado => {
        setCardapioca(resultado.data);
      })
  }

  function excluir(id) {
      if (confirm('Deseja realmente excluir o registro?')) {
          axios.delete('/api/cardapioca/' + id)
          getAll()
      }
  }

  return (
    <Navbar titulo="Cadastro de Novos Itens!">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Descrição</th>
                    <th>Calorias</th>
                    <th>Data de Cadastro</th>
                    <th>Imagem</th>
                </tr>
            </thead>
            <tbody>
                    {cardapioca.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/funcionarios/cardapioca/cardapioca' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.tipo}</td>
                            <td>{item.descricao}</td>
                            <td>{item.calorias}</td>
                            <td>{item.dtcadastro}</td>
                            <td>{item.formFile}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Link href="/funcionarios/cardapioca/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>
    </Navbar>
  )
}

export default cardapioca