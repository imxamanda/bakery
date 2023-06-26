const homeValidator = {
    nome: {
        required: 'Campo Obrigatório',
    },
    nota: {
        required: 'Campo Obrigatório',
        max: {
            value: 5, 
            message: 'A nota máxima é 5'
        }
    },
    avaliacao: {
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

export default homeValidator