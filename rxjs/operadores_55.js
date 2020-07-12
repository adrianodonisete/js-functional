const { of, Observable } = require('rxjs');


function terminadoCom(final) {
    return function (source) {
        return Observable.create(subscriber => {
            let temStr = [];
            source.subscribe({
                next(texto) {
                    if (texto.endsWith(final)) {
                        subscriber.next(texto);
                    };
                },
                complete() {
                    subscriber.complete();
                },
                error(e) {
                    subscriber.error(e);
                }
            });
        });
    }
}

of('Ana Silva', 'Maria Silva', 'Pedro Rocha')
    .pipe(
        terminadoCom('Silva')
    )
    .subscribe(console.log);
