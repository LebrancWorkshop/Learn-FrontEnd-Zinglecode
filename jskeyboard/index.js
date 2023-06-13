// Keyboard Event Listener
// Left Keyboard -> ArrowLeft
// Right Keyboard -> ArrowRight
// Up Keyboard -> ArrowUp
// Down Keyboard -> ArrowDown
// Command -> Meta
// Alt -> Alt
// Control -> Control
// Context Menu -> ContextMenu

const menuContent = document.querySelector('#menu');
const menus = ["Story", "Arcade", "VS", "Setting", "Credit", "Exit"];
// 0 1 2 3 4 5
// -6 -5 -4 -3 -2 -1
// -12 -11 -10 -9 -8 -7


let index = 0;
menuContent.innerHTML = menus[index];

function changeMenu(event) {
  switch(event.key) {
    case "ArrowLeft":
      index--;
      index = modMinus(index);
      menuContent.innerHTML = menus[index];
      break;
    case "ArrowRight":
      index++;
      index = index % menus.length;
      menuContent.innerHTML = menus[index];
      break;
  }
}

function modMinus(negNum) {
  while(negNum < 0) {
    negNum += menus.length;
  }
  return negNum % menus.length;
}

document.addEventListener('keydown', changeMenu);
