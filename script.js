const display = document.getElementById('display');

function append(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value.replace(/÷/g,'/').replace(/×/g,'*').replace(/−/g,'-'));
  } catch {
    display.value = 'Error';
  }
}