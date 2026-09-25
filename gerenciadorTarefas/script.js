const tarefa = document.getElementById('input-Tarefa');
const form = document.getElementById('form-tarefa');

form.addEventListener("submit", function(event) {
    event.preventDefault();     
    console.log(tarefa.value);
    document.getElementById("form-tarefa").reset();
    adicionarTarefa();
    resgatarTarefa();
});

function adicionarTarefa() {
    window.alert("Tarefa adicionada com sucesso!");
    window.localStorage.setItem("tarefa", tarefa.value);
}

function resgatarTarefa() {
    const tarefaResgatada = window.localStorage.getItem("tarefa");
    console.log(tarefaResgatada);
}

