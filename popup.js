
async function translateImage(imageUrl) {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
  
    const imgURL = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = async () => {
      const { data } = await Tesseract.recognize(img, 'eng');
      const extractedText = data.text;
  
      const url = 'https://libretranslate.com/translate';
      const body = JSON.stringify({
        q: extractedText,
        source: 'en',
        target: 'pt',
        format: 'text'
      });
      const headers = { 'Content-Type': 'application/json' };
  
      const translateResponse = await fetch(url, { method: 'POST', body, headers });
  
      if (translateResponse.ok) {
        const translatedData = await translateResponse.json();
        const translatedText = translatedData.translatedText;
        console.log(translatedText);
        document.getElementById('resultado').textContent = translatedText;
      } else {
        console.error('Erro ao traduzir o texto');
      }
  
      URL.revokeObjectURL(imgURL);
    };
    img.src = imgURL;
  }
  async function traduzirTodasImagens() {
    const images = document.querySelectorAll('img');
    for (const image of images) { 
      await translateImage(image.src); 
    }
  }

    const traduzirTodasButton = document.getElementById('traduzirTodasButton');
    traduzirTodasButton.addEventListener('click', traduzirTodasImagens);
  
  const images = document.querySelectorAll('img');
  
  function createTranslateButton(image) {
    const button = document.createElement('button');
    button.textContent = 'Traduzir';
    button.classList.add('translate-button');
  
    button.style.position = 'absolute';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.zIndex = '1000';
  
    button.addEventListener('click', () => translateImage(image.src));
  
    const container = document.createElement('div');
    container.style.position = 'relative';
    image.parentNode.insertBefore(container, image);
    container.appendChild(image);
    container.appendChild(button);
  }
  
  images.forEach