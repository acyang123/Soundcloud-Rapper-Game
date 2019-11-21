
// Populate a global variable for the RAPPER
function InitializeRapper() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  RAPPER = {
    x : 300,
    y : 150,
    positions : [
      {
        x : 0,
       	y : 3
      },
      {
        x : 2,
       	y : -3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : -2,
       	y : -3
      },
      {
        x : 0,
       	y : 3
      }
    ],
    latest : {
        x : RAPPER.x,
        y : RAPPER.y,
    },
    scale : 5,
    speed : 3,
    initialized : true,
    clout:0
  };
}

function InitializeBlock()
{
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  var BLOCK={
    x: 600,
    y: Math.random()*150+1,
    positions : [
      {
        x : 0,
       	y : 3
      },
      {
        x : 2,
       	y : -3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : -2,
       	y : -3
      },
      {
        x : 0,
       	y : 3
      }],
      latest : {
          x : BLOCK.x,
          y : BLOCK.y,
      },
      scale : 5,
      speed : 3,
      initialized : true,
  };
}


// Populate a global variable for the RAPPER
function InitializeHater() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  HATER = {
    x : 0,
    y : 150,
    distance: 150,
    positions : [
      {
        x : 0,
       	y : 3
      },
      {
        x : 2,
       	y : -3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : -2,
       	y : -3
      },
      {
        x : 0,
       	y : 3
      }
    ],
    latest : {
        x : HATER.x,
        y : RAPPER.y,
        distance: RAPPER.x-HATER.x,
    },
    scale : 5,
    speed : 3,
    initialized : true,

  };
}

function InitializeHater2() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  HATER2= {
    x : 600,
    y : Math.random()*150+1,
    positions : [
      {
        x : 1,
       	y : 2
      },
      {
        x : 1,
       	y : -1
      },
      {
        x : 1,
       	y : 1
      },
      {
        x : -1,
       	y : -2
      },
      {
        x : 1,
       	y : 2
      }
    ],
    latest : {
        x :HATER2.x,
        y : HATER2.y,
    },
    scale : 5,
    speed : 3,
    initialized : true,
  };
}

function RenderHATER (context) {
  if (!HATER.initialized)
  {
    return;
  }
}
function RenderHATER2 (context) {
  if (!HATER2.initialized)
  {
    return;
  }
}

function RenderBlock(context)
{
  if (!BLOCK.initialized)
  {
    return;
  }
}
