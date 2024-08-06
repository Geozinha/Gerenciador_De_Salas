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

document.getElementById("form-cadastro-sala").addEventListener("submit", (e)=>  {
    e.preventDefault();

    const nome = document.getElementById("nomeSala").value;
    const descricao = document.getElementById("descricaoSala").value;
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

    exibirSalaCadastrada(novaSala);
    limparFormulario();
  });

function exibirSalaCadastrada(sala) {
  const listaReservas = document.getElementById("lista-reservas");
  const ul = document.createElement("ul");
  
}

function limparFormulario() {
  document.getElementById("form-cadastro-sala").reset();
}
