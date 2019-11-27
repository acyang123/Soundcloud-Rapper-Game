
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
       	y : 3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : 2,
       	y : 3
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
    initialized : true
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
       	y : 3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : 2,
       	y : 3
      },
      {
        x : 0,
       	y : 3
      }
    ],
    latest : {
        x : HATER.x,
        y : HATER.y,
    },
    scale : 5,
    speed : 3,
    initialized : true,

  };
}

function InitializeHaterTwo() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  HATERTWO = {
    x : 600,
    y :Math.random()*300+1,
    positions : [
      {
        x : 0,
       	y : 3
      },
      {
        x : 2,
       	y : 3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : 2,
       	y : 3
      },
      {
        x : 0,
       	y : 3
      }
    ],
    latest : {
        x : HATERTWO.x,
        y : HATERTWO.y,
    },
    scale : 5,
    speed : 3,
    initialized : true

  };
}

function InitializeHaterThree() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  HATERTHREE = {
    x : 600,
    y :Math.random()*300+1,
    positions : [
      {
        x : 0,
       	y : 3
      },
      {
        x : 2,
       	y : 3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : 2,
       	y : 3
      },
      {
        x : 0,
       	y : 3
      }
    ],
    latest : {
        x : HATERTHREE.x,
        y : HATERTHREE.y,
    },
    scale : 5,
    speed : 3,
    initialized : true

  };
}
function InitializeBlockOne() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  BLOCKONE = {
    x : Math.random()*1000+1,
    y :Math.random()*500+1,
    positions : [
      {
        x : 0,
       	y : 3
      },
      {
        x : 2,
       	y : 3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : 2,
       	y : 3
      },
      {
        x : 0,
       	y : 3
      }
    ],
    latest : {
        x : BLOCKONE.x,
        y : BLOCKONE.y,
    },
    scale : 5,
    speed : 3,
    initialized : true

  };
}

function InitializeBlockTwo() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  BLOCKTWO = {
    x : Math.random()*900+1,
    y :Math.random()*600+1,
    positions : [
      {
        x : 0,
       	y : 3
      },
      {
        x : 2,
       	y : 3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : 2,
       	y : 3
      },
      {
        x : 0,
       	y : 3
      }
    ],
    latest : {
        x : BLOCKTWO.x,
        y : BLOCKTWO.y,
    },
    scale : 5,
    speed : 3,
    initialized : true

  };
}

function InitializeBlockThree() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  BLOCKTHREE = {
    x : Math.random()*500+1,
    y :Math.random()*300+1,
    positions : [
      {
        x : 0,
       	y : 3
      },
      {
        x : 2,
       	y : 3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : 2,
       	y : 3
      },
      {
        x : 0,
       	y : 3
      }
    ],
    latest : {
        x : BLOCKTHREE.x,
        y : BLOCKTHREE.y,
    },
    scale : 5,
    speed : 3,
    initialized : true

  };
}

function InitializeBlockFour() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  BLOCKFOUR = {
    x : Math.random()*700+1,
    y :Math.random()*400+1,
    positions : [
      {
        x : 0,
       	y : 3
      },
      {
        x : 2,
       	y : 3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : 2,
       	y : 3
      },
      {
        x : 0,
       	y : 3
      }
    ],
    latest : {
        x : BLOCKFOUR.x,
        y : BLOCKFOUR.y,
    },
    scale : 5,
    speed : 3,
    initialized : true

  };
}
