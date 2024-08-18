// Function to show the surprise and update the UI
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
  const images = ["sorry-man", "sorry-woman"].map((id) =>
    document.getElementById(id)
  );
  images.forEach(randomPosition);
}

// Function to randomly position an image while avoiding overlap with text and container
function randomPosition(element) {
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

    return ![containerRect, apologyRect, surpriseRect].some((rect) =>
      isOverlapping(x, y, rect)
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
