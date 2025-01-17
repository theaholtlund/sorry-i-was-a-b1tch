// Function to fetch compliments from the JSON file
async function fetchCompliments() {
  const response = await fetch(COMPLIMENTS_URL);
  const compliments = await response.json();
  return compliments;
}

// Function to generate a random compliment
async function generateCompliment() {
  const compliments = await fetchCompliments();

  // Get a random compliment from the fetched array
  const randomCompliment =
    compliments[Math.floor(Math.random() * compliments.length)];

  // Display the compliment in the compliment container
  document.getElementById("compliment-container").innerText = randomCompliment;
}

// Function to show the compliment and update the button
function showCompliment() {
  const complimentButton = document.getElementById("compliment-button");
  complimentButton.innerText = "GET ANOTHER ONE!";
  complimentButton.style.backgroundColor = "#ff1493";
}

// Function to show the surprise and update the interface
function showSurprise() {
  document.getElementById("surprise").style.display = "block";
  document.getElementById("apology-text").innerText =
    "But I promise to make it up to you! 💖";

  const surpriseButton = document.getElementById("surprise-button");
  surpriseButton.innerText = "SURPRISE UNLOCKED!";
  surpriseButton.style.backgroundColor = "#ff1493";
}

// Function to reposition images at set locations
function setImages() {
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

// Forgiveness counter logic with button
let forgivenessCount = 0;

function incrementForgiveness() {
  forgivenessCount++;
  document.getElementById("forgiveness-number").innerText = forgivenessCount;
  document.getElementById("forgive-button").innerText = "THANK YOU!";
}

// Position images randomly when the page loads
window.onload = setImages;
