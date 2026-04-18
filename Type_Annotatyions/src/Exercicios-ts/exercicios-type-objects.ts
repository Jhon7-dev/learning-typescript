// Declare um objeto carro com marca, modelo e ano.
type carro = ({
     marca:string;
     modelo:string;
     ano:number;
});
// Crie um tipo de objeto que tenha uma propriedade opcional (usando ?).
type moto=({
     marca:string;
     modelo:string;
     ano?:number;
})

// Crie um objeto que represente um círculo com a propriedade raio
type circle=({
     raio:number;

})

//Crie um objeto contaBancaria com saldo e uma função de depósito.



const contaBancaria: {
    titular: string;
    saldo: number;
    depositar: (valor: number) => void; 
} = {
    titular: "João",
    saldo: 1000,

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }
};


contaBancaria.depositar(500); 