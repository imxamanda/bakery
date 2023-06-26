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
import lojaValidator from '@/validators/lojaValidator'


const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
   
    function salvar(dados) {
        axios.post('/api/lojas', dados)
        push('/funcionarios/loja/novaloja')
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
                <Form.Group className="mb-3" controlId="cidade">
                    <Form.Label>Cidade: </Form.Label>
                    <Form.Control
                        isInvalid={errors.cidade}
                        type="text"
                        {...register('cidade', lojaValidator.cidade)} />
                    {
                        errors.cidade &&
                        <p className='text-danger'>{errors.cidade.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="estado">
                    <Form.Label>Estado: </Form.Label>
                    <Form.Control
                
                        isInvalid={errors.estado}
                        type="text"
                        {...register('estado', lojaValidator.estado)} />
                    {
                        errors.cidade &&
                        <p className='text-danger'>{errors.estado.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>Cep: </Form.Label>
                    <Form.Control 
                    mask='99999-999'
                    isInvalid={errors.telefone} type="text" 
                    {...register('cep', lojaValidator.cep)}
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