// Lista original de filmes
const filmes = ["O Senhor dos Anéis", "Harry Potter", "A Origem", "Vingadores", "Avatar"];

// Filtrando os filmes que serão recomendados
const filmesRecomendados = filmes.filter((filme) => 
    filme === "O Senhor dos Anéis" || filme === "A Origem"
);

// Exibindo a lista de filmes recomendados no console
console.log("Filmes recomendados aos amigos:");
console.log(filmesRecomendados);
