// scriptCadastrar.js

import { db } from './scriptFirebase.js';

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

document.getElementById("form-cadastro-sala").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nomeSala").value;
  const descricao = document.getElementById("descricao-sala").value;
  const capacidade = document.getElementById("capacidade").value;
  const tipoSalaSelect = document.getElementById("tipoSala");
  const tipoSala = tipoSalaSelect.options[tipoSalaSelect.selectedIndex].text;
  const predioSelect = document.getElementById("predio");
  const predio = predioSelect.options[predioSelect.selectedIndex].text;
  
  const id = Date.now().toString(); 
  const novaSala = new Sala(id, nome, descricao, capacidade, tipoSala, predio);

  adicionarSalaNaLista(novaSala);
  salvarSalaNoFirestore(novaSala);
  limparFormulario();
});

document.addEventListener("DOMContentLoaded", function() {
  carregarSalasDoFirestore();
});

function adicionarSalaNaLista(sala) {
  const listaReservas = document.getElementById("lista-reservas");
  const li = document.createElement("li");
  li.setAttribute("data-id", sala.id);
  li.innerHTML = `
    <span><strong>Sala:</strong> ${sala.nome}</span><br>
    <span><strong>Descrição:</strong> ${sala.descricao}</span><br>
    <span><strong>Capacidade:</strong> ${sala.capacidade}</span><br>
    <span><strong>Tipo de sala:</strong> ${sala.tipoSala}</span><br>
    <span><strong>Prédio:</strong> ${sala.predio}</span><br>
    <button onclick="editarSala('${sala.id}')">Editar</button>
    <button onclick="removerSala('${sala.id}')">Remover</button>
  `;
  listaReservas.appendChild(li);
}

function limparFormulario() {
  document.getElementById("form-cadastro-sala").reset();
}

function salvarSalaNoFirestore(sala) {
  db.collection("salas").doc(sala.id).set({
    nome: sala.nome,
    descricao: sala.descricao,
    capacidade: sala.capacidade,
    tipoSala: sala.tipoSala,
    predio: sala.predio,
  })
  .then(() => {
    console.log("Sala cadastrada com sucesso!");
  })
  .catch(error => {
    console.error("Erro ao cadastrar sala: ", error);
  });
}

function carregarSalasDoFirestore() {
  db.collection("salas").get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      const sala = new Sala(doc.id, doc.data().nome, doc.data().descricao, doc.data().capacidade, doc.data().tipoSala, doc.data().predio);
      adicionarSalaNaLista(sala);
    });
  });
}

function removerSala(id) {
  db.collection("salas").doc(id).delete().then(() => {
    console.log("Sala removida com sucesso!");
    document.querySelector(`li[data-id="${id}"]`).remove();
  }).catch(error => {
    console.error("Erro ao remover sala: ", error);
  });
}

function editarSala(id) {
  db.collection("salas").doc(id).get().then(doc => {
    if (doc.exists) {
      const sala = doc.data();
      document.getElementById("nomeSala").value = sala.nome;
      document.getElementById("descricao-sala").value = sala.descricao;
      document.getElementById("capacidade").value = sala.capacidade;
      const tipoSalaSelect = document.getElementById("tipoSala");
      const predioSelect = document.getElementById("predio");

      for (let i = 0; i < tipoSalaSelect.options.length; i++) {
        if (tipoSalaSelect.options[i].text === sala.tipoSala) {
          tipoSalaSelect.selectedIndex = i;
          break;
        }
      }

      for (let i = 0; i < predioSelect.options.length; i++) {
        if (predioSelect.options[i].text === sala.predio) {
          predioSelect.selectedIndex = i;
          break;
        }
      }

      removerSala(id); // Remove a sala para ser atualizada com novos dados após o submit
    } else {
      console.log("Sala não encontrada!");
    }
  }).catch(error => {
    console.error("Erro ao editar sala: ", error);
  });
}
