let idTarefa = 0;
const inputTarefa = document.getElementById("tarefa-nova");

function adicionarTarefa() {
    const item = document.createElement("li");
    idTarefa++;
    item.id = idTarefa;
    item.innerHTML = `<li>
    <span onclick="concluir(${idTarefa})">${inputTarefa.value}</span>
    <div class="botoes">
        <button class="concluido" onclick="concluir(${idTarefa})">ok</button>
        <button class="excluir" onclick="excluir(${idTarefa})">x</button>
    </div>
</li>`;

    if (inputTarefa.value.length != 0) {
        const lista = document.querySelector("#lista");
        lista.appendChild(item);
        inputTarefa.value = ""
    } else {
        alert('Nada foi adicionado a sua lista de tarefas, digite algo para que seja adicionado!')
    }
}

document.addEventListener('keypress', function(e) {
if (e.key === "Enter") {
    const botaoAdiconar = document.querySelector("#btn-adicionar");
    botaoAdiconar.click();
} else {
    const botaoAdiconar = document.querySelector("#btn-adicionar");
    botaoAdiconar.addEventListener("click", adicionarTarefa);
}
});

function limparLista() {
    const lista = document.querySelector("#lista");
    lista.innerHTML = "";
}
const botaoLimpar = document.querySelector(".bt-azul");
botaoLimpar.addEventListener("click", limparLista);

function concluir(idTarefa) {
    const tarefaSelecionada = document.getElementById(idTarefa);
    tarefaSelecionada.className = "concluida";
}

function excluir(idTarefa) {
    const tarefaSelecionada = document.getElementById(idTarefa);
    tarefaSelecionada.remove();
}