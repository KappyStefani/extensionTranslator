const images = document.querySelectorAll('img');

function createTranslateButton(image) {
  const button = document.createElement('button');
  button.textContent = 'Traduzir';
  button.classList.add('translate-button');

  button.style.position = 'absolute';
  button.style.top = '10px';
  button.style.right = '10px';
  button.style.z-index ;

  button.addEventListener('click', () => {

  });

  image.appendChild(button);
}

images.forEach(image => {
  createTranslateButton(image);
});