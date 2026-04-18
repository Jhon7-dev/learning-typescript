const objetoA = {
     chaveA: 'a',
     chaveB:'b'
}
objetoA.chaveA = 'NovaChave';
objetoA.chaveB = 'NovaChave';


// forma mais correta de fazer esse tipo Object
const objectB: {
     chaveA: string;
     chaveB: string;
     chaveC?: string;
     [key: string]: unknown;
} = {
     chaveA:'valor a',
     chaveB:'valor b',
};
objectB.chaveA = 'outro valor';
objectB.chaveB = 'outro valor';
objectB.chaveC = 'outro valor';
console.log(objetoA);


//melhor exemplo para entender é esse
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