function VendaVeiculos(veiculo, modelo, marca, ano, preco){
    this.veiculo = veiculo;
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.preco = preco;
} 
const carro1 = new VendaVeiculos('Carro', 'Fiesta', 'Ford', 2019, 30000);
const carro2 = new VendaVeiculos('Carro', 'Focus', 'Ford', 2018, 25000);
const carro3 = new VendaVeiculos('Carro', 'Gol', 'Volkswagen', 2018, 20000);
const carro4 = new VendaVeiculos('Carro', 'Celta', 'Chevrolet', 2018, 15000);
const carro5 = new VendaVeiculos('Carro', 'Corsa', 'Chevrolet', 2015, 10000);
const moto1 = new VendaVeiculos('Moto', 'Honda', 'CBR 600', 2019, 20000);
const moto2 = new VendaVeiculos('Moto', 'Honda', 'CBR 500', 2018, 15000);
const moto3 = new VendaVeiculos('Moto', 'Honda', 'CBR 400', 2017, 10000);

let carroLista = [carro1, carro2, carro3, carro4, carro5];
let motoLista = [moto1, moto2, moto3];


function imprimirCarroLista(){
    for(i of carroLista){
        console.log(i.veiculo, i.modelo, i.marca, i.ano, i.preco);
    }
}
function imprimirMotoLista(){
    for(i of motoLista){
        console.log(i.veiculo, i.modelo, i.marca, i.ano, i.preco);
    }
}
// function listarVeiculoAno(){
//     for(i of carroLista){
//         if(i.ano === 2018){
//             console.log(i.veiculo, i.modelo, i.marca, i.ano, i.preco);
//         }
//     }
//     for(i of motoLista){
//         if(i.ano === 2018){
//             console.log(i.veiculo, i.modelo, i.marca, i.ano, i.preco);
//         }
//     }
// }

function listarVeiculoAno2(){
    const filtroCarro = carroLista.filter(i => i.ano === 2018);
    const filtroMoto = motoLista.filter(i => i.ano === 2018);
    console.log(filtroCarro);
    console.log(filtroMoto);
}
// Find mostra um objeto so enquanto o filter mostra todos
// function listarVeiculoAno3(){
//     const filtroCarro2 = carroLista.find(i => i.ano === 2018);
//     const filtroMoto2 = motoLista.find(i => i.ano === 2018);
//     console.log(filtroCarro2);
//     console.log(filtroMoto2);
// }

//imprimirCarroLista();
//imprimirMotoLista();
listarVeiculoAno2();