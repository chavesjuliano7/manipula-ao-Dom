(() => {
	//inico do IIFE

	const temCaracteres = (texto) => texto.value.trim().length > 0

	const elementoSelecionado = (elemento) => document.querySelector(elemento);

	const botaoCrieNovaTarefa = elementoSelecionado("[data-form-button]")


	const BotaoConcluir = (nomeDoBotao) => {
		return `<button class="check-button" data-button-task>
				${nomeDoBotao}
			</button>`
	}

	const TemplateTask = (conteudo) => {
		return `<li class="task" data-task >
				<p class="content" data-list-content>
					${conteudo}
				</p>
			</li>`
	}



	const tarefaCriada = (evento) => {
		evento.preventDefault();

		const recebaNovaTarefa = elementoSelecionado('[data-form-input]');

		const listaDeTarefa = elementoSelecionado('[data-lista-task]');
		listaDeTarefa.insertAdjacentHTML('afterbegin', TemplateTask(recebaNovaTarefa.value))
		recebaNovaTarefa.value = "";

		const liTask = elementoSelecionado("[data-task]")
		liTask.insertAdjacentHTML('beforeend', BotaoConcluir("Concluir"))
		// liTask.insertAdjacentHTML('beforeend', BotaoDeletar("Deletar"))
		BotaoDeletar('deletar', liTask)


		const botaoConcluir = elementoSelecionado('[data-button-task]')
		botaoConcluir.addEventListener('click', (evento) => {
			tarefaConcluida.classList.toggle('done')
		})
	}

	const BotaoDeletar = (nomeDoBotao, elementoHTML) => {
		const templateBotao = `<button class="" data-button-${nomeDoBotao}>${nomeDoBotao}</button>`;
		elementoHTML.insertAdjacentHTML('beforeend', templateBotao);
		const botao = elementoSelecionado(`[data-button-${nomeDoBotao}]`);

		return botao.addEventListener('click',
			(evento) => evento.target.parentElement.remove());

	}



	botaoCrieNovaTarefa.addEventListener('click', tarefaCriada)


	//fim do IIFE
})()
