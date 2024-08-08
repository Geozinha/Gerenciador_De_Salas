class ReservarSala {
  constructor(id, opcaoSala, dataReserva, horaInicio, horaFinal) {
    this.id = id;
    this.opcaoSala = opcaoSala;
    this.dataReserva = dataReserva;
    this.horaInicio = horaInicio;
    this.horaFinal = horaFinal;
  }
  getID() {
    return this.id;
  }
  getOpcaoSala() {
    return this.opcaoSala;
  }
  getDataReserva() {
    return this.dataReserva;
  }
  gethoraInicio() {
    return this.horaInicio;
  }
  gethoraFinal() {
    return this.horaFinal;
  }
  setOpcaoSala(novaOpcaoSala) {
    this.opcaoSala = novaOpcaoSala;
  }
  setDataReserva(novaDataReserva) {
    this.dataReserva = novaDataReserva;
  }
  sethoraInicio(novaHoraInicio) {
    this.horaInicio = novaHoraInicio;
  }
  sethoraFinal(novaHoraFinal) {
    this.horaFinal = novaHoraFinal;
  }
  setID(novoID) {
    this.id = novoID;
  }
}

const opcaoSala = document.getElementById('sala');
const dataReserva = document.getElementById('data-reserva');
const horaInicio = document.getElementById('hora-inicio');
const horaFinal = document.getElementById('hora-final');

const formularioCadastroSala = document.getElementById('form-cadastro-sala');
const formularioReservaSala = document.getElementById('form-reserva-sala');
const listaReserva = document.getElementById('lista-reservas');

function atualizarAsOpcaoSAla() {
  const selecaoSala = document.getElementById('sala');
  selecaoSala.innerHTML = '';
  gerenciador.CadastrarSala.forEach(sala => {
    const opcao = document.createElement('option');
    opcao.value = sala.nomeSala;
    opcao.textContent = sala.nomeSala;
    selecaoSala.appendChild(opcao);
  });
}

function exibirReservas() {
  const listaReservas = document.getElementById('lista-reservas');
  listaReservas.innerHTML = '';
  gerenciador.ReservarSala.forEach(reserva => {
    const li = document.createElement('li');
    li.className = 'reserva';
    li.innerHTML = `
            <span><strong>Sala:</strong> ${reserva.opcaoSala}</span>
            <span><strong>Data:</strong> ${reserva.dataReserva}</span>
            <span><strong>Horário:</strong> ${reserva.horaInicio} - ${reserva.horaFinal}</span>
            <button class="btn-editar-reserva" data-reserva-id="${reserva.id}">Editar</button>
            <button class="btn-remover-reserva" data-reserva-id="${reserva.id}">Remover</button>
        `;
    listaReservas.appendChild(li);
  });
}

document.getElementById('form-cadastro-sala').addEventListener('submit', e => {
  e.preventDefault();
  const nomeSalaValue = document.getElementById('nome-sala').value;
  const descricaoSalaValue = document.getElementById('descricao-sala').value;
  const quantidadeAlunosValue = document.getElementById('qtd-alunos').value;
  const predioValue = document.getElementById('predio').value;

  const id = Date.now();
  const novoCadastroSala = new CadastrarSala(
    id,
    nomeSalaValue,
    descricaoSalaValue,
    quantidadeAlunosValue,
    predioValue,
  );
  gerenciador.adicionarSala(novoCadastroSala);
  atualizarAsOpcaoSAla();
  document.getElementById('form-cadastro-sala').reset();
});

document.getElementById('form-reserva-sala').addEventListener('submit', e => {
  const opcaoSalaValue = document.getElementById('sala').value;
  const dataReservaValue = document.getElementById('data-reserva').value;
  const horaInicioValue = document.getElementById('hora-inicio').value;
  const horaFinalValue = document.getElementById('hora-final').value;

  const id = Date.now();
  const novaReservaSala = new ReservarSala(
    id,
    opcaoSalaValue,
    dataReservaValue,
    horaInicioValue,
    horaFinalValue,
  );
  gerenciador.adicionarReserva(novaReservaSala);
  document.getElementById('form-reserva-sala').reset();
});
document.getElementById('lista-reservas').addEventListener('click', e => {
  if (e.target.classList.contains('btn-editar-reserva')) {
    const reservaId = parseInt(e.target.dataset.reservaId);
    const reserva = gerenciador.getReservaporID(reservaId);

    document.getElementById('sala').value = ReservarSala.opcaoSala;
    document.getElementById('data-reserva').value = reserva.dataReserva;
    document.getElementById('hora-inicio').value = reserva.horaInicio;
    document.getElementById('hora-final').value = reserva.horaFinal;

    gerenciador.removerReserva(reservaId);
  }

  if (e.target.classList.contains('btn-remover-reserva')) {
    const reservaId = parseInt(e.target.dataset.reservaId);
    gerenciador.removerReserva(reservaId);
    exibirReservas();
  }
});
gerenciador.carregarSala();
gerenciador.carregarReserva();
atualizarAsOpcaoSAla();
exibirReservas();
