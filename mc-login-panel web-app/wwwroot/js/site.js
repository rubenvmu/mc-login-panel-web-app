const galletaImage = document.getElementById('galleta');
const beeImage = document.getElementById('bee');

beeImage.addEventListener('click', () => {
  galletaImage.style.display = 'block';
});

galletaImage.addEventListener('click', () => {
  galletaImage.style.display = 'none';
});

