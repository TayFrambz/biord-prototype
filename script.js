// Mostrar e esconder modal
function showModal() {
    document.getElementById('modal').classList.remove('hidden');
  }
  
  function closeModal() {
    document.getElementById('modal').classList.add('hidden');
  }
  
  // Alternar visibilidade entre seções
  document.getElementById('menu-agendamento').addEventListener('click', () => {
    document.getElementById('catalogo').classList.add('hidden');
    document.getElementById('agendamento').classList.remove('hidden');
  });

  document.getElementById('nav-home').addEventListener('click', () => {
    document.getElementById('catalogo').classList.remove('hidden');
    document.getElementById('agendamento').classList.add('hidden');
  });

  // Função para alternar telas
function showCatalog() {
    // Exibe o catálogo
    document.getElementById('catalogo').classList.remove('hidden');
    // Oculta o agendamento
    document.getElementById('agendamento').classList.add('hidden');
  }
  
  // Navbar - Início
  document.getElementById('nav-home').addEventListener('click', showCatalog);
  
  // Menu Lateral - Catálogo
  document.getElementById('menu-catalogo').addEventListener('click', showCatalog);
  