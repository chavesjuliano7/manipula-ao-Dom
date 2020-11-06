import {
	selecionaElementoPai,
	criaElemento,
	adicionaClasse,
	adicionaClasseToggle,
	aplicaTexto,
} from './helpers.js'

const BotaoTarefaConcluida = () => {

	const botao = criaElemento("button");
	adicionaClasse(botao, "done");
	aplicaTexto(botao, "concluido")
	botao.addEventListener('click', tarefaConcluida);

	return botao;
}

const tarefaConcluida = evento => {
	const tarefaSelecionada = selecionaElementoPai(evento.target);
	adicionaClasseToggle(tarefaSelecionada, "done");
};

export default BotaoTarefaConcluida;
