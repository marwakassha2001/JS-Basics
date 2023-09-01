const greenDiv = document.querySelector('.green');
const redDiv = document.querySelector('.red');
const blueDiv = document.querySelector('.blue');
const textElement = document.getElementById('text');

function changeTextColor(color) {
  textElement.style.color = color;
}

greenDiv.addEventListener('click', function() {
  changeTextColor('green');
});

redDiv.addEventListener('click', function() {
  changeTextColor('red');
});

blueDiv.addEventListener('click', function() {
  changeTextColor('blue');
});