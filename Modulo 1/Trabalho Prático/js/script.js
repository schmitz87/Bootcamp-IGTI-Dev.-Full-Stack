var inputRed = document.querySelector('#inputRed');
var inputGreen = document.querySelector('#inputGreen');
var inputBlue = document.querySelector('#inputBlue');

var rangeRed = document.querySelector('#rangeRed');
var rangeGreen = document.querySelector('#rangeGreen');
var rangeBlue = document.querySelector('#rangeBlue');

var divSquare = document.querySelector('#divSquare');

function start() {
  rangeRed.addEventListener('input', redValue);
  rangeGreen.addEventListener('input', greenValue);
  rangeBlue.addEventListener('input', blueValue);

  /*redValue();
  greenValue();
  blueValue();*/
}
function redValue(event) {
  var RValue = event.target.value;
  inputRed.value = RValue;
  setRGB();
}
function greenValue(event) {
  var GValue = event.target.value;
  inputGreen.value = GValue;
  setRGB();
}

function blueValue(event) {
  var BValue = event.target.value;
  inputBlue.value = BValue;
  setRGB();
}

function setRGB() {
  divSquare.setAttribute(
    'style',
    'background-color: rgb(' +
      inputRed.value +
      ',' +
      inputGreen.value +
      ',' +
      inputBlue.value +
      ')'
  );
}
start();
