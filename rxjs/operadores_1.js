// Os dois tipos...

// 1. Operadores de Criação
const { from } = require('rxjs');

// 2. Operadores Encadeáveis (Pipeable Op.)
const { last, map } = require('rxjs/operators');


from([1, 2, 'ana', false, 'último'])
    .pipe(
        last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`)
    )
    .subscribe(function(valor) {
        console.log(valor);
    });

    

from([1, 2, 'ana', false, 'último'])
    .pipe(
        last(),
        map(v => v[2]),
        map(v => `A letra encontrada foi: ${v}`),
        map(tx => tx.toUpperCase())
    )
    .subscribe(console.log);