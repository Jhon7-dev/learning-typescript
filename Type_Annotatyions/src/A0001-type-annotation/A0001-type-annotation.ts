/*eslint-disable */
let nome:  string = 'joao';
// o type annotation é esse trecho 
// nome : (TIPO DA VARIÁVEL) = ATRIBUTO;

let idade: number = 22;
let adulto: boolean = true;
let simbolo: symbol = Symbol ('qualquer-symbol');

// typos que são passados por referência arrays

let arrayDeNumeros: Array<number> = [1,23,123,43];
let arrayDeStrings: Array<string> = ['a', 'b', 'c', 'd'];
let arrayDeNomes:Array<string> = ['joao','victor','pedro'];

//Objetos

let pessoa:{nome:string, idade:number, adulto?:boolean} = {
     idade:22,
     nome:'Joao'
};
console.log(pessoa.nome);

// Funções 
// x: number é tipagem

function soma(x: number, y:number){
     return x + y;
}
const resut = soma(2,2);
const soma2:(x:number,y:number)=>number=(x,y)=>x+y;