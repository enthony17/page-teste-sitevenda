document.addEventListener('DOMContentLoaded', () => {
    const adicionarCarrinhoButton = document.getElementById('adicionarCarrinho');
    const verCarrinhoButton = document.getElementById('verCarrinho');
    const carrinhoDetalhes = document.getElementById('carrinhoDetalhes');
    const carrinhoQuantidade = document.getElementById('carrinhoQuantidade');
    const listaCarrinho = document.getElementById('listaCarrinho');

    let carrinho = [];

    function atualizarCarrinho() {
        carrinhoQuantidade.textContent = carrinho.length;
        listaCarrinho.innerHTML = '';
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listaCarrinho.appendChild(li);
        });
    }

    adicionarCarrinhoButton.addEventListener('click', () => {
        const produtoNome = document.getElementById('produtoNome').textContent;
        carrinho.push(produtoNome);
        atualizarCarrinho();
    });

    verCarrinhoButton.addEventListener('click', () => {
        carrinhoDetalhes.classList.toggle('hidden');
    });
});
