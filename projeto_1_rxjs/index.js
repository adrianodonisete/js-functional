const path = require('path');
const fn = require('./funcoes');
const _ = require('lodash');
const { toArray, map, filter } = require('rxjs/operators');


const caminho = path.join(__dirname, '..', 'dados', 'legendas');

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')', '!'
];

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.elementosIniciadosCom('legendas_18'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeApenasNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeApenasNumero(),
        toArray(),
        fn.agruparElementos(), 
        fn.nomeIgualTermo('jake'), 
        map(array => _.sortBy(array, el => -el.qtde)), 
    )
    .subscribe(console.log);