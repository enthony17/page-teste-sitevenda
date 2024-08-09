document.addEventListener('DOMContentLoaded', () => {
    const adicionarCarrinhoButton = document.getElementById('adicionarCarrinho');
    const verCarrinhoButton = document.getElementById('verCarrinho');
    const carrinhoDetalhes = document.getElementById('carrinhoDetalhes');
    const carrinhoQuantidade = document.getElementById('carrinhoQuantidade');
    const listaCarrinho = document.getElementById('listaCarrinho');
    const produtoNomeElem = document.getElementById('produtoNome');

    let carrinho = [];

    // Função para atualizar a visualização do carrinho
    function atualizarCarrinho() {
        carrinhoQuantidade.textContent = carrinho.length;
        listaCarrinho.innerHTML = '';
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listaCarrinho.appendChild(li);
        });
    }

    // Adiciona um produto ao carrinho quando o botão "Adicionar Carrinho" é clicado
    adicionarCarrinhoButton.addEventListener('click', () => {
        if (produtoNomeElem) {
            const produtoNome = produtoNomeElem.textContent.trim();
            if (produtoNome && !carrinho.includes(produtoNome)) {
                carrinho.push(produtoNome);
                atualizarCarrinho();
            }
        }
    });

    // Mostra ou esconde os detalhes do carrinho quando o botão "Ver Carrinho" é clicado
    verCarrinhoButton.addEventListener('click', () => {
        carrinhoDetalhes.classList.toggle('hidden');
    });
});
