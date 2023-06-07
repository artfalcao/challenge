const fs = require('fs');
let arr = [];

// Ler o conteúdo do arquivo de texto
fs.readFile('./problema2.txt', 'utf-8', (err, data) => {
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
    arr = segundaLinha.split(',');
  }
});

function encontrarInteiroFaltante(array) {
  const numeros = new Set(array); // Criar um conjunto com os números do array

  for (let i = 1; i <= array.length + 1; i++) {
    if (!numeros.has(i)) {
      return i; // Retorna o primeiro número faltante encontrado
    }
  }

  return null; // Retorna null caso não encontre nenhum número faltante
}

const inteiroFaltante = encontrarInteiroFaltante(arr);


console.log('Nota Fiscal Faltante:', inteiroFaltante); // Output: 1

