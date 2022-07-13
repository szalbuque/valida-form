
// função genérica para validar todos os tipos de inputs//
export function valida(input){
	// para acessar os data atributes de um elemento, precisamos usar o dataset //
	const tipoDeInput = input.dataset.tipo;
	
	// testar se este tipo de input está dentro de validadores //
	if(validadores[tipoDeInput]) {
		// chama a função relativa a este tipo de input //
		validadores[tipoDeInput](input);
	}
}

// objeto que vai conter os diversos tipos de validações //
const validadores = {
    // quando o tipo de input for dataNascimento, chama a função validaDataNascimento //
	dataNascimento: input => validaDataNascimento(input)
	}

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value);
    let mensagem ='';
   alert(dataRecebida);
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