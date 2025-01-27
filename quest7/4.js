// Criando o objeto produto
const produto = {
       nome: "Notebook",
       preco: 2500.00,
       quantidade: 10
};

// Calculando o valor total do estoque
const valorTotalEstoque = produto.preco * produto.quantidade;

// Imprimindo o valor total do estoque
console.log(`O valor total do estoque é: R$ ${valorTotalEstoque.toFixed(2)}`);
