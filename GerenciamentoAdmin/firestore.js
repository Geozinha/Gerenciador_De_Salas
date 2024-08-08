function salvarSala(novaSala) {
    const db = firebase.firestore();
    const salaRef = db.collection("Salas Cadastradas");
  
    return salaRef.add(novaSala);
  }
  
  //Uncaught FirebaseError: Function addDoc() called with invalid data. Data must be an object, but it was: a custom Sala object (found in document Salas Cadastradas/yFtF66ky33il0IkXoNp0)