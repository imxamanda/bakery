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
        axios.put('/api/trabalhe/' + query.id, dados)
        push('/home')
    }

    return (
        <Navbar titulo="home">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <p>Cargo:</p>
                <Form.Select aria-label="Default select example" controlId="cargo">

                    <option>Selecione</option>
                    <option value="atendente">Atendente</option>
                    <option value="cozinha">Cozinheiro/a</option>
                    <option value="confeitaria">Confeiteiro/a</option>
                    <option value="caixa">Caixa</option>
                    <option value="limpeza">Limpeza</option>
                    <option value="financeiro">Padeiro/a</option>
                    <option value="financeiro">Financeiro</option>

                </Form.Select>
                <br />

                <Form.Group className="mb-3" controlId="escolaridade">
                  <Form.Label>Escolaridade: </Form.Label>
                    <Form.Control type="text" {...register('escolaridade')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>email: </Form.Label>
                    <Form.Control type="text" {...register('email')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control type="text" {...register('telefone')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="dt_nascimento">
                    <Form.Label>Data de Nascimento: </Form.Label>
                    <Form.Control type="text" {...register('dt_nascimento')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="loja">
                    <Form.Label>Loja: </Form.Label>
                    <Form.Control type="text" {...register('loja')} />
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