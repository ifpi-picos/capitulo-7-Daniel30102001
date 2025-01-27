// Lista de filmes (pode ser obtida do exercício anterior ou criada manualmente)
const filmes = ["O Senhor dos Anéis", "Harry Potter", "A Origem", "Vingadores", "Avatar"];

// Exibindo os filmes com uma crítica engraçada usando forEach
console.log("Críticas engraçadas para os filmes informados:");
filmes.forEach((filme, index) => {
    console.log(`${index + 1}. ${filme} - Crítica: ${gerarCriticaEngracada(filme)}`);
});

// Função para gerar críticas engraçadas
function gerarCriticaEngracada(filme) {
    const criticas = [
        "Um clássico, mas já pensou em ver outra coisa?",
        "Deixe seu hobbit favorito te guiar!",
        "Prepare-se para uma viagem de cabeça... literalmente!",
        "Quem precisa de super-heróis quando você tem pipoca?",
        "Visualmente incrível, mas tente lembrar da trama depois!"
    ];
    // Escolhe uma crítica aleatória
    return criticas[Math.floor(Math.random() * criticas.length)];
}
