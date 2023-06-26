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
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="tipo">
                    <Form.Label>Tipo: </Form.Label>
                    <Form.Select type="text" {...register('tipo')}>
                    <option value="bebida">Bebida</option>
                    <option value="panificacao">Panificação</option>
                    <option value="frios">Frios</option>
                    <option value="confeitaria">Confeitaria</option>
                    <option value="sanduiche">Sanduiche</option>
                    <option value="salgado">Salgado</option>
                    <option value="doce">Doce</option>
                    </Form.Select>

                </Form.Group>

                <Form.Group className="mb-3" controlId="descricao">
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control type="text" {...register('descricao')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="calorias">
                    <Form.Label>Calorias: </Form.Label>
                    <Form.Control type="text" {...register('calorias')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="dtcadastro">
                    <Form.Label>Data de cadastro: </Form.Label>
                    <Form.Control type="text" {...register('dtcadastro')} />
                </Form.Group>

            
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/funcionarios/cardapioca/cardapioca">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Navbar>
    )
}

export default form