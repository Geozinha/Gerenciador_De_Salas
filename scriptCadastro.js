  const emailAluno = document.querySelector('#emailAluno');
  const emailAlunoValido = document.querySelector('#emailAlunoValido');
  const senhaAluno = document.querySelector('#senhaAluno');
  const senhaAlunoValido = document.querySelector('#senhaAlunoValido');

  const emailProfessor = document.querySelector('#emailProfessor');
  const emailProfessorValido = document.querySelector('#emailProfessorValido');
  const senhaProfessor = document.querySelector('#senhaProfessor');
  const senhaProfessorValido = document.querySelector('#senhaProfessorValido');


  let msgError = document.querySelector('#msgError');

  emailAluno.addEventListener('keyup', () => {
    const emailValue = emailAluno.value;
    const isValid = validarEmail(emailValue);
    if (!isValid) {
      emailAlunoValido.textContent = 'Email inválido!';
      emailAlunoIsvalid = false;
    } else {
      emailAlunoValido.textContent = 'Email válido!';
      emailAlunoIsvalid = true;
    }
  });

  emailProfessor.addEventListener('keyup', () => {
    const emailValue = emailProfessor.value;
    const isValid = validarEmail(emailValue);
    if (!isValid) {
      emailProfessorValido.textContent = 'Email inválido!';
      emailProfessorIsvalid = false;
    } else {
      emailProfessorValido.textContent = 'Email válido!';
      emailProfessorIsvalid = true;
    }
  });

  senhaAluno.addEventListener('keyup', () => {
    senhaAlunoValido.style.visibility = 'visible';

    if (senhaAluno.value.length < 6) {
      senhaAlunoValido.textContent = 'Senha inválida!';
      senhaAlunoIsvalid = false;
    } else {
      senhaAlunoValido.textContent = 'Senha válida!';
      senhaAlunoIsvalid = true;
    }
  });

  senhaProfessor.addEventListener('keyup', () => {
    senhaProfessorValido.style.visibility = 'visible';

    if (senhaProfessor.value.length < 6) {
      senhaProfessorValido.textContent = 'Senha inválida!';
      senhaProfessorIsvalid = false;
    } else {
      senhaProfessorValido.textContent = 'Senha válida!';
      senhaProfessorIsvalid = true;
    }
  });

  function loginAluno(e) {
    e.preventDefault();
    const email = emailAluno.value;
    const password = senhaAluno.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        window.location.href = '/reservaAluno/index.html';
      })
      .catch(error => {
        msgError.textContent = error;
      });
  }

  function loginProfessor(e) {
    e.preventDefault();
    const email = emailProfessor.value;
    const senha = senhaProfessor.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(response => {
        window.location.href = '/reservaProfessor/index.html';
      })
      .catch(error => {
        msgError.textContent = error;
      });
  };
