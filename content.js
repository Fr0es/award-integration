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
  iframe.id = 'flask-iframe';
  
  // Cria o botão de fechar
  const closeButton = document.createElement('button');
  closeButton.id = 'close-overlay';
  closeButton.textContent = '  SAIR  '; // símbolo de fechar
  
  // Monta a estrutura
  overlayContent.appendChild(iframe);
  overlayContent.appendChild(closeButton);
  overlay.appendChild(overlayContent);
  document.body.appendChild(overlay);
  
  // Adiciona evento para o botão de fechar com LOGOUT
  closeButton.addEventListener('click', function() {
    const iframeElem = document.getElementById('flask-iframe');
    if (iframeElem) {
      // Redireciona o iframe para a URL de logout (GET)
      iframeElem.src = 'http://192.168.1.150:5000/logout';
      // Aguarda um pouco para garantir que a requisição de logout foi enviada
      setTimeout(function() {
        const overlayElem = document.getElementById('flask-overlay');
        if (overlayElem) overlayElem.remove();
      }, 300);
    } else {
      // Fallback: remove diretamente
      const overlayElem = document.getElementById('flask-overlay');
      if (overlayElem) overlayElem.remove();
    }
  });
}