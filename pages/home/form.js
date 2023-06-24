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

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: {errors}, setValue } = useForm()

    function salvar(dados) {
        const homes = JSON.parse(window.localStorage.getItem('home')) || []
        homes.push(dados)
        window.localStorage.setItem('home', JSON.stringify(homes))
        push('/home')
    }

    function handleChange(event){
        const name = event.target.name
        const valor = event.target.value
        const mascara =event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }
    return (
        <Navbar titulo="Feedbacks">
            <Form className='text-white'>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control 
                    isInvalid={errors.nome} 
                    type="text" 
                    {...register('nome')} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>Nota: </Form.Label>
                    <Form.Control 
                    mask='999.999.999-99'
                    isInvalid={errors.cpf} type="text"
                     {...register('cpf')}
                     onChange={handleChange} />
                    {
                        errors.cpf &&
                        <p className='text-danger'>{errors.cpf.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Avaliação: </Form.Label>
                    <Form.Control isInvalid={errors.matricula} type="text"
                     {...register('matricula')} />
                    {
                        errors.matricula &&
                        <p className='text-danger'>{errors.matricula.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control isInvalid={errors.email} type="text" {...register('email')} />
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
                    {...register('telefone')}
                    onChange={handleChange} />
                    {
                        errors.telefone &&
                        <p className='text-danger'>{errors.telefone.message}</p>
                    }
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
        </Navbar>
    )
}

export default form