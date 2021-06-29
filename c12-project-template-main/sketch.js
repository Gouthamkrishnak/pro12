var garden,rabbit,apple,red;
var gardenImg,rabbitImg,carrotImg,redImg;

var random = Math.round;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  
  carrotImg = loadImage("apple.png");

  redImg = loadImage ("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  // boy moving on Xaxis with mouse'
  if(keyDown("right")){
  rabbit.velocityX = 5;
  }

  if(keyDown("left")){
  rabbit.velocityX = -4;
    }
    var select_sprites = Math.round(random(1,2));
    if(frameCount % 80 == 0){
    if(select_sprites == 1){
    
        function createApples(){
      apple.createSprite(random(50,350),40,10,10);
      apple.addImage(carrotImg);
      apple.velocityY = -4;
      apple.lifetime = 250;
      }
    
    }
    
    
    
    }

   createApples();
  
   drawSprites();
  
  

}
