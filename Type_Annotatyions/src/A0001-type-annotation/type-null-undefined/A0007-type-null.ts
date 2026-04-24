// Null

// tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas

// OBS:  VAZIO DE PRÓPOSITO

//undefined ==> a variável existe mas não recebeu valor 
// NÃO DEFINIDA AINDA


let x;
console.log(x); // Undefined

// outro exemplo undefined 
function mostrarMensagem(): void{
     console.log('olá'); 
}
// essa função ela executa o console.log
// não tem retorno
// quando eu chamo a função e não uso um return, o javascript automaticamente entende:
// return undefined; 

// seria basicamente isso
// function mostrarMensagem(): void {
//   console.log("Olá");
//   return undefined; // automático
// }


const resultado = mostrarMensagem(); // eu tenho a variável mas não tenho o valor
//  a variável resultado recebe undefined
console.log(resultado); // undefined

if(typeof x === 'undefined') x = 20;
console.log(x*2);

export function createPerson(
     firstName:string,
     lastName?:string
){
     // first 
}

export function squareOf(x:any){
     if(typeof x === 'number')return x*x;
     return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if(squareOfTwoNumber === null){
     console.log('conta inválida');
}else{
     console.log(squareOfTwoNumber);
}

// exemplo de null

let usuarioLogado: string | null = null;

//  ------------------------------------


let usuario: string | null = null;
usuario = "j"
if (usuario === null) {
  console.log("Ninguém logado");
}else{
     console.log("Joao");
}


let id:string|number|null = null;
id = 1;
function buscarNome(id:number) : string|number| null{
     if (id === 1){
          return 'joão';
     }else{
          return null;
     }
}

console.log(buscarNome(2));
console.log(buscarNome(1));



//  OBS: SEMPRE QUE TIVER "STRING | NULL"
// PENSE AUTOMATICAMENTE EM 
// IF(VALOR === NULL)