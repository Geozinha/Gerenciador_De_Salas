class login {
  constructor(email, senha) {
    this.senha = senha;
    this.email = email;

    if (!validarEmail(email)) {
      throw new Error('Email inválido!');
    }
  }
  getSenha() {
    return this.senha;
  }
  getEmail() {
    return this.email;
  }

  setSenha(novaSenha) {
    this.senha = novaSenha;
  }
  setEmail(novoEmail) {
    if (validarEmail(novoEmail)) {
      this.email = novoEmail;
    } else {
      throw new Error('Novo email inválido!');
    }
  }
}
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
    } else {
      emailAlunoValido.textContent = 'Email válido!';
    }
  });

  emailProfessor.addEventListener('keyup', () => {
    const emailValue = emailProfessor.value;
    const isValid = validarEmail(emailValue);
    if (!isValid) {
      emailProfessorValido.textContent = 'Email inválido!';
    } else {
      emailProfessorValido.textContent = 'Email válido!';
    }
  });

  senhaAluno.addEventListener('keyup', () => {
    senhaAlunoValido.style.visibility = 'visible';

    if (senhaAluno.value.length < 6) {
      senhaAlunoValido.textContent = 'Senha inválida!';
    } else {
      senhaAlunoValido.textContent = 'Senha válida!';
    }
  });

  senhaProfessor.addEventListener('keyup', () => {
    senhaProfessorValido.style.visibility = 'visible';

    if (senhaProfessor.value.length < 6) {
      senhaProfessorValido.textContent = 'Senha inválida!';
    } else {
      senhaProfessorValido.textContent = 'Senha válida!';
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
  }
