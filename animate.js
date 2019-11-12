function handleRapperAnimation (){
  if (CONTROLS.rapper.up) {
      RAPPER.y -= 5;}
  if (CONTROLS.rapper.down) {
      RAPPER.y += 5;}
  if (CONTROLS.rapper.right) {
      RAPPER.x += 5;}
  if (CONTROLS.rapper.left) {
      RAPPER.x -= 5;}
}

function runGame (){
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');

  handleRapperAnimation();
  context.clearRect(0, 0, 600, 300);
  RenderRapper(context);

  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
