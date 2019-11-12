var CONTROLS = {
  rapper : {
    up : false,
    down : false,
    left : false,
    right : false
  }
};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.rapper.up = true;
      break;
    case "ArrowDown":
      CONTROLS.rapper.down = true;
      break;
    case "ArrowLeft":
      CONTROLS.rapper.left = true;
      break;
    case "ArrowRight":
      CONTROLS.rapper.right = true;
      break;
    default:
      break;
  }
});

document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.rapper.up = false;
      break;
    case "ArrowDown":
      CONTROLS.rapper.down = false;
      break;
    case "ArrowLeft":
      CONTROLS.rapper.left = false;
      break;
    case "ArrowRight":
      CONTROLS.rapper.right = false;
      break;
    default:
      break;
  }
});
