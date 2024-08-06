const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


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
  window.location.href = './GerenciamentoAdmin/telaAdmin.html';
});


visualizarSenha('senhaAluno', 'verSenhaAluno');
visualizarSenha('senhaProfessor', 'verSenhaProfessor');