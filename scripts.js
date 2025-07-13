function trocarTexto(card, novoTexto) {
  const texto = card.querySelector('.texto-diferente');
  const linhas = novoTexto.split('<br>');
  texto.innerHTML = `
    <h3>${linhas.slice(1).join('<br>')}</h3>
  `;
}


