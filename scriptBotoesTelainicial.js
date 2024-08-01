const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const visualizarSenhaAluno = document.querySelector('#verSenhaAluno');
const visualizarSenhaProfessor = document.querySelector('#verSenhaProfessor');

visualizarSenhaAluno.addEventListener('click', () => {
  const inputSenha = document.querySelector('#senhaAluno');
  const iconeOlho = visualizarSenhaAluno;

  const isSenhaVisivel = inputSenha.type === 'text';

  if (isSenhaVisivel) {
    inputSenha.type = 'password';
    iconeOlho.classList.remove('fa-eye');
    iconeOlho.classList.add('fa-eye-slash');
  } else {
    inputSenha.type = 'text';
    iconeOlho.classList.remove('fa-eye-slash');
    iconeOlho.classList.add('fa-eye');
  }
});

visualizarSenhaProfessor.addEventListener('click', () => {
  const inputPassword = document.querySelector('#senhaProfessor');
  const iconeOlho = visualizarSenhaProfessor;

  const isPasswordVisivel = inputPassword.type === 'text';

  if (isPasswordVisivel) {
    inputPassword.type = 'password';
    iconeOlho.classList.remove('fa-eye');
    iconeOlho.classList.add('fa-eye-slash');
  } else {
    inputPassword.type = 'text';
    iconeOlho.classList.remove('fa-eye-slash');
    iconeOlho.classList.add('fa-eye');
  }
});

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
  document.getElementById('emailProfessor').focus();
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
  document.getElementById('emailAluno').focus();
});

loginBotaoAdmin.addEventListener('click', function (event) {
  event.preventDefault();
  window.location.href = './GerenciamentoAdmin/loginAdmin.html';
});
