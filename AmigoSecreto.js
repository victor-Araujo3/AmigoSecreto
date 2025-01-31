// Array para armazenar os nomes dos amigos
let amigos = [];

// Obter o elemento do campo de entrada de nome
const nomeInput = document.getElementById('nome-input');

// Obter o elemento do botão "Adicionar"
const adicionarButton = document.getElementById('adicionar-button');

// Adicionar um ouvinte de evento de clique ao botão "Adicionar"
adicionarButton.addEventListener('click', () => {
  // Obter o valor inserido no campo de entrada

  const nome = nomeInput.value;
 // Validar se o campo de entrada está vazio

  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }
  // Adicionar o nome ao array de amigos
  amigos.push(nome);
 
  // Limpar o campo de entrada
  nomeInput.value = '';

 // Exibir a lista de amigos (opcional)
 
 console.log('Amigos:', amigos);
});

// Obter o elemento da lista
const lista = document.getElementById("lista-amigos");

// Limpar a lista existente
lista.innerHTML = "";

// Array de amigos
const amigos = ["João", "Maria", "Pedro", "Ana"];

// Percorrer o array e adicionar elementos à lista
for (let i = 0; i < amigos.length; i++) {
  // Criar um novo elemento de lista
  const itemLista = document.createElement("li");

  // Definir o texto do elemento de lista
  itemLista.textContent = amigos[i];

  // Adicionar o elemento de lista à lista
  lista.appendChild(itemLista);
}

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  let nomeAmigo = document.getElementById("nomeAmigo").value;
  if (nomeAmigo !== "") {
    amigos.push(nomeAmigo);
    document.getElementById("nomeAmigo").value = ""; // Limpa o campo de entrada
    atualizarListaAmigos(); // Atualiza a lista exibida na tela
  }
}

// Função para atualizar a lista de amigos exibida na tela
function atualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista anterior
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li"); // Cria um novo item de lista
    item.textContent = amigos[i]; // Adiciona o nome do amigo ao item
    listaAmigos.appendChild(item); // Adiciona o item à lista
  }
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione amigos à lista antes de sortear!");
    return; // Sai da função se não houver amigos
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera índice aleatório
  let amigoSorteado = amigos[indiceAleatorio]; // Obtem o amigo sorteado
  document.getElementById("resultado").innerHTML = `Amigo secreto: ${amigoSorteado}`; // Exibe o resultado
}