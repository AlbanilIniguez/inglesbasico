// alphabet.js



const buttons = document.querySelectorAll('.card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const letter = button.getAttribute('data-letter').toLowerCase();
    const audio = new Audio(`topics/sounds/${letter}.mp3`);
    audio.play().catch(err => {
      console.error(`Error al reproducir el sonido ${letter}.mp3`, err);
    });
  });
});
