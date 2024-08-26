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
  const images = [
    document.getElementById("sorry-man"),
    document.getElementById("sorry-woman"),
  ];
  const containers = [
    document.querySelector(".outer-container").getBoundingClientRect(),
    document.getElementById("surprise").getBoundingClientRect(),
  ];

  images.forEach((img, index) => {
    let position;
    do {
      position = getRandomPosition(img);
    } while (
      !isValidPosition(position, img, containers, images.slice(0, index))
    );

    img.style.left = `${position.x}px`;
    img.style.top = `${position.y}px`;
  });
}

// Function to get a random position within the viewport
function getRandomPosition(element) {
  const { innerWidth: vw, innerHeight: vh } = window;
  const size = 100;
  return {
    x: Math.random() * (vw - size),
    y: Math.random() * (vh - size),
  };
}

// Function to check if a position is valid
function isValidPosition({ x, y }, element, containers, otherImages) {
  const size = 100;
  const rect = { left: x, top: y, right: x + size, bottom: y + size };

  // Check if element is within viewport bounds
  if (
    x < 0 ||
    y < 0 ||
    rect.right > window.innerWidth ||
    rect.bottom > window.innerHeight
  ) {
    return false;
  }

  // Check if element overlaps with any container
  if (containers.some((container) => isOverlapping(rect, container))) {
    return false;
  }

  // Check if element overlaps with any other image
  if (
    otherImages.some((img) => isOverlapping(rect, img.getBoundingClientRect()))
  ) {
    return false;
  }

  return true;
}

// Function to check if two rectangles overlap
function isOverlapping(rect1, rect2) {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

// Position images randomly when the page loads
window.onload = repositionImages;
