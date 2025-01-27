// Criando o objeto aluno
const aluno = {
       nome: "Daniel Silva",
       idade: 21,
       curso: "Ciência da Computação",
       notas: [8.5, 7.0, 9.2, 6.8]
   };
   
   // Imprimindo os dados do aluno
   console.log("Dados do Aluno:");
   console.log(`Nome: ${aluno.nome}`);
   console.log(`Idade: ${aluno.idade}`);
   console.log(`Curso: ${aluno.curso}`);
   console.log(`Notas: ${aluno.notas.join(", ")}`);
   