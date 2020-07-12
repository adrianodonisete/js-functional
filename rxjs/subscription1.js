
const { interval } = require('rxjs');

const gerarNumeros = interval(500);

setTimeout(() => {
    const sub2 = gerarNumeros.subscribe(console.log);
    setTimeout(() => sub2.unsubscribe(), 10000);
}, 3000);



