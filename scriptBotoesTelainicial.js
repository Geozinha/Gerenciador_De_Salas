const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

function visualizarSenha(inputId, iconId) {
  const inputSenha = document.getElementById(inputId);
    const iconeOlho = document.getElementById(iconId);

    iconeOlho.addEventListener('click', () => {
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