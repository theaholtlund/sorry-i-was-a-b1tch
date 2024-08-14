// Function to make the surprise element visible
function showSurprise() {
  document.getElementById("surprise").style.display = "block";

  // Update the apology message after the button is clicked
  const apologyText = document.getElementById("apology-text");
  apologyText.innerText = "But I promise to make it up to you! 💖";

  // Change the button text and style to indicate something happened
  const button = document.querySelector("button");
  button.innerText = "SURPRISE UNLOCKED!";
  button.style.backgroundColor = "#ff1493";
}

// Function to position an element randomly on the screen, avoid overlap with main container
function randomPosition(element) {
  const container = document.querySelector(".outer-container");
  const containerRect = container.getBoundingClientRect();
  const imageSize = 100;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let x, y;

  do {
    // Generate random coordinates within viewport to ensure element stay within bounds
    x = Math.floor(Math.random() * (viewportWidth - imageSize));
    y = Math.floor(Math.random() * (viewportHeight - imageSize));
  } while (
    // Check if element overlaps with the container and retry if it does
    x + imageSize > containerRect.left &&
    x < containerRect.right &&
    y + imageSize > containerRect.top &&
    y < containerRect.bottom
  );

  // Position the element at the calculated coordinates
  element.style.left = x + "px";
  element.style.top = y + "px";
}

// On window load, position two images randomly on the screen
window.onload = function () {
  const img1 = document.getElementById("sorry-man");
  const img2 = document.getElementById("sorry-woman");
  randomPosition(img1);
  randomPosition(img2);
};
