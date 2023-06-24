import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Carousel, Table } from 'react-bootstrap'



const index = () => {
    const [home, setHome] = useState([])

    useEffect(() => {
        getAll()
    }, [])
     
    function getAll(){
        axios.get('').then(resultado => {
            setHome(resultado.data)
        })
    }

    function excluir(id){
        if (confirm('Deseja realmente excluir o registro?')){
        axios.delete('' + id )
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
        <h2 className='text-danger aligh text-center'>Feedbacks</h2>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    <th>Nome</th>
                    <th>Nota</th>
                    <th>Avaliação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
        <p>Deixe seu feedback!</p>
    </Navbar>
  )
}

export default index