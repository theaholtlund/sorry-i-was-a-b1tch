// Function to show the surprise and update the interface
function showSurprise() {
  document.getElementById("surprise").style.display = "block";
  document.getElementById("apology-text").innerText =
    "But I promise to make it up to you! 💖";

  const button = document.querySelector("button");
  button.innerText = "SURPRISE UNLOCKED!";
  button.style.backgroundColor = "#ff1493";

  repositionImages();
}

// Function to reposition images randomly on the screen
function repositionImages() {
  const img1 = document.getElementById("sorry-man");
  const img2 = document.getElementById("sorry-woman");

  // Position the first image
  randomPosition(img1);

  // Position the second image, ensuring it does not overlap with the first
  randomPosition(img2, img1);
}

// Function to randomly position an image while avoiding overlap with elements
function randomPosition(element, otherElement = null) {
  const imageSize = 100;
  const { innerWidth: viewportWidth, innerHeight: viewportHeight } = window;

  const isOverlapping = (x, y, rect) =>
    x + imageSize > rect.left &&
    x < rect.right &&
    y + imageSize > rect.top &&
    y < rect.bottom;

  const isValidPosition = (x, y) => {
    const containerRect = document
      .querySelector(".outer-container")
      .getBoundingClientRect();
    const apologyRect = document
      .getElementById("apology-container")
      .getBoundingClientRect();
    const surpriseRect = document
      .getElementById("surprise")
      .getBoundingClientRect();
    const otherRect = otherElement
      ? otherElement.getBoundingClientRect()
      : null;

    const overlappingRects = [containerRect, apologyRect, surpriseRect];
    if (otherRect) overlappingRects.push(otherRect);

    return (
      x >= 0 &&
      y >= 0 &&
      x + imageSize <= viewportWidth &&
      y + imageSize <= viewportHeight &&
      !overlappingRects.some((rect) => isOverlapping(x, y, rect))
    );
  };

  let x, y;
  do {
    x = Math.random() * (viewportWidth - imageSize);
    y = Math.random() * (viewportHeight - imageSize);
  } while (!isValidPosition(x, y));

  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
}

// Position images randomly when the page loads
window.onload = repositionImages;
