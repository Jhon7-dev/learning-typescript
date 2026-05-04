type MapStringsCallback = (item: string) => string;
// aqui eu defini um tipo de função
// recebi uma string e devolvo uma string

function mapStrings(array:string[],callbackfn:MapStringsCallback): string[]{
     // recebe um array de string
     // recebe uma função(callback)
     // retorna um novo array de strings
     const newArray: string[] = [];

     for (let i = 0;i<array.length;i++){
          newArray.push(callbackfn(array[i]));
     }
     return newArray;
}

const abc = ['a','b','c'];
const abcMapped = mapStrings(abc,item=>item.toUpperCase());
console.log(abc);
console.log(abcMapped)

// Crie um mapStrings que:
// adicione "!" no final de cada string:

function mapStrings_1(array:string[],callbackfn:MapStringsCallback):string[]{
     const newArray: string [] = [];
     for(let i = 0;i<array.length;i++){
          newArray.push(callbackfn(array[i]));
     }
     return newArray;
}
const palavras = ['oi','tudo bem','joia'];
const palavrasMapped = mapStrings_1 (palavras,item=>item + '!' )
console.log(palavras)
console.log(palavrasMapped)

const palavras_x = ['a','b','c'];
// const palavrasMappedX = mapStrings_1(palavras_x, item=>item + 'Palavra: ' + palavras_x);
console.log(palavras_x)
// console.log(palavrasMappedX)

