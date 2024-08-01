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
  toJson() {
    return JSON.stringify(this);
  }
  static fromJson(dadosJson) {
    const dados = JSON.parse(dadosJson);
    return new login(dados.email, dados.senha);
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

let emailAlunoIsvalid = false;
let emailProfessorIsvalid = false;

let senhaAlunoIsvalid = false;
let senhaProfessorIsvalid = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

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
  if (senhaAluno.value.length < 6) {
    senhaAlunoValido.textContent = 'Senha inválida!';
    senhaAlunoIsvalid = false;
  } else {
    senhaAlunoValido.textContent = 'Senha válida!';
    senhaAlunoIsvalid = true;
  }
});

senhaProfessor.addEventListener('keyup', () => {
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

  if (emailAlunoIsvalid && senhaAlunoIsvalid) {
    if (typeof localStorage !== 'undefined') {
      try {
        let usuario = new login(emailAluno.value, senhaAluno.value);
        const listaUsuario = JSON.parse(
          localStorage.getItem('listaUsuario') || '[]',
        );
        let usuarioJson = usuario.toJson();
        let novoUsuario = login.fromJson(usuarioJson);
        listaUsuario.push(novoUsuario);
        localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));
        msgSuccess.textContent = 'Login realizado com sucesso!';

        redirect('/ReservaAluno');
      } catch (error) {
        console.error('Erro ao salvar dados no localStorage:', error);
        msgError.textContent = 'Erro ao realizar login!';
      }
    } else {
      console.error('LocalStorage não suportado pelo navegador!');
      msgError.textContent = 'Seu navegador não suporta localStorage!';
    }
  } else {
    msgError.textContent = 'Email ou senha inválidos!';
  }
}

function loginProfessor(e) {
  e.preventDefault();

  if (emailProfessorIsvalid && senhaProfessorIsvalid) {
    if (typeof localStorage !== 'undefined') {
      try {
        let usuario = new login(emailProfessor.value, senhaProfessor.value);
        const listaUsuario = JSON.parse(
          localStorage.getItem('listaUsuario') || '[]',
        );
        let usuarioJson = usuario.toJson();
        let novoUsuario = login.fromJson(usuarioJson);
        listaUsuario.push(novoUsuario);
        localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));
        msgSuccess.textContent = 'Login realizado com sucesso!';

        redirect('/ReservaProfessor');
      } catch (error) {
        console.error('Erro ao salvar dados no localStorage:', error);
        msgError.textContent = 'Erro ao realizar login!';
      }
    } else {
      console.error('LocalStorage não suportado pelo navegador!');
      msgError.textContent = 'Seu navegador não suporta localStorage!';
    }
  } else {
    msgError.textContent = 'Email ou senha inválidos!';
  }
}

function redirect(url) {
  setTimeout(() => {
    window.location.replace(
      new URL(url, `${window.location.protocol}//${window.location.host}`),
    );
  }, 250);
}

function validarEmail(email) {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}
