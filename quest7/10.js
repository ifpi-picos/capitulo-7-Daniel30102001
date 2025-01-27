// Lista de filmes (pode ser obtida do exercício anterior ou criada manualmente)
const filmes = ["O Senhor dos Anéis", "Harry Potter", "A Origem", "Vingadores", "Avatar"];

// Exibindo os filmes no console usando um loop for tradicional
console.log("Os filmes informados foram:");
for (let i = 0; i < filmes.length; i++) {
    console.log(`${i + 1}. ${filmes[i]}`);
}
