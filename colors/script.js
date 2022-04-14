const data = [
  'Teal',
  'SkyBlue',
  'DarkSeaGreen',
  'Purple',
  'LightPink',
  'Crimson'
];
const defaultColor = 'Silver';

// your code here...
data.forEach(function (color) {
  var option = document.createElement('option');
  option.value = color;
  option.text = color;
  document.getElementById('color-select').appendChild(option);
});
document.getElementById('color-select').onchange = function () {
  if (document.getElementById('color-select').options.selectedIndex > 0)
    document.getElementById('box').style.backgroundColor = document.getElementById('color-select').options[this.selectedIndex].text;
  else
    document.getElementById('box').style.backgroundColor = defaultColor;
  window.setTimeout(function (defaultColor) {
    document.getElementById('box').style.backgroundColor = defaultColor;
  }, 1000, defaultColor)
}