import {
	selecionaElemento,
	selecionaElementoPai,
	criaElemento,
	adicionaClasse,
	adicionaClasseToggle,
	limpaEntradaDeTexto,
	aplicaTexto,
	ligaElementoFilhoNoPai,
	temTarefa,
} from './helpers.js';

import BotaoDeletaTarefa from './BotaoDeletar.js';
import BotaoTarefaConcluida from './BotaoTarefaConcluida.js';


const adicionaNovaTarefa = (evento) => {
	evento.preventDefault();

	const novaTarefaConteudo = selecionaElemento(`[data-form-input]`);
	if (!temTarefa(novaTarefaConteudo)) return

	const listaDeTarefa = selecionaElemento('[data-lista-task');
	const itemDaLista = criaElemento('li');
	const itemDaListaPagragrafo = criaElemento('p');

	adicionaClasse(itemDaLista, 'task');
	adicionaClasse(itemDaListaPagragrafo, 'content');


	aplicaTexto(itemDaListaPagragrafo, novaTarefaConteudo.value)

	ligaElementoFilhoNoPai(itemDaLista)(itemDaListaPagragrafo);
	ligaElementoFilhoNoPai(itemDaLista)(BotaoTarefaConcluida())
	ligaElementoFilhoNoPai(itemDaLista)(BotaoDeletaTarefa());
	ligaElementoFilhoNoPai(listaDeTarefa)(itemDaLista);

	limpaEntradaDeTexto(novaTarefaConteudo);
};

const botaoInsereNovaTarefa = selecionaElemento(`[data-form-button]`);
botaoInsereNovaTarefa.addEventListener('click', adicionaNovaTarefa);
