function redirect(url) {
  setTimeout(() => {
    window.location.replace(
      new URL(url, `${window.location.protocol}//${window.location.host}`),
    );
  }, 250);
}

