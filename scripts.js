function trocarTexto(elemento, novoTexto) {
  const textoH3 = elemento.querySelector('.texto-diferente h3');
  textoH3.setAttribute('data-original', textoH3.innerHTML); // salva o texto original
  textoH3.innerHTML = novoTexto;
  textoH3.classList.add('novo-estilo'); // aplica estilo ao novo texto
}

function restaurarTexto(elemento) {
  const textoH3 = elemento.querySelector('.texto-diferente h3');
  const textoOriginal = textoH3.getAttribute('data-original');
  if (textoOriginal) {
    textoH3.innerHTML = textoOriginal;
    textoH3.classList.remove('novo-estilo'); // remove estilo para restaurar aparência
  }
}



