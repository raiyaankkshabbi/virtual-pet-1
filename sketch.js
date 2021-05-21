 var dog,happydog;
 var img;
var database;
var foods,foodStock

function preload()
{
 img = loadImage("images/dogImg.png")
 happydog = loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(800, 700);

  database = firebase.database()
 dog = createSprite(250,300,150,150)
  dog.addImage(img)
  dog.scale=0.15

  foodStock = database.ref("Food")
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(happydog)
}

  drawSprites();
  textSize(30)
  fill("white")
  text("food remaining :  "+foods,170,200)
 text("note : press UP_ARROW key to feed drago Milk",130,30)
}

function readStock(data){
  foods = data.val();

}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else
  {
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


