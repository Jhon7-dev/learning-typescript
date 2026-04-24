// Type alias é um jeito de eu dar nome para um tipo
//  em vez de ficar escrevendo isso toda hora
// string | number
// pode criar um "apelido"
// type TextoOuNumero = string | number
// exemplo:
type TextoOuNumero = string | number;
let valor : TextoOuNumero;
valor = 'João';
valor = 10;
// variável "valor" do tipo "TextoOuNumero"

type Nome = string;
let usuario : Nome = "joão"

// Exemplo com Objeto

type Pizzas = {
     nome:string;
     preco:number;
     
};
let pizza : Pizzas = {
     nome: 'pepperoni',
     preco: 130.0
};
console.log(pizza)

// união de tipes 
type Status = "sucesso"|"erro"|"carregando";
let estado: Status;
estado = "sucesso";
estado = "erro";
// estado = "outro";


type Idade = number;
type Pessoa = {
     nome:string;
     idade:Idade;
     salario: number;
     corPreferida?:string;
}

let p : Pessoa = {
     idade:30,
     nome:'joao',
     salario:100.000
};

//  Crie:type Resposta = "sim" | "não";
type Resposta = "sim"|"não";
let resp : Resposta;
resp = "sim";
resp = "não";
// resp = "f"; // reclama se for F

