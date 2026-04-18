// Crie um array de strings com nomes de linguagens de programação.
// const linguagens = ["java","go","cobol","javascript","typescript","python"];
// Declare um array de números usando a sintaxe Array<number>.
// function numerosPares(numero:Array<number>){
//      return numero;
// }
//Crie um array que só aceite booleanos.
//Crie um array de objetos Produto (id, nome, preco).
// function produto(produto: string [] & string[] & number[]){
//      return produto.
// }
// const produto : {
//      id: string;
//      nome: string;
//      preco: number;
// }

//Use o método filter em um array de números para retornar apenas os pares.
const randomNumeros = [1,43,12,34,12331,23,4154,63554,6775,8,65,3,45,67,23123,213,2652,345];
function numeroPares(numero:number[]){
    return numero.filter((n) => n % 2 === 0);
}
// numeroPares(randomNumeros);
console.log(numeroPares(randomNumeros));

//Crie um array que misture strings e números (Union types em array).
const itemRandom = ['122-34', 45, 'Joao victor', 56,'alice','0000-1-2','']
// Converta um array de strings para caixa alta usando map
