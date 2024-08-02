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
