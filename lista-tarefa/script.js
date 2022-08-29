let idTarefa = 0

const inputTarefa = document.getElementById("tarefa-nova")

function adicionarTarefa() {
    const item = document.createElement("li")
    idTarefa++;
    item.id = idTarefa;
    item.innerHTML = `<li>
            <span>${inputTarefa.value}</span>
            <button class="excluir">x</button>
        </li>`;

    const lista = document.querySelector("#lista");
    lista.appendChild(item);
    inputTarefa.value = "";
}

const botaoAdiconar = document.querySelector("#btn-adicionar")
botaoAdiconar.addEventListener("click", adicionarTarefa)

function limparLista() {
    const lista = document.querySelector("#lista");
    lista.innerHTML = "";
}
const botaoLimpar = document.querySelector(".bt-azul")
botaoLimpar.addEventListener("click", limparLista)

// function concluir(itemId) {
//     const tarefaSelecionada = document.getElementById(itemId);
//     tarefaSelecionada.className = "concluida";
// }

// item.innerHTML = `<span onclick="concluir(${inputTarefa.value}</span>)
// <button class="feito" onclick ="concluido(event)">x</button>`;
