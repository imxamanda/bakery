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
import trabalheValidator from '@/validators/trabalheValidator'


const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
   
    function salvar(dados) {
        axios.post('/api/trabalhe', dados)
        push('/trabalhe')
    }


    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }
    return (
        <Navbar titulo="Currículo">
            <Form className='text-white'>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        type="text"
                        {...register('nome', trabalheValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>     

                <Form.Group className="mb-3" controlId="escolaridade">
                    <Form.Label>Escolaridade: </Form.Label>
                    <Form.Control isInvalid={errors.escolaridade} type="text"
                        {...register('escolaridade')}
                       />
                    {
                        errors.escolaridade &&
                        <p className='text-danger'>{errors.escolaridade.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control 
                    isInvalid={errors.email} 
                    type="text"
                     {...register('email', trabalheValidator.email)} />
                    {
                        errors.email &&
                        <p className='text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control 
                    mask='(99) 99999-9999'
                    isInvalid={errors.telefone} type="text" 
                    {...register('telefone', trabalheValidator.telefone)}
                    onChange={handleChange} />
                    {
                        errors.telefone &&
                        <p className='text-danger'>{errors.telefone.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="dt_nascimento">
                    <Form.Label>Data de Nascimento: </Form.Label>
                    <Form.Control 
                    mask='99/99/9999'
                    isInvalid={errors.dt_nascimento} type="text" {...register('dt_nascimento', trabalheValidator.dt_nascimento)} />
                    {
                        errors.dt_nascimento &&
                        <p className='text-danger'>{errors.dt_nascimento.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="loja">
                    <Form.Label>Loja: </Form.Label>
                    <Form.Control isInvalid={errors.loja} type="text" {...register('loja')} />
                    {
                        errors.loja &&
                        <p className='text-danger'>{errors.loja.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/trabalhe">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Navbar>
    )
}

export default form