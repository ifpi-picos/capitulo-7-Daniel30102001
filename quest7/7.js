function exibirPrimeiroNome(nomeCompleto) {
       // Removendo espaços extras e dividindo o nome em partes
       const partes = nomeCompleto.trim().split(" ");
       
       // Verificando se o nome tem pelo menos uma parte
       if (partes.length === 0 || partes[0] === "") {
           console.log("Por favor, forneça um nome válido.");
           return;
       }
       
       // Obtendo o primeiro nome
       const primeiroNome = partes[0];
       
       // Imprimindo o primeiro nome
       console.log(`Primeiro nome: ${primeiroNome}`);
   }
   
   // Testando a função
   exibirPrimeiroNome("Ana Beatriz Silva");
   