function salvarSala(params) {
    const db = firebase.firestore();
    const salaRef = db.collection("Salas Cadastradas");
  
    return salaRef.add(novaSala);
  }
  