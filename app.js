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

document.getElementById("conteudo").innerHTML = "<ul>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNomes[0] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNomes[1] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNomes[2] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNomes[3] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNomes[4] + "</li>"
document.getElementById("conteudo").innerHTML += "</ul>"