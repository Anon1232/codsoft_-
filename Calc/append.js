const display = document.getElementById("display");
const sound = document.getElementById("click-sound");

function playSound() {
  sound.currentTime = 0;
  sound.play();
}

function press(key) {
  playSound();

  if (key === 'clr') {
    display.value = '';
  } else if (key === 'back') {
    display.value = display.value.slice(0, -1);
  } else if (key === '=') {
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = "wind error 💨";
    }
  } else {
    display.value += key;
  }
}
