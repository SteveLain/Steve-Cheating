const startDate = new Date('2024-12-13T00:00:00');
const clockElement = document.getElementById('clock');

function updateClock() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  clockElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateClock, 1000);
updateClock();