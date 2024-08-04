class cadastrarSala {
  constructor(nomeSala, descricao, capacidade, predio) {
    this.nomeSala = nomeSala;
    this.descricao = descricao;
    this.capacidade = capacidade;
    this.predio = predio;
  }
  getNomeSala() {
    return this.nomeSala;
  }
  getDescricao() {
    return this.descricao;
  }
  getCapacidade() {
    return this.capacidade;
  }
  getPredio() {
    return this.predio;
  }
  setNomeSala(novoNomeSala) {
    this.nomeSala = novoNomeSala;
  }
  setDescricao(novaDescricao) {
    this.descricao = novaDescricao;
  }
  setCapacidade(novaCapacidade) {
    this.capacidade = novaCapacidade;
  }
  setPredio(novoPredio) {
    this.predio = novoPredio;
  }
}

class gerenciadorSala {
  CadastrarSala = [];

  adicionarSala(sala) {
    this.CadastrarSala.push(sala);
    this.salvarSala();
  }

  getSalaporID(id) {
    return this.CadastrarSala.find((sala) => sala.id === id);
  }

  removerSala(id) {
    const index = this.CadastrarSala.findIndex((sala) => sala.id === id);
    if (index !== -1) {
      this.CadastrarSala.splice(index, 1);
      this.salvarSala;
    }
  }
}
const gerenciador = new GerenciadorReserva();


function adicionarSalaAoFormulario(sala) {
    const selectSala = document.getElementById('sala');
    const option = document.createElement('option');
    option.textContent = sala.nome;
    option.value = sala.id;
    selectSala.appendChild(option);
  
    const listaSalas = document.getElementById('lista-salas');
    const li = document.createElement('li');
    li.className = 'sala';
    li.innerHTML = `
          <span><strong>Nome:</strong> ${sala.nome}</span>
          <span><strong>Descrição:</strong> ${sala.descricao}</span>
          <span><strong>Quantidade de Alunos:</strong> ${sala.qtdAlunos}</span>
          <span><strong>Prédio:</strong> ${sala.predio}</span>
      `;
    listaSalas.appendChild(li);
  }

