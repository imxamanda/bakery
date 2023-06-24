import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()
    
    useEffect(() => {
        if(query.id){
            axios.get('/api/home/' + query.id).then(resultado => {
                const home = resultado.data

                for(let atributo in home){
                    setValue(atributo, home[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/home/' + query.id, dados)
        push('/home')
    }

    return (
        <Pagina titulo="home">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="nota">
                    <Form.Label>Nota: </Form.Label>
                    <Form.Control type="text" {...register('nota')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="avaliacao">
                  formaluni  <Form.Label>Avaliação: </Form.Label>
                    <Form.Control type="text" {...register('avaliacao')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>email: </Form.Label>
                    <Form.Control type="text" {...register('email')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control type="text" {...register('telefone')} />
                </Form.Group>

              

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/home">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form