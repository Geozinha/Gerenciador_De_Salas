class Sala {
  constructor(id, nome, descricao, capacidade, tipoSala, predio) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.capacidade = capacidade;
    this.tipoSala = tipoSala;
    this.predio = predio;
  }
}

document.getElementById("form-cadastro-sala").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nomeSala").value;
    const descricao = document.getElementById("descricao-sala").value;
    const capacidade = document.getElementById("capacidade").value;
    const tipoSala = document.getElementById("tipoSala").value;
    const predio = document.getElementById("predio").value;

    const id = Date.now();
    const novaSala = new Sala(
      id,
      nome,
      descricao,
      capacidade,
      tipoSala,
      predio
    );

    adicionarSalaNaLista(novaSala);
    limparFormulario();
  });

function adicionarSalaNaLista(sala) {
  const listaReservas = document.getElementById("lista-reservas");
  const ul = document.createElement("ul");
  ul.innerHTML = 
  `<span><strong>Sala:</strong> ${sala.nome}</span><br>
  <span><strong>Descrição:</strong> ${sala.descricao}</span><br>
  <span><strong>Capacidade:</strong> ${sala.capacidade}</span><br>
  <span><strong>Tipo de sala:</strong> ${sala.tipoSala}</span><br>
  <span><strong>Prédio:</strong> ${sala.predio}</span><br>
  <button class="btn-remover-reserva" data-reserva-id="${sala.id}">Remover</button>`;
  listaReservas.appendChild(ul);
}

function limparFormulario() {
  document.getElementById("form-cadastro-sala").reset();
}
