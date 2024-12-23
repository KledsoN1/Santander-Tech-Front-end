//const fs = require('fs');     

//console.log('Indo ler o arquivo')
                 
// Lê o arquivo e processa o conteúdo
//fs.readFile('WEBJS/arquivo.txt', 'utf8', (erro, conteudoDoArquivo) => {
  //  if// (erro) {
       // console.error('Erro ao ler o arquivo:', erro.message);
     //   return;
   // } else{
    //    console.log('Conteúdo do arquivo:', conteudoDoArquivo);
  //  }
    
//});

//console.log('Li o arquivo')
 // Ex 02 

 //setTimeout (() => {
   // console.log('Isso aqui vai aparecer em 2 segundos')
 //}, 2* 1000)

 //Promessas  

 //const promessa = new Promise((resolve, reject) => {
   // const fs = require('fs');

   // console.log('Indo ler o arquivo');

    // Lê o arquivo e processa o conteúdo
   // fs.readFile('WEBJS/arquivo.txt', 'utf8', (erro, conteudoDoArquivo) => {
     //  if (erro) {
        //    reject(`Erro ao ler o arquivo: ${erro.message}`); 
     //   } else {
       //    resolve(conteudoDoArquivo); // Retorna apenas o conteúdo do arquivo
      //  }
   //});
//});

// Tratando a promessa
//promessa
   // .then((conteudo) => {
       // console.log('Deu certo :D', conteudo); // Exibe o conteúdo do arquivo
    //})
    //.catch((erro) => {
       // console.error('Deu errado D:', erro); // Exibe o erro
    //}).finally(() => {
       // console.log('Finalizou')
   // })

   const fs = require('fs');

function lerArquivosPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile('WEBJS/arquivo.txt', 'utf8', (erro, conteudoDoArquivo) => {
            if (erro) {
                reject(`Erro ao ler o arquivo: ${erro.message}`); // Rejeita a promessa em caso de erro
            } else {
                resolve(conteudoDoArquivo); // Resolve a promessa com o conteúdo do arquivo
            }
        });
    });
}

async function leituraDeDados() {
    console.log('Isso é executado antes de ser resolvido');

    try {
        const conteudo = await lerArquivosPromise(); // Aguarda a resolução da promessa
        console.log('Conteúdo do arquivo:', conteudo); // Exibe o conteúdo do arquivo
    } catch (erro) {
        console.error('Erro durante a leitura:', erro); // Trata o erro caso a promessa seja rejeitada
    }

    console.log('Isso aparece depois da promise');
}

// Executa a função assíncrona
leituraDeDados();

