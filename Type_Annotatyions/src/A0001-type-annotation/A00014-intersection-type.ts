type TemNome = {nome:string};
type TemSobrenome = {sobrenome: string};
type TemIdade = {idade: Number};
type P = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
// mode module
// export {pessoa};


type Produto = {
     preco:number;
};
type Carro = {
     rodas:number;
     portas:number;
};

// a intersecção feita
function ProdutoCarro(dados:Carro & Produto){
     dados.portas;
     dados.preco;
     dados.rodas;
}
ProdutoCarro({
     preco:2000,
     rodas:4,
     portas:5,
});
console.log();

// adicionar Propiedadaes
//possível adicionar uma propriedade a uma interface/tipo que já foi definido


// com interface
interface InterfaceCarro{
     rodas:number;
     portas:number;
}

interface InterfaceCarro{
     preco: number;
}

const dado1: InterfaceCarro = {
     preco:20000,
     rodas:4,
     portas: 4
};

//  com type 
type TipoCarro={
     rodas:number;
     portas:number;
};

type TipoCarroComPreco = TipoCarro & {
     preco:number;
};

const dado2: TipoCarroComPreco = {
     preco:2000,
     rodas:4,
     portas:5
};