// function normalizarTexto(texto) {
//   return texto.trims().toLowercase();
// }

function normalizarTexto(texto:string){
     return texto.toLowerCase();
}
normalizarTexto('joao');
console.log(normalizarTexto('joao'));

console.log('rodando...');
// export{normalizarTexto};
// function algo() {
//   return "teste";
// }

// console.log(algo());
// console.log("RODANDO AQUI");

// const input = document.querySelector('input');

// const total = localStorage.getItem('total');
// input.value = total;
// calcularGanho(input.value);

// function calcularGanho(value) {
//   const p = document.querySelector('p');
//   p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
// }

// function totalMudou() {
//   const value = Number(input.value);
//   localStorage.setItem('total', value);
//   calcularGanho(value);
// }

// input.addEventListener('keyup', totalMudou);
