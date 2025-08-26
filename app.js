/* 
getElementById() = encontra elementos no HTML
.value = pega o que foi digitado
.innerHTML = escreve texto na tela
onclick = conecta botão com função JavaScript
 */


// Lista onde vamos guardar os nomes
let amigos = [];

// Função para adicionar nome
function adicionarAmigo() {
  let input = document.getElementById("amigo"); // Faz a integração com o HTML na linha 23 "ID"
  let nome = input.value.trim(); // Pega o nome que você digitou (Usuário)

  // valida se o nome é vazio
  if (nome === "") {
    alert("Por favor, digite um nome válido!");
    return;
  }

  // adiciona o nome no array
  amigos.push(nome);

  // atualiza a lista na tela
  atualizarLista();

  // limpa o campo
  input.value = "";
}

// Função para atualizar a lista na tela
function atualizarLista() {
  let lista = document.getElementById("listaAmigos"); // Faz a integração com o HTML na linha 27 "listaAmigos"
  lista.innerHTML = ""; // limpa a lista antes

  amigos.forEach((nome) => {
    let li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

// Função para sortear amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia! Adicione nomes primeiro.");
    return;
  }

  // sorteia um nome aleatório
  let indice = Math.floor(Math.random() * amigos.length); // Um nome aleatório
  let sorteado = amigos[indice];

  // mostra o resultado
  let resultado = document.getElementById("resultado"); // mostre o resultado no HTML na linha 28 "resultado"
  resultado.innerHTML = ""; // limpa antes
  let li = document.createElement("li");
  li.textContent = `O amigo secreto sorteado é: ${sorteado}`;
  resultado.appendChild(li);

  //  depois de sortear, zera a lista de amigos
  amigos = [];
  atualizarLista();
}
