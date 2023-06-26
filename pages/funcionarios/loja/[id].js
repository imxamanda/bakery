import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import Navbar from '@/components/Navbar'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (query.id) {
            axios.get('/api/cardapioca/' + query.id).then(resultado => {
                const home = resultado.data

                for (let atributo in home) {
                    setValue(atributo, home[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/cardapioca/' + query.id, dados)
        push('/funcionarios/cardapioca')
    }

    return (
        <Navbar titulo="Cadastre um Novo Item">
            <Form>
                <Form.Group className="mb-3" controlId="cidade">
                    <Form.Label>Cidade: </Form.Label>
                    <Form.Control type="text" {...register('cidade')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="estado">
                    <Form.Label>Estado: </Form.Label>
                    <Form.Control type="text" {...register('estado')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>Cep: </Form.Label>
                    <Form.Control type="text" {...register('cep')} />
                </Form.Group>


            
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/funcionarios/loja/novaloja">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Navbar>
    )
}

export default form