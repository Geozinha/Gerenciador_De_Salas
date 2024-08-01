BotaoAdmin.addEventListener('click', function (event) {
  event.preventDefault();
  window.location.href = './telaAdmin.html';
});
import { login } from "./scriptCadastro";


const emailAdmin = document.querySelector('#emailAdmin');
const emailAdminValido = document.querySelector('#emailAdminValido');
const senhaAdmin = document.querySelector('#senhaAdmin');
const senhaAdminValido = document.querySelector('#senhaAdministradorValido');

let emailAdminIsvalid = false;
let senhaAdminIsvalid = false;

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
