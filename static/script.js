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

// Function to reposition images at set locations
function repositionImages() {
  const container = document.getElementById("apology-container");
  const h1 = container.querySelector("h1");
  const containerRect = container.getBoundingClientRect();
  const h1Rect = h1.getBoundingClientRect();

  // Calculate the height of the heading element and set image positions
  const h1Height = h1Rect.top - containerRect.top + h1Rect.height / 2;

  // Set the position for the images
  document.getElementById("sorry-man").style.left = `${
    containerRect.left - 120
  }px`;
  document.getElementById("sorry-man").style.top = `${h1Height}px`;

  document.getElementById("sorry-woman").style.left = `${
    containerRect.right + 20
  }px`;
  document.getElementById("sorry-woman").style.top = `${h1Height}px`;
}

// Generate a random compliment
function generateCompliment() {
  const compliments = [
    "You're amazing!",
    "You're a true friend.",
    "You have a great sense of humor!",
    "You light up the room.",
    "Your positivity is contagious!",
    "You're an inspiration to everyone around you.",
    "You bring out the best in other people.",
    "You're a fantastic listener.",
    "Your creativity knows no bounds!",
    "You're someone who always makes a difference.",
  ];

  // Get a random compliment from the array
  const randomCompliment =
    compliments[Math.floor(Math.random() * compliments.length)];

  // Display the compliment in the compliment container
  document.getElementById("compliment-container").innerText = randomCompliment;
}

// Position images randomly when the page loads
window.onload = repositionImages;
