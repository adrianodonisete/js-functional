
const nums = [1, 2, 3, 4, 5];
const dobro = n => n * 2;
console.log(nums.map(dobro));

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa'];
const primeiraLetra = texto => texto[0];
const letras = nomes.map(primeiraLetra);
console.log(nomes, letras);

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
];


const ret = carrinho.map(obj => obj.preco + obj.qtde);
console.log(ret);



const getNome = item => item.nome;
console.log(carrinho.map(getNome));

const getTotal = item => item.qtde * item.preco;
const totais = carrinho.map(getTotal);
console.log(totais);

Array.prototype.meuMap = function(fn) {
    const novoArray = [];
    for(let i = 0; i < this.length; i ++) {
        novoArray.push(fn(this[i], i, this));
    }
    // console.info(this);
    // for(let i in this) {
    //     console.info(`teste ${i}`);
    //     if (this[i] != undefined) { 
    //         novoArray.push(fn(this[i], i, this));
    //     }
    // }
    return novoArray;
}

const getNome2 = item => item.nome;
console.log(carrinho.meuMap(getNome2));

const getTotal2 = item => item.qtde * item.preco;
const totais2 = carrinho.meuMap(getTotal2);
console.log(totais2);
