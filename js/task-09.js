function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorSpanRef = document.querySelector(".color");
const changeColorRef = document.querySelector(".change-color");
const bodyRef = document.body;
changeColorRef.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  colorSpanRef.textContent = randomColor;
});
