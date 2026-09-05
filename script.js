const introModal = document.getElementById('introModal');
const finalLetter = document.getElementById('finalLetter');
const acceptanceCard = document.getElementById('acceptanceCard');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

const playMusic = async () => {
  if (!bgMusic) return;

  try {
    await bgMusic.play();
    if (musicToggle) {
      musicToggle.classList.remove('hidden');
      musicToggle.textContent = '🔊';
    }
  } catch (error) {
    if (musicToggle) {
      musicToggle.classList.remove('hidden');
      musicToggle.textContent = '🔇';
    }
  }
};

if (musicToggle && bgMusic) {
  musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggle.textContent = '🔊';
    } else {
      bgMusic.pause();
      musicToggle.textContent = '🔇';
    }
  });
}

if (yesBtn && noBtn && introModal && finalLetter && acceptanceCard) {
  const moveNoButton = () => {
    if (noBtn.classList.contains('is-hidden')) return;

    const margin = 18;
    const maxX = Math.max(window.innerWidth - noBtn.offsetWidth - margin, margin);
    const maxY = Math.max(window.innerHeight - noBtn.offsetHeight - margin, margin);

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${Math.random() * maxX}px`;
    noBtn.style.top = `${Math.random() * maxY}px`;
    noBtn.style.transform = `scale(${(Math.random() * 0.7 + 0.45).toFixed(2)})`;
    noBtn.style.fontSize = `${(Math.random() * 5 + 13).toFixed(0)}px`;
  };

  noBtn.addEventListener('mouseenter', moveNoButton);
  noBtn.addEventListener('click', () => {
    moveNoButton();
    noBtn.classList.add('is-hidden');
    setTimeout(() => {
      noBtn.style.display = 'none';
    }, 250);
  });

  yesBtn.addEventListener('click', () => {
    acceptanceCard.classList.add('is-closing');
    document.body.classList.add('letter-open');

    setTimeout(() => {
      introModal.classList.add('hidden');
      finalLetter.classList.remove('hidden');
      setTimeout(() => finalLetter.classList.add('visible'), 80);
    }, 450);

    playMusic();
  });
}
