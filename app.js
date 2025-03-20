// UH OH!
// Creates 3 consants r, g, b
function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = 5;
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// To change each letter independently
const letters = document.querySelectorAll('.letter');
const intervalId = setInterval(function() {
  for (let letter of letters) {
    letter.style.color = randomRGB();
  }
}, 1000);