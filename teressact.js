const Tesseract = require('tesseract.js');

async function translateImage(image) {
  const { data } = await Tesseract.recognize(image, 'por'); // Assumindo que o texto está em português
  const extractedText = data.text;

  const translatedText = await translateTextToLanguage(extractedText, 'en'); // Traduzir para inglês
}