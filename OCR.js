
const translateButton = document.getElementById('translate-button');

translateButton.addEventListener('click', () => {

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'translate' });
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'translationComplete') {
  }
});