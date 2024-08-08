function salvarSala(novaSala) {
    const db = firebase.firestore();
    const salaRef = db.collection("Salas Cadastradas");
  
    return salaRef.add(novaSala.toFirestoreObject());
  }
  