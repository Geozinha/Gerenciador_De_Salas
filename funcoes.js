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
