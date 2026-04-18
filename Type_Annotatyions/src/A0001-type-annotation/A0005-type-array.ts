// maneiras de criar um array
//Array<T> e T[]´
// T é os types

function multiplicaArgs(...args: Array<number>){

}

const numeros = [10, 30, 40 , 50, 60, 777, 1002, 2025];

function maiorQue20(data:number[]){
     return data.filter((n)=>n>20); 
}
console.log(maiorQue20(numeros));
// export{numeros};