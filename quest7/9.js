// Criando um array vazio para armazenar os filmes
const filmes = [];

// Solicitando ao usuário que informe os nomes dos filmes
for (let i = 1; i <= 5; i++) {
    const filme = prompt(`Informe o nome do filme ${i}:`);
    filmes.push(filme);
}

// Exibindo os filmes informados no console
console.log("Os filmes informados foram:");
filmes.forEach((filme, index) => {
    console.log(`${index + 1}. ${filme}`);
});
