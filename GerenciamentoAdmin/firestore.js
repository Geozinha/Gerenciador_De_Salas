function salvarSala(novaSala) {
  const db = firebase.firestore();
  const salaRef = db.collection("Salas Cadastradas");

  return salaRef.add(novaSala.toFirestoreObject());
}

function removerSala(salaId) {
  const db = firebase.firestore();
  const salaRef = db.collection("Salas Cadastradas").doc(salaId);

  salaRef.delete().then(() => {
      document.querySelector(`[data-reserva-id="${salaId}"]`).parentElement.remove();
  }).catch((error) => {
      alert("Erro ao remover a sala: " + error.message);
  });
}

function editarSala(salaId, novosDados) {
  const db = firebase.firestore();
  const salaRef = db.collection('Salas Cadastradas').doc(salaId);

  salaRef.update(novosDados).then(() => {
      exibirSalaCadastrada({ id: salaId, ...novosDados });
  }).catch((error) => {
      alert("Erro ao editar: " + error.message);
  });
}

document.getElementById("form-cadastro-sala").addEventListener("submit", (e) => {
  e.preventDefault();

  const id = Date.now(); 
  const nome = form.nome().value;
  const descricao = form.descricao().value;
  const capacidade = form.capacidade().value;
  const tipoSala = form.tipoSala().value;
  const predio = form.predio().value;

  const novaSala = new Sala(id, nome, descricao, capacidade, tipoSala, predio);
  salvarSala(novaSala).then(() => {
      exibirSalaCadastrada(novaSala);
      limparFormulario();
      document.getElementById("msgSuccess").innerHTML = 'Sala cadastrada com sucesso!';
  }).catch((error) => {
      document.getElementById("msgError").innerHTML = 'Erro ao cadastrar sala: ' + error.message;
  });
});

function exibirSalaCadastrada(sala) {
  const listaReservas = document.getElementById("lista-reservas");
  const ul = document.createElement("ul");
  ul.innerHTML = `
      <span><strong>Sala:</strong> ${sala.nome}</span> <br>
      <span><strong>Descrição:</strong> ${sala.descricao}</span> <br>
      <span><strong>Quantidade de Alunos:</strong> ${sala.capacidade}</span> <br>
      <span><strong>Tipo de sala:</strong> ${sala.tipoSala}</span> <br>
      <span><strong>Prédio:</strong> ${sala.predio}</span> <br>        
      <button class="btn-editar-reserva" data-reserva-id="${sala.id}">Editar</button>
      <button class="btn-remover-reserva" data-reserva-id="${sala.id}">Remover</button>
  `;
  listaReservas.appendChild(ul);
  
  document.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-remover-reserva")) {
          const salaId = e.target.getAttribute("data-reserva-id");
          removerSala(salaId);
      }
  });

  document.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-editar-reserva")) {
          const salaId = e.target.getAttribute("data-reserva-id");

          const novosDados = {
              nome: form.nome().value,
              descricao: form.descricao().value,
              capacidade: form.capacidade().value,
              tipoSala: form.tipoSala().value,
              predio: form.predio().value
          };

          editarSala(salaId, novosDados);
      }
  });
}

function limparFormulario() {
  document.getElementById("form-cadastro-sala").reset();
}
