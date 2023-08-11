/*
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carousel = document.querySelector(".carousel");

let currentIndex = 0;

function showImage(index) {
  const images = carousel.querySelectorAll("img");
  images.forEach((img, i) => {
    if (i === index) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

function prevImage() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % 3;
  showImage(currentIndex);
}

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

showImage(currentIndex);
*/

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carousel = document.querySelector(".carousel");

let currentIndex = 0;

function showImage(index) {
  const images = carousel.querySelectorAll("img");
  images.forEach((img, i) => {
    if (i === index) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

function prevImage() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % 3;
  showImage(currentIndex);
}

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

showImage(currentIndex);
