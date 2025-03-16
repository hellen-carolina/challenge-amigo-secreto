// Array para armazenar os nomes dos amigos
let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    if (nome !== "") {
        listaAmigos.push(nome); // Adiciona ao array
        atualizarLista(); // Atualiza a exibição
        input.value = ""; // Limpa o input
    } else {
        alert("Digite um nome válido!");
    }
}

function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpa a lista antes de recriar

    listaAmigos.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = nome;

        // Criando ícone de lixeira para remover o nome
        let iconeRemover = document.createElement("span");
        iconeRemover.innerHTML = "🗑️"; // Usando diretamente o emoji de lixeira
        iconeRemover.style.cursor = "pointer";
        iconeRemover.style.marginLeft = "10px";
        iconeRemover.onclick = () => removerAmigo(index);

        li.appendChild(iconeRemover);
        ul.appendChild(li);
    });
}

function removerAmigo(index) {
    listaAmigos.splice(index, 1); // Remove o amigo pelo índice
    atualizarLista(); // Atualiza a exibição
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[indiceSorteado];

    document.getElementById("resultadoSorteio").textContent = "🎉 Amigo sorteado: " + nomeSorteado + " 🎉";
}
