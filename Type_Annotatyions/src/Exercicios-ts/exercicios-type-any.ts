


// Crie um array do tipo any[] com 3 tipos de dados diferentes.

// Receba um dado de um JSON.parse() e armazene em uma variável any.

// Crie uma função que receba um parâmetro any e use o console.log para imprimir o tipo (typeof).

// Tente acessar uma propriedade que não existe em uma variável do tipo any.

// Crie uma função que some dois parâmetros tipados como any e veja o comportamento.

// Use any para capturar o erro em um bloco catch (embora unknown seja preferível, treine com any).

// Crie um objeto any e adicione uma nova propriedade dinamicamente.

// Atribua uma variável any a uma variável string e observe que o TS não reclama.

// Crie uma função de "log genérico" que aceite qualquer coisa.


// Crie uma variável any e atribua uma string, depois mude para um número.

function  mostrarTexto(texto:any){
     return texto.toLowerCase();
}
mostrarTexto('Ola, mundo');
mostrarTexto(300);


// Crie um array do tipo any[] com 3 tipos de dados diferentes.
// o any está implicito
function listaDeElementos(lista:(string|number|boolean)[]){
     return lista.filter((item)=> typeof item == 'string');
}
