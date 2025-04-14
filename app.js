// let clientes = ['Luiz', 'Gustagol', 'Murilo', 'Felipe', 'Enzo'] // criação ARRAY

// console.dir(clientes)
// console.log(clientes[2]) //chamar 1 valor
// clientes[3] = "Corrida" //mudar valor
// console.dir(clientes)
// clientes.push("Maluco do Esptinho") // adicionar valor
// console.dir(clientes)


let clientesNomes = new Array()
clientesNomes.push('Luiz')
clientesNomes.push('Murilove')
clientesNomes.push('Gustagol')
clientesNomes.push('Felipe')
clientesNomes.push('Enzo')
console.dir(clientesNomes)

document.getElementById("conteudo").innerHTML = clientesNomes[0] + " - "
document.getElementById("conteudo").innerHTML += clientesNomes[1] + " - "
document.getElementById("conteudo").innerHTML += clientesNomes[2] + " - "
document.getElementById("conteudo").innerHTML += clientesNomes[3] + " - "
document.getElementById("conteudo").innerHTML += clientesNomes[4]