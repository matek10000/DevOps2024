const naglowek = document.getElementById('naglowek');
const wiadomosciTableBody = document.getElementById('wiadomosci'); // Ciało tabeli

naglowek.addEventListener('mouseenter', () => {
    naglowek.style.fontSize = '5em';
});

naglowek.addEventListener('mouseleave', () => {
    naglowek.style.fontSize = '2em';
});

// Pobranie danych z backendu i wyświetlenie ich w tabeli
fetch('http://localhost:3306/data') // Pobieramy dane z backendu
  .then(response => response.json()) // Parsowanie odpowiedzi jako JSON
  .then(data => {
    // Czyszczenie tabeli przed dodaniem nowych danych
    wiadomosciTableBody.innerHTML = '';

    // Iterowanie po danych i tworzenie wierszy w tabeli
    data.forEach(item => {
      const row = document.createElement('tr'); // Tworzenie nowego wiersza
      const idCell = document.createElement('td'); // Komórka na ID
      const messageCell = document.createElement('td'); // Komórka na wiadomość

      idCell.textContent = item.id; // Zakładając, że `item` ma pole `id`
      messageCell.textContent = item.content; // Zakładając, że `item` ma pole `content`

      row.appendChild(idCell); // Dodanie komórki z ID do wiersza
      row.appendChild(messageCell); // Dodanie komórki z wiadomością do wiersza

      wiadomosciTableBody.appendChild(row); // Dodanie wiersza do tabeli
    });
  })
  .catch(error => {
    console.error('Błąd pobierania danych:', error);
  });
