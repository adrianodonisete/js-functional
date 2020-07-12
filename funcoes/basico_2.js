function bomDia() {
    console.log('Bom dia!!!!!!');
}

const boaTarde = function () {
    console.log('Boa tarde!!!!!!');
}


// 1) Passar uma função como param pra outra função
function executarQualquerCoisa(fn) {
    if(typeof fn === 'function') {
        fn();
    }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// 2) Retornar uma função a partir de uma outra função

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8));

const pot34 = potencia(3)(4);
console.log(pot34);


const myPow = base => exp => Math.pow(base, exp);
console.log(`myPow: ${myPow(2)(3)}`);


const somar = a => b => c => a + b + c;
console.log(somar(1)(2)(3));

const calcular = a => b => fn => fn(a, b);
console.log(calcular(2)(3)((a, b) => a + b));
console.log(calcular(2)(3)((a, b) => a - b));
console.log(calcular(2)(3)((a, b) => a * b));
console.log(calcular(2)(3)((a, b) => a / b));