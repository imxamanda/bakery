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
import homeValidator from '@/validators/homeValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: {errors}, setValue } = useForm()

    function salvar(dados) {
        axios.post('/api/home', dados)
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
                    {...register('nome', homeValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="nota">
                    <Form.Label>Nota: </Form.Label>
                    <Form.Control 
                    isInvalid={errors.nota} 
                    type="text"
                     {...register('nota', homeValidator.nota)}
                      />
                    {
                        errors.nota &&
                        <p className='text-danger'>{errors.nota.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="avaliacao">
                    <Form.Label>Avaliação: </Form.Label>
                    <Form.Control 
                    isInvalid={errors.avaliacao}
                    type="text"
                     {...register('avaliacao', homeValidator.avaliacao)} />
                    {
                        errors.avaliacao &&
                        <p className='text-danger'>{errors.avaliacao.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control 
                    isInvalid={errors.email} 
                    type="text"
                     {...register('email', homeValidator.email)} />
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
                    {...register('telefone', homeValidator.telefone)}
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