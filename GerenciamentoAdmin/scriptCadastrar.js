class cadastrarSala {
  constructor(nomeSala, descricao, tipoSala, predio) {
    this.nomeSala = nomeSala;
    this.descricao = descricao;
    this.tipoSala = tipoSala;
    this.predio = predio;
  }
  setNomeSala(novoNomeSala) {
    this.nomeSala = novoNomeSala;
  }
  setDescricao(novaDescricao) {
    this.descricao = novaDescricao;
  }
  setTipoSala(novaTipoSala) {
    this.tipoSala = novaTipoSala;
  }
  setPredio(novoPredio) {
    this.predio = novoPredio;
  }
}

function registrarSala() {
  const nomeSala = document.querySelector('#nomeSala').value; 
  const descricao = document.querySelector('#descricao').value;
  const tipoSala = document.querySelector('#tipoSala').value; 
  const predio = document.querySelector('#predio').value;
  
  const msgError = document.querySelector('#msgError');
  const msgSuccess = document.querySelector('#msgSuccess');

  if (nomeSala === '' || descricao === '' || tipoSala === '' || predio === '') {
    msgError.textContent = 'Preencha todos os campos!';
    msgSuccess.textContent = '';
    return;
  }
  else {
    msgError.textContent = '';
    msgSuccess.textContent = 'Sala cadastrada com sucesso!';
  }
}