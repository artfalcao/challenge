const fs = require('fs'); // Módulo para manipulação de arquivos (Node.js)
let arrDeMedicoes;

// Ler o conteúdo do arquivo de texto
fs.readFile('./problema3.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Dividir o conteúdo em linhas
  const linhas = data.split('\n');

  // Verificar se há pelo menos duas linhas
  if (linhas.length >= 2) {
    // Acessar a segunda linha
    const segundaLinha = linhas[1];

    // Separar os valores por vírgula
    const arrDeMedicoes = segundaLinha.split(',');

    // Exibir o array de valores
    //console.log(arrDeMedicoes);


    let maxRepeticoes = 0; // Variável para armazenar a maior quantidade de repetições seguidas
    let repeticoesAtuais = 0; // Variável para armazenar a quantidade de repetições seguidas atuais
    let valorAnterior = null; // Variável para armazenar o valor anterior sendo verificado
    let valorMaisRepetido = null;

    for (let i = 0; i < arrDeMedicoes.length; i++) {
      const valorAtual = arrDeMedicoes[i];

      if (valorAtual === valorAnterior) {
        repeticoesAtuais++; // Incrementa a quantidade de repetições seguidas
      } else {
        repeticoesAtuais = 1; // Reseta a quantidade de repetições seguidas
      }

      valorAnterior = valorAtual;

      if (repeticoesAtuais > maxRepeticoes) {
        maxRepeticoes = repeticoesAtuais; // Atualiza a maior quantidade de repetições seguidas
        valorMaisRepetido = valorAtual;
      }
    }

    console.log(`${maxRepeticoes} medições de ${valorMaisRepetido}`);

  }
});



