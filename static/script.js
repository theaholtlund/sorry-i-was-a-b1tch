function showSurprise() {
  document.getElementById("surprise").style.display = "block";
}

function randomPosition(element) {
  const container = document.querySelector(".outer-container");
  const containerRect = container.getBoundingClientRect();
  const imageSize = 100;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let x, y;

  do {
    x = Math.floor(Math.random() * (viewportWidth - imageSize));
    y = Math.floor(Math.random() * (viewportHeight - imageSize));
  } while (
    x + imageSize > containerRect.left &&
    x < containerRect.right &&
    y + imageSize > containerRect.top &&
    y < containerRect.bottom
  );

  element.style.left = x + "px";
  element.style.top = y + "px";
}

window.onload = function () {
  const img1 = document.getElementById("sorry-man");
  const img2 = document.getElementById("sorry-woman");
  randomPosition(img1);
  randomPosition(img2);
};
