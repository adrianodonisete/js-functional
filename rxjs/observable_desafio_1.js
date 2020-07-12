const { Observable, noop } = require('rxjs');

const entre = (min) => (max) => {
    return new Observable(subscriber => {
        if (max <= min) {
            subscriber.error('Erro!!! O Max deve ser menor que o Min.');
        }
        for (let i = min; i <= max; i++) {
            subscriber.next(i);
        }
        subscriber.complete();
    });
}

entre(7)(9)
    .subscribe({
        next(valor) {
            console.log(`Valor: ${valor}`);
        },
        complete() {
            console.log('Acabou!');
        },
        error(msg) {
            console.log(`Erro: ${msg}`);
        }
    });

entre(2)(5)
    .subscribe(
        valor => console.log(`Valor: ${valor}`),
        msg => console.log(`Erro: ${msg}`),
        () => console.log('Acabou!')
    );

    
entre(3)(6)
    .subscribe(
        valor => console.log(`Valor: ${valor}`),
        noop,
        noop
    );