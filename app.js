// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    const inputNombreAmigo = document.getElementById('amigo');
    const nombreAmigo = inputNombreAmigo.value.trim();

    if (!nombreAmigo) {
        alert("Por favor, ingrese un nombre.");
        return;
    }

    if (listaAmigos.includes(nombreAmigo)) {
        alert(`El nombre "${nombreAmigo}" ya está en el listado.`);
        return;
    }

    listaAmigos.push(nombreAmigo);
    inputNombreAmigo.value = ""; // Limpia el campo de entrada
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const elementoListaAmigos = document.getElementById('listaAmigos');
    elementoListaAmigos.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}