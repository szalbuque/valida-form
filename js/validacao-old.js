//captura a data de nascimento digitada pelo usuário //
const dataNascimento = document.querySelector('#nascimento');
console.log("data digitada: ",dataNascimento);

// chama a função de validação quando o campo de data de nascimento perde o foco //
dataNascimento.addEventListener('blur', (evento) => {
    validaDataNascimento(evento.target)
})

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value);
    let mensagem ='';

    if (!maiorQue18(dataRecebida)){
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }
    input.setCustomValidity(mensagem);
}

function maiorQue18(data){
    // a declaração new Date() captura a data de hoje //
    const dataAtual = new Date();
    // dataMais18 conterá a data recebida somada a 18 anos //
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    // retorna true se a data recebida somada a 18 anos for igual ou menor que a dataAtual //
    return dataMais18 <= dataAtual;
}