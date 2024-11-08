const naglowek = document.getElementById('naglowek');

naglowek.addEventListener('mouseenter', () => {
    naglowek.style.fontSize = '5em';
});

naglowek.addEventListener('mouseleave', () => {
    naglowek.style.fontSize = '2em';
});

// Pobranie danych z backendu
fetch('http://localhost:3000/data')
  .then(response => response.json())
  .then(data => {
    const messages = data.map(item => `<p>${item.message}</p>`).join('');
    document.body.insertAdjacentHTML('beforeend', `<div>${messages}</div>`);
  })
  .catch(error => {
    console.error('Błąd pobierania danych:', error);
  });

