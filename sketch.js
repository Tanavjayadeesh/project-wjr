
function preload(){
}

function setup(){
  createCanvas(400,400);
  Runner.createSprite = (400,400,50,50)
  path.createSprite(200,200);
  path.addImage(pathImg);
  path.velocity =  4;
  path.scale= 1.2;
}

if(path.y > 400 ){
  path.y = height/2;
}

function draw() {
  background(0);

}
