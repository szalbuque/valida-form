import { valida } from './validacao.js'

// executar a função 'valida' para todos os inputs //

// a constante 'inputs' vai conter todos os inputs do HTML //
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    // para cada input, adiciona um evento que executa a função valida assim que o campo perde o foco //
	input.addEventListener('blur', (evento) => {
		valida(evento.target);
	})
})