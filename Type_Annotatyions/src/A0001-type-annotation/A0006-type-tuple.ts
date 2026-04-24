// tuplas são arrays de posições fixas

const dadosCliente1:[number,string] = [1,'joao'];
const dadosCliente2:[number,string,string] = [1,'João','Mateus'];
const dadosCliente3:[number,string,string?] = [1,'João','Mateus'];
// no índice 1 eu tenho um number e no índice 2 eu tenho uma string

dadosCliente1[0]=100;
dadosCliente1[1]='pedro';
// como eu alterei acima no terminal vai sair 
//  [ 100, 'pedro' ]
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

const pizzas: (string) [] = ['pepperoni','margheritta','4 queijos',' portuguesa']
const ingredientes: (string)[] = ['cebola','queijo','molho de tomate','cogumelos']
console.log(pizzas)

// const nome1 = pizzas[0];
// const nome2 = ingredientes[2];

const [nome_1,ingredientes_1] = ingredientes;
console.log(ingredientes)

// sintaxe básica da tupla é esta

const produto1: (string | number)[] = ['Notebook', 2500];
const produto2: [string, number] = ['Notebook', 2500];

const nome1 = produto1[0]; // ou entra string ou number ! string | number
const nome2 = produto2[0]; // sempre o [0] será string e o '1 number

// const [nome, preco] = produto2;
console.log(produto2)


// exercício p fixar
const carrinho_compra: [string,number] [] =  [
     ['tomate',2400],
     ['alho',300],
     ['cenoura',300]
]; 
console.log('Produto: ' + carrinho_compra[0][0] + ' R$ ' + carrinho_compra[0][1])
console.log('Produto: ' + carrinho_compra[1][0] + ' R$ ' + carrinho_compra[1][1])
console.log('Produto: ' + carrinho_compra[2][0] + ' R$ ' + carrinho_compra[2][1])

const total = carrinho_compra[0][1] + carrinho_compra[1][1] + carrinho_compra[2][1];
console.log('O total deu R$' + total + ' Reais')
function mostrarCarrinho():void{
     console.log('Produtos: ')
     console.log(carrinho_compra[0][0] +", "+" "+ carrinho_compra[1][0] + ", " + carrinho_compra[2][0]) ;
}
console.log(mostrarCarrinho())
carrinho_compra.push(['alface',1230]);
console.log(carrinho_compra);