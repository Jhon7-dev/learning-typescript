// função sem retorno
function semRetorno(...args: string[]): void {
  console.log(args.join(""));
}

semRetorno();
console.log("FUNCIONANDO");

const pessoa = {
     nome: 'joao',
     sobre:'victor', 

     exibirNome(): void{
          console.log(this.nome + ' ' + this.sobre);
     },
};
semRetorno("Joao", "Victor");
// pessoa.exibirNome();
// export{pessoa};