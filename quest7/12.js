// Lista de filmes (pode ser obtida do exercício anterior ou criada manualmente)
const filmes = ["O Senhor dos Anéis", "Harry Potter", "A Origem", "Vingadores", "Avatar"];

// Exibindo os filmes com uma crítica engraçada usando for...of
console.log("Críticas engraçadas para os filmes informados:");
for (const filme of filmes) {
    console.log(`${filme} - Crítica: ${gerarCriticaEngracada(filme)}`);
}

// Função para gerar críticas engraçadas
function gerarCriticaEngracada(filme) {
    const criticas = [
        "Um épico inesquecível... mas quantas horas mesmo?",
        "Você é um bruxo, mas o mundo precisa de férias!",
        "Um filme que confunde a mente, ou seria um sonho?",
        "Heróis incríveis, mas o que aconteceu com o vilão mesmo?",
        "Um espetáculo visual, mas onde está o enredo?"
    ];
    // Escolhe uma crítica aleatória
    return criticas[Math.floor(Math.random() * criticas.length)];
}
