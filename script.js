// Crie um objeto que receba ao menos três propriedades sobre você.
let Isabelly = {
    Nome: "Isabelly",
    Idade:'19',
    Profissão:'Desenvolvedora Front End Jr'
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
   Isabelly.Idade = 19

// Remova uma propriedade desse objeto.
//Mostre no console todas as propriedades desse objeto.
delete Isabelly.Idade
console.log(Isabelly)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.
let cadastro =[
    {
        nome: 'Angela',
        idade:35,
        telefone:11971111111,
        amigos:'Isabelly', amigos1:'Yasmin', amigos2:'Brunol', amigos3:'Celia', amigos4:'Clodoaldo'
    },
    {
        nome: 'Karol',
        idade:21,
        telefone:11971111112,
        amigos:'Sabrina', amigos1:'Camila', amigos2:'Samuel', amigos3:'Everton',amigos4:'Ana'   
    },
    {
        nome: 'Ana',
        idade:15,
        telefone:11971111113,
        amigos:'Pedro', amigos1:'Camila', amigos2:'Aline', amigos3:'Jonathan', amigos4:'Carol' 
    },
    {
        nome: 'Kamilly',
        idade:20,
        telefone:11971111114,
        amigos:'Karen', amigos1:'Danilo', amigos2:'Érica', amigos3:'Pablo', amigos4:'Murillo' 
    },
    {
        nome: 'Murillo',
        idade:19,
        telefone:11971111115,
        amigos:'Lucas', amigos1:'Jessica', amigos2:'Mikaela', amigos3:'Jackson', amigos4:'Samuel' 
    }
]

console.log(cadastro[0].amigos)
console.log(cadastro[1].amigos)
console.log(cadastro[2].amigos)
console.log(cadastro[3].amigos)
console.log(cadastro[4].amigos)