// Lógica para cambiar entre secciones del menú lateral (SPA behavior)
function showSection(sectionId, element) {
  // 1. Ocultar todas las secciones
  const sections = document.querySelectorAll('.app-section');
  sections.forEach(sec => {
    sec.classList.remove('active-section');
  });

  // 2. Mostrar la sección seleccionada
  const targetSection = document.getElementById(sectionId);
  if(targetSection) {
    targetSection.classList.add('active-section');
  }

  // 3. Actualizar el estado 'active' en el menú lateral
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.classList.remove('active');
  });
  element.classList.add('active');
}

// Lógica para el filtrado de Pestañas (Tabs de Unidades)
function showUnit(unitNumber, element) {
  // 1. Ocultar todas las tarjetas de semana
  const allWeeks = document.querySelectorAll('.week-card');
  allWeeks.forEach(week => {
    week.style.display = 'none';
  });

  // 2. Mostrar solo las de la unidad seleccionada
  const selectedWeeks = document.querySelectorAll(`.unit-${unitNumber}`);
  selectedWeeks.forEach(week => {
    // Pequeña animación de entrada
    week.style.opacity = '0';
    week.style.display = 'block';
    setTimeout(() => {
      week.style.transition = 'opacity 0.3s ease';
      week.style.opacity = '1';
    }, 10);
  });

  // 3. Actualizar pestaña activa
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  element.classList.add('active');
}

// Inicializar la vista (Por defecto mostrar Unidad 1)
document.addEventListener('DOMContentLoaded', () => {
  // Simular click en la primera unidad para inicializar el grid
  const firstTab = document.querySelector('.tab');
  if(firstTab) {
    showUnit(1, firstTab);
  }
});

// Lógica para los Modales (Ver Contenido)
function openModal(title) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  
  modalTitle.innerText = title;
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
}

// Cerrar modal al hacer click fuera del contenido
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
}
