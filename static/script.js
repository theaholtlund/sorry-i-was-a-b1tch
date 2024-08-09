// Function to make the surprise element visible
function showSurprise() {
  document.getElementById("surprise").style.display = "block";
}

// Function to position an element randomly on the screen, avoiding overlap with a container
function randomPosition(element) {
  const container = document.querySelector(".outer-container");
  const containerRect = container.getBoundingClientRect();
  const imageSize = 100;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let x, y;

  do {
    // Generate random x and y coordinates within the viewport, ensuring the element stays within bounds
    x = Math.floor(Math.random() * (viewportWidth - imageSize));
    y = Math.floor(Math.random() * (viewportHeight - imageSize));
  } while (
    // Check if the element overlaps with the container, and retry if it does
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
