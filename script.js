// --- Audio du clic
const clickSound = new Audio('sounds/click.mp3');

// Sélection du bouton
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
  // Joue le son
  clickSound.play();

  // Affiche une petite animation ou alerte personnalisée
  showPopup("Merci pour votre abonnement 💌");

  // Optionnel : effet visuel (flash/confetti ici)
  flashEffect();
});

// Affichage d'une notification stylée
function showPopup(message) {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerText = message;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add('visible');
  }, 100);

  setTimeout(() => {
    popup.classList.remove('visible');
    setTimeout(() => popup.remove(), 500);
  }, 3000);
}

// Petit effet visuel
function flashEffect() {
  const flash = document.createElement('div');
  flash.className = 'flash';
  document.body.appendChild(flash);

  setTimeout(() => flash.remove(), 500);
}
