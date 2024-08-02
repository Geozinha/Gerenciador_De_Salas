const emailAdmin = document.querySelector('#emailAdmin');
const senhaAdmin = document.querySelector('#senhaAdmin');
const emailAdminValido = document.querySelector('#emailAdminValido');
const senhaAdminValido = document.querySelector('#senhaAdminValido');

let emailAdminIsvalid = false;
let senhaAdminIsvalid = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

emailAdmin.addEventListener('keyup', () => {
  const emailValue = emailAdmin.value;
  const isValid = validarEmail(emailValue);
  if (!isValid) {
    emailAdminValido.textContent = 'Email inválido!';
    emailAdminIsvalid = false;
  } else {
    emailAdminValido.textContent = 'Email válido!';
    emailAdminIsvalid = true;
  }
});

senhaAdmin.addEventListener('keyup', () => {
  senhaAdminValido.style.visibility = 'visible';

  if (senhaAdmin.value.length < 6) {
    senhaAdminValido.textContent = 'Senha inválida!';
    senhaAdminIsvalid = false;
  } else {
    senhaAdminValido.textContent = 'Senha válida!';
    senhaAdminIsvalid = true;
  }
});

function loginAdmin(e) {
  e.preventDefault();
  if (emailAdminIsvalid && senhaAdminIsvalid) {
    msgSuccess.textContent = 'Login realizado com sucesso!';
    redirect('/GerenciamentoAdmin');
  } else {
    msgError.textContent = 'Email ou senha inválidos!';
  }

  validarEmail('flçasdjfalçsdf');
}

// visualizarSenha('senhaAdmin', 'verSenhaAdmin');
