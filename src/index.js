import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));

  return resultados.length !== 0 ? resultados : 'não há links no arquivo';
  /*   Abaixo de const capturas = [...texto.matchAll(regex)]; vamos usar o método map dentro de uma nova constante resultados, que serve para percorrer um array e retornar outro array com o resultado que queremos. Vamos informar o objeto que queremos montar após uma arrow function.

  Quando temos uma estrutura em que precisamos acessar um array e seu índice, como a captura no índice 1, que passamos por colchetes, e quando queremos utilizar esse valor como chave de um objeto, precisamos envolvê-lo em colchetes.

  Para que o JavaScript perceba que as chaves que abrimos não são chaves de função, mas de um objeto que estamos criando, englobamos todo o objeto criado por parênteses. */
}

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro)
  } finally {
    console.log(chalk.yellow('operação concluída'));
  }
  
}

export default pegaArquivo;

