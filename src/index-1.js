import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/await
// assync fala para o JS que dentro dessa função tem código assíncrono que tem que ser resolvido antes que retorne o resultado da função
// await é adicionando onde temos que aguardar uma promessa retornar, algo ser processado, basicamente diz para o JS pega esses dados, resolve, depois que tiver os dados passa para variável texto
async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto));
  } catch (erro) {
    trataErro(erro)
  } finally {
    console.log(chalk.yellow('operação concluída'));
  }
  
}

// sempre que estamos falando de promises no javascript, estamos falando de código assíncrono

// Sincrono =  Códigos síncronos são executados em sequência, com uma instrução após a outra.

// Assíncrono =  não esperam a finalização de uma tarefa para iniciar a seguinte.

// promises com then()

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(trataErro)
// }

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');