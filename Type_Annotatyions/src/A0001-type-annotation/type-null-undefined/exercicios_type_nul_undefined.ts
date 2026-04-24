//  EXERCÍCIO

let user: string | null = null;
user = '2'
if(user === null){
     console.log("Nenhum usuário logado");
}else{
     console.log("usuário ativo")
}

//  criar uma função chamada buscarProduto
// receber um id do tipo number
let identificacao: number | null = null;
identificacao = 5;
function buscarProduto(identificacao:number): string|null{
     if(identificacao === 1){
          return 'notebook';
     }else{
          return null;
     }
}
console.log(buscarProduto(2));
console.log(buscarProduto(1));

const produto = buscarProduto(1);
// const produto = buscarProduto();
if( produto === null){
     console.log('Produto não encontrado');
}else{
     console.log(produto.toUpperCase());
}

// Exercício 5
// let preco: number | undefined;

//  O que fazer:

// Criar uma condição
// Se preco tiver valor, mostrar no console
// Se não tiver, mostrar "Preço não definido"

let preco : number | undefined;
// preco = 1
if(preco === 1){
     console.log(preco)
}else{
     console.log("preço não definido")
}
//  Exercício 6

//  O que fazer:

// Criar uma função chamada obterDesconto
// Retornar:
// 10 se existir promoção
// undefined caso contrário
let desconto : boolean| undefined;
desconto = false;
function obterDesconto_2 (desconto:boolean){
     if(desconto === true){
          return 10
     }else{
          return undefined;
     }
}

// 🧪 🟣 NÍVEL 4 — Type Alias
// 👉 Exercício 7

// 📌 O que fazer:

// Criar um type chamado Usuario
// Ele deve ter:
// nome (string)
// idade (number)
// Criar um objeto usando esse tipo
// 👉 Exercício 8

// 📌 O que fazer:

// Criar um type chamado Status
// Permitir apenas os valores:
// "ativo"
// "inativo"
// Criar uma variável usando esse tipo e testar valores válidos e inválidos
// 🧪 🔴 NÍVEL 5 — Misturando tudo
// 👉 Exercício 9

// 📌 O que fazer:

// Criar um type chamado Produto com:
// nome (string)
// preco (number)
// Criar uma função buscarProduto
// Retornar:
// um objeto Produto se encontrar
// null se não encontrar
// 👉 Exercício 10
// let desconto: number | undefined;

// 📌 O que fazer:

// Criar uma lógica:
// Se existir desconto, aplicar no preço
// Se não existir, mostrar o preço normal
// 🧠 DESAFIO FINAL (🚀)

// 📌 O que fazer:

// Criar um type Usuario com nome
// Criar uma variável usuarioLogado que pode ser:
// um usuário
// ou null
// Criar uma lógica:
// Se for null, mostrar "Faça login"
// Se tiver usuário, mostrar "Bem-vindo, [nome]"