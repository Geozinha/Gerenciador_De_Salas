class Sala {
  constructor(id, nome, descricao, capacidade, tipoSala, predio) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.capacidade = capacidade;
    this.tipoSala = tipoSala;
    this.predio = predio;
  }
  toFirestoreObject() {
    return {
      id: this.id,
      nome: this.nome,
      descricao: this.descricao,
      capacidade: this.capacidade,
      tipoSala: this.tipoSala,
      predio: this.predio
    };
  }
}

const form = {
  nome: () => document.getElementById("nomeSala"),
  descricao: () => document.getElementById("descricaoSala"),
  capacidade: () => document.getElementById("capacidade"),
  tipoSala: () => document.getElementById("tipoSala"),
  predio: () => document.getElementById("predio")
}

document.getElementById("form-cadastro-sala").addEventListener("submit", (e) => {
  e.preventDefault();

  const id = Date.now(); 
  const nome = form.nome().value;
  const descricao = form.descricao().value;
  const capacidade = form.capacidade().value;
  const tipoSala = form.tipoSala().value;
  const predio = form.predio().value;

 const novaSala = new Sala (id, nome, descricao, capacidade, tipoSala, predio);
  salvarSala(novaSala).then(() => {
    exibirSalaCadastrada(novaSala);
    limparFormulario();
    ''.innerHTML= 'Sala cadastrada';
  }).catch((error) => {
    ''.innerHTML= ('Erro', error);
  })
});


exibirSalaCadastrada();