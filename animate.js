/**
 *  handleRAPPERAnimation moves the RAPPER based on its direction and
 *    keyboard control
 *
 */
function handleRapperAnimation() {
  if (CONTROLS.rapper.up) {
    RAPPER.y -= RAPPER.speed;
  }
  if (CONTROLS.rapper.down) {
    RAPPER.y += RAPPER.speed;
  }
  if (CONTROLS.rapper.right) {
    RAPPER.x+=RAPPER.speed
  }
  if (CONTROLS.rapper.left) {
    RAPPER.x-=RAPPER.speed
  }

  RAPPER.x+=RAPPER.speed  // Check if asteroid is leaving the boundary, if so, switch sides
if (RAPPER.x > GAME.canvas.width) {
    RAPPER.x = 0;
  } else if (RAPPER.x < 0) {
    RAPPER.x = 600;
  } else if (RAPPER.y > GAME.canvas.height) {
    RAPPER.y = 0;
  } else if (RAPPER.y < 0) {
    RAPPER.y = 300;
  }
}

function handleHaterAnimation() {
  HATER.x+=HATER.speed
  HATER.y=RAPPER.y

  // Check if asteroid is leaving the boundary, if so, switch sides
if (RAPPER.x > GAME.canvas.width) {
  HATER.x = -HATER.distance;
}
else if (RAPPER.y > GAME.canvas.height) {
  HATER.y = 0;
} else if (RAPPER.y < 0) {
  HATER.y = 300;
}
}
function handleHater2Animation() {
  var num=Math.random()*4+1;
  if (num==1)
{
  HATER2.x-=HATER2.speed
}
else if (num==2)
{
HATER2.x-=HATER2.speed
}
else if (num==3)
{
HATER2.y+=HATER2.speed
}
else if (num==4)
{
HATER2.y-=HATER2.speed
}
  // Check if asteroid is leaving the boundary, if so, switch sides
  if (HATER2.x > GAME.canvas.width) {
    HATER2.x = 0;
  } else if (RAPPER.x < 0) {
    HATER2.x = 600;
  } else if (RAPPER.y > GAME.canvas.height) {
    HATER2.y = 0;
  } else if (RAPPER.y < 0) {
    HATER2.y = 300;
  }
}
function handleBlockAnimation()
{
  BLOCK.x+=BLOCK.speed;

  // Check if asteroid is leaving the boundary, if so, switch side
}
function RenderRapper(context) {
  context.fillStyle = "#000000";
  context.fillRect(RAPPER.x,RAPPER.y,50,50);
  // Draw a new item here using the canvas 'context' variable
}
function RenderHater(context) {
  context.fillStyle = "#000000";
  context.fillRect(HATER.x,HATER.y,50,50);
  // Draw a new item here using the canvas 'context' variable
}
function RenderHater2(context) {
  context.fillStyle = "#000000";
  context.fillRect(HATER2.x,HATER2.y,50,50);
  // Draw a new item here using the canvas 'context' variable
}
function RenderBlock (context)
{
  context.fillStyle = "#000000";
  context.fillRect(BLOCK.x,BLOCK.y,50,50);
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    context.clearRect(0,0,GAME.canvas.width,GAME.canvas.height);
    RenderRapper(context);
    RenderHater(context);
    RenderHater2(context);
    RenderBlock(context);
    handleRapperAnimation();
    handleHaterAnimation();
    handleHater2Animation();
    handleBlockAnimation();


    if (BLOCK.x==0)
    {
      handleBlockAnimation();
      RenderBlock(context)
    }
    if (HATER2.x==0)
    {
      handleHater2Animation();
      RenderHater2();
    }


  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
