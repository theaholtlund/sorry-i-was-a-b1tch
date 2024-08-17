// Function to make the surprise element visible
function showSurprise() {
  const surpriseElement = document.getElementById("surprise");
  surpriseElement.style.display = "block";

  // Update the apology message after the button is clicked
  const apologyText = document.getElementById("apology-text");
  apologyText.innerText = "But I promise to make it up to you! 💖";

  // Change the button text and style to indicate something happened
  const button = document.querySelector("button");
  button.innerText = "SURPRISE UNLOCKED!";
  button.style.backgroundColor = "#ff1493";

  // Reposition images to avoid overlap with the surprise text
  repositionImages();
}

// Function to reposition images to avoid overlap with the surprise text
function repositionImages() {
  const img1 = document.getElementById("sorry-man");
  const img2 = document.getElementById("sorry-woman");

  // Reposition images
  randomPosition(img1);
  randomPosition(img2);
}

// Function to position an element randomly on the screen, avoid overlap with main container and surprise text
function randomPosition(element) {
  const container = document.querySelector(".outer-container");
  const containerRect = container.getBoundingClientRect();
  const imageSize = 100;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let x, y;

  do {
    // Generate random coordinates within viewport to ensure element stays within bounds
    x = Math.floor(Math.random() * (viewportWidth - imageSize));
    y = Math.floor(Math.random() * (viewportHeight - imageSize));
  } while (
    // Check if element overlaps with the container, surprise text or apology text and retry if it does
    (x + imageSize > containerRect.left &&
      x < containerRect.right &&
      y + imageSize > containerRect.top &&
      y < containerRect.bottom) ||
    (x + imageSize > surpriseRect.left &&
      x < surpriseRect.right &&
      y + imageSize > surpriseRect.top &&
      y < surpriseRect.bottom) ||
    (x + imageSize > apologyRect.left &&
      x < apologyRect.right &&
      y + imageSize > apologyRect.top &&
      y < apologyRect.bottom)
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
