const lojaValidator = {
    cidade: {
        required: 'Campo Obrigatório',
    },
    estado: {
        required: 'Campo Obrigatório',
        
    },
    cep: {
        required: 'Campo Obrigatório',
        max: {
            value: 8, 
            message: 'O máximo é 8'
        }
    }


}

export default lojaValidator