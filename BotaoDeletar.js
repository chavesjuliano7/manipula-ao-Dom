import {
	selecionaElementoPai,
	criaElemento,
	adicionaClasse,
	deletaElemento,
	aplicaTexto,
} from './helpers.js'

const BotaoDeletaTarefa = () => {
	const botao = criaElemento("button");
	adicionaClasse(botao, "delete-button");
	aplicaTexto(botao, "deletar")
	botao.addEventListener('click', deletaTarefa);

	return botao
}

const deletaTarefa = evento => {
	const tarefaSelecionada = selecionaElementoPai(evento.target)
	deletaElemento(tarefaSelecionada)
}

export	default BotaoDeletaTarefa;
