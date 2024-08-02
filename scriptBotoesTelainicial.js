const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

function visualizarSenha(inputId, iconId) {
  const inputSenha = document.getElementById(inputId);
  const iconeOlho = document.getElementById(iconId);

  iconeOlho.addEventListener('click', () => {
    const isSenhaVisivel = inputSenha.type === 'text';

    inputSenha.type = isSenhaVisivel ? 'password' : 'text';
    iconeOlho.classList.toggle('fa-eye');
    iconeOlho.classList.toggle('fa-eye-slash');
  });
}

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

visualizarSenha('senhaAluno', 'verSenhaAluno');
visualizarSenha('senhaProfessor', 'verSenhaProfessor');