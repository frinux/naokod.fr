// Affiche les coordonnées encodées (base64 d'une chaîne inversée) pour gêner les robots qui lisent le HTML brut.
document.querySelectorAll('.obf').forEach(function (el) {
  var s = new TextDecoder().decode(Uint8Array.from(atob(el.dataset.v), function (c) { return c.charCodeAt(0); }));
  s = Array.from(s).reverse().join('');
  if (el.dataset.link === 'mailto') {
    var a = document.createElement('a');
    a.href = 'mailto:' + s;
    a.textContent = s;
    el.appendChild(a);
  } else {
    el.textContent = s;
  }
});
