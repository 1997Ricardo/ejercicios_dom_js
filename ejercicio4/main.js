// 1.1 Evento 'click' en el botón que muestra info del evento
const btn = document.getElementById('btnToClick');

btn.addEventListener('click', (event) => {
  console.log('🖱️ Has hecho clic en el botón');
  console.log('Información del evento:', event);
});

// 1.2 Evento 'focus' que muestra el valor del input con clase .focus
const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', () => {
  console.log('👁️ Input con focus tiene el valor:', inputFocus.value);
});

// 1.3 Evento 'input' que muestra el valor conforme se escribe
const inputValue = document.querySelector('.value');

inputValue.addEventListener('input', () => {
  console.log('⌨️ Valor actual del input:', inputValue.value);
});
