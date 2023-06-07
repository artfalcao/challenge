import fetch from "node-fetch";
import fs from 'fs'; // Módulo para manipulação de arquivos (Node.js)

function consultarCEPs(ceps) {
  const promises = ceps.map(cep => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    return fetch(url)
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error(`Erro na consulta do CEP ${cep}:`, error);
        return null;
      });
  });

  return Promise.all(promises);
}

// Ler o conteúdo do arquivo JSON
fs.readFile('./ceps.json', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Analisar o conteúdo JSON
  const ceps = JSON.parse(data);
  const cepsLimpo = ceps.map(item => item.cep.replace('-', '')
  )

  
  
  consultarCEPs(cepsLimpo)
  .then(resultados => {
    const cepsAtualizados = resultados.map(item => {return {
      cep: item.cep,
      logradouro: item.logradouro,
      bairro: item.bairro,
      cidade: item.localidade,
      estado: item.uf
    }})
    console.log(cepsAtualizados)
    // Converter o array de objetos para uma string JSON
    const json = JSON.stringify(cepsAtualizados, null, 2);

    // Salvar a string JSON em um arquivo
    fs.writeFile('resposta.json', json, 'utf-8', (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log('Arquivo JSON salvo com sucesso!');
});
  })
  .catch(error => {
    console.error('Erro ao consultar os CEPs:', error);
  });

  
});


