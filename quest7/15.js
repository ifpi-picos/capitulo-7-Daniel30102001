// Lista de filmes
const filmes = ["O Senhor dos Anéis", "Harry Potter", "A Origem", "Vingadores", "Avatar"];

// Função para buscar um filme na lista
function buscarFilme(titulo) {
    // Verifica se o título está presente na lista
       if (filmes.includes(titulo)) {
              return `O filme "${titulo}" foi encontrado na lista.`;
       } else {
        return `O filme "${titulo}" não foi encontrado na lista.`;
    }
}

// Testando a função
const resultado1 = buscarFilme("Harry Potter");
console.log(resultado1);

const resultado2 = buscarFilme("Star Wars");
console.log(resultado2);
