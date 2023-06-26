import Navbar from '@/components/Navbar'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Carousel, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'


const index = () => {
    const [home, setHome] = useState([])

    useEffect(() => {
        getAll()
    }, [])
     
    function getAll(){
        axios.get('api/home').then(resultado => {
            setHome(resultado.data)
        })
    }

    function excluir(id){
        if (confirm('Deseja realmente excluir o registro?')){
        axios.delete('api/home/' + id )
        getAll()
    }
}
  return (
    <Navbar>
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/bakery2.png"
            alt="Imagem 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/bakery1.png"
            alt="Imagem 2"
          />
        </Carousel.Item>
      </Carousel>
<br/>
<br/>
<br/>
        <h2 className='bg-danger text-light aligh text-center'>Feedbacks</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Nota</th>
                    <th>Avaliação</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
            {home.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/home/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.nota}</td>
                            <td>{item.avaliacao}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            
                </tr>
                ))}
            </tbody>
        </Table>
        <Link href="/home/form" className='mb-2 btn btn-danger'>
        Deixe seu feedback!
        </Link>
    </Navbar>
  )
}

export default index