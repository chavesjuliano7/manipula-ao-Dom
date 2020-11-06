const selecionaElemento = item => document.querySelector(item);
const selecionaElementoPai = itemFilho => itemFilho.parentElement;
const criaElemento = item => document.createElement(item);
const adicionaClasse = (elemento, item) => elemento.classList.add(item);
const adicionaClasseToggle = (elemento, item) => elemento.classList.toggle(item);
const deletaElemento = item => item.remove();
const limpaEntradaDeTexto = elemento => elemento.value = '';
const aplicaTexto = (elemento, texto) => elemento.textContent = texto.trim();
const ligaElementoFilhoNoPai = elementoPai =>
									elementoFilho =>
										elementoPai.appendChild(elementoFilho);

const temTarefa = (texto) => texto.value.trim().length > 0;




	export {
		selecionaElemento,
		selecionaElementoPai,
		criaElemento,
		adicionaClasse,
		adicionaClasseToggle,
		deletaElemento,
		limpaEntradaDeTexto,
		aplicaTexto,
		ligaElementoFilhoNoPai,
		temTarefa,
	}
