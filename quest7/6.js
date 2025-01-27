function exibirPrimeiroEUltimoNome(nomeCompleto) {
       // Dividindo o nome em partes
       const partes = nomeCompleto.trim().split(" ");
       
       // Verificando se o nome tem pelo menos uma parte
       if (partes.length < 2) {
           console.log("Por favor, forneça um nome completo com pelo menos dois nomes.");
           return;
       }
       
       // Obtendo o primeiro e o último nome
       const primeiroNome = partes[0];
       const ultimoNome = partes[partes.length - 1];
       
       // Imprimindo o resultado
       console.log(`Primeiro nome: ${primeiroNome}`);
       console.log(`Último nome: ${ultimoNome}`);
   }
   
   // Testando a função
   exibirPrimeiroEUltimoNome("Maria Clara Oliveira");
   