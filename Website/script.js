const naglowek = document.getElementById('naglowek');

naglowek.addEventListener('mouseenter', () => {
    naglowek.style.fontSize = '5em';
});

naglowek.addEventListener('mouseleave', () => {
    naglowek.style.fontSize = '2em';
});
