// Verifica se a página é a correta pelo título
console.log('Extensão MARFTpro - Verificando página...');

if (document.title === "MARFTpro Web - Login" || 
    window.location.href.includes("ProductionReadNew.aspx")) {
  
  console.log('Página válida detectada - Criando botão...');
  
  // Cria o elemento do GIF
  const gifButton = document.createElement('img');
  gifButton.src = 'https://github.com/Fr0es/award-integration/blob/master/images/icon.gif?raw=true';
  gifButton.id = 'flask-app-button';
  gifButton.title = 'Abrir aplicativo Flask';
  
  // Adiciona o GIF à página
  document.body.appendChild(gifButton);
  
  // Adiciona o evento de clique
  gifButton.addEventListener('click', openFlaskOverlay);
  
  console.log('Botão criado com sucesso');
}

function openFlaskOverlay() {
  console.log('Botão clicado - Abrindo overlay...');
  
  // Cria a sobreposição
  const overlay = document.createElement('div');
  overlay.id = 'flask-overlay';
  
  // Cria o conteúdo do overlay
  const overlayContent = document.createElement('div');
  overlayContent.className = 'overlay-content';
  
  // Cria o iframe
  const iframe = document.createElement('iframe');
  iframe.src = 'http://192.168.1.150:5000';
  iframe.frameBorder = '0';
  
  // Cria o botão de fechar
  const closeButton = document.createElement('button');
  closeButton.id = 'close-overlay';
  closeButton.textContent = 'Fechar';
  
  // Monta a estrutura
  overlayContent.appendChild(iframe);
  overlayContent.appendChild(closeButton);
  overlay.appendChild(overlayContent);
  
  // Adiciona ao body
  document.body.appendChild(overlay);
  
  // Adiciona evento para o botão de fechar
  closeButton.addEventListener('click', function() {
    document.body.removeChild(overlay);
  });
}