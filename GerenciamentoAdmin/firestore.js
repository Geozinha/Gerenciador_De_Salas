function salvarSala(novaSala) {
    const db = firebase.firestore();
    const salaRef = db.collection("Salas Cadastradas");
  
    return salaRef.add(novaSala.toFirestoreObject());
  }

function removerSala(salaId){
  const db = firebase.firestore();
  const salaRef = db.collection("Sala cadastrada").doc(salaId);

  salaRef.delete().then(() =>{
    document.querySelector(`[data-reserva-id="${salaId}"]`).parentElement.remove();
  }).catch((error) =>{
    alert("Erro ao remover a sala", error);
  })
}

function editarSala(salaId, novoDados) {
  const db = firebase.firestore();
  const salaRef = db.collection('Sala cadastradas').doc(salaId);

  salaRef.update(novoDados).then(() =>{
    exibirSalaCadastrada({id: salaId, ...novoDados});
  }).catch((error) =>{
    alert("Erro ao editar", error)
  })
}
  