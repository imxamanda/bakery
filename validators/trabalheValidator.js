const trabalheValidator = {
    nome: {
        required: 'Campo Obrigatório',
    },
    email: {
        required: 'Campo Obrigatório',
        max: {
            value: 5, 
            message: 'A nota máxima é 5'
        }
    },
    dt_nascimento: {
        required: 'Campo Obrigatório'
    },
    loja: {
        required: 'Campo Obrigatório'
    },
    cargo: {
        required: 'Campo Obrigatório'
    },
    escolaridade: {
        required: 'Campo Obrigatório'
    },
    email: {
        required: 'Campo Obrigatório',
        
    },
    telefone: {
        required: 'Campo Obrigatório',
        max: {
            value: 11, 
            message: 'O máximo é 11'
        }
    }


}

export default trabalheValidator