const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

const readFile = caminho => {
    return new Promise(resolve => {
        const content = fs.readFileSync(caminho);
        resolve(content);
    });
}

readFile(caminho)
    .then(conteudo => conteudo.toString())
    .then(console.log);
