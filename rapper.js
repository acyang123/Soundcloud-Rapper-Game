function InitializeRapper (){
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  RAPPER = {
    x : 100,
    y : 100,
  }


}

function RenderRapper (context){
  context.fillRect (RAPPER.x, RAPPER.y, 25,25);
}
