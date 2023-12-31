import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import { mask } from 'remask'
import Navbar from '@/components/Navbar'
import cadastroValidator from '@/validators/cadastroValidator'


const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
   
    function salvar(dados) {
        axios.post('/api/cardapioca', dados)
        push('/funcionarios/cardapioca/cardapioca')
    }


    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }
    return (
        <Navbar titulo="Cadastre um Novo Item">
            <Form className='text-white'>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        type="text"
                        {...register('nome', cadastroValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>
                   

                <Form.Group className="mb-3" controlId="descricao">
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control isInvalid={errors.descricao} type="text"
                        {...register('descricao', cadastroValidator.descricao)}
                       />
                    {
                        errors.descricao &&
                        <p className='text-danger'>{errors.descricao.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="calorias">
                    <Form.Label>Calorias: </Form.Label>
                    <Form.Control isInvalid={errors.calorias} type="text"
                       {...register('calorias', cadastroValidator.calorias)} />
                    {
                        errors.avaliacao &&
                        <p className='text-danger'>{errors.calorias.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="dtcadastro">
                    <Form.Label>Data do Cadastro: </Form.Label>
                    <Form.Control isInvalid={errors.dtcadastro} type="text" {...register('dtcadastro', cadastroValidator.dtcadastro)} />
                    {
                        errors.dtcadastro &&
                        <p className='text-danger'>{errors.dtcadastro.message}</p>
                    }
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