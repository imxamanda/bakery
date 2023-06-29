import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'
import axios from 'axios'
import Link from 'next/link'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const index = () => {
  const [trabalhe, setTrabalhe] = useState([])

const downloadPDF = () => {
  const docDefinition = generatePDF(trabalhe);
  pdfMake.createPdf(docDefinition).download("curriculos.pdf");
};

  useEffect(() => {
      getAll()
  }, [])
   
  function getAll(){
      axios.get('api/trabalhe').then(resultado => {
          setTrabalhe(resultado.data)
      })
  }

  function excluir(id){
      if (confirm('Deseja realmente excluir o registro?')){
      axios.delete('api/trabalhe/' + id )
      getAll()
  }
}

function generatePDF(trabalhe) {
  const docDefinition = {
    content: [
      { text: "Lista de Currículos", style: "header" },
      {
        table: {
          headerRows: 1,
          body: [
            ["#", "Nome", "Escolaridade", "E-mail", "Telefone", "Data de Nascimento", "Loja"],
            ...trabalhe.map((item) => [
              item.id,
              item.nome,
              item.escolaridade,
              item.email,
              item.telefone,
              item.dt_nascimento,
              item.loja
  
            ])
          ]
        }
      }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      }
    }
  };

 
  return docDefinition;
}



  return (
    <Navbar titulo="Envie seu Currículo">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Escolaridade</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Data de Nascimento</th>
                    <th>Loja</th> 
                </tr>
            </thead>
            <tbody>
              {trabalhe.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/trabalhe/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.escolaridade}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            <td>{item.dt_nascimento}</td>
                            <td>{item.loja}</td>
                            
                </tr>
                ))}
            </tbody>
        </Table>
        <Link href="/trabalhe/form" className='mb-2 btn btn-danger'>
        Cadastrar meu currículo!
        </Link>
        <Button onClick={downloadPDF}>Baixar PDF</Button>
    </Navbar>
  )
}

export default index