var dog, happyDog, database, foodS, foodStock, firebase;

function preload(){
	thedog = loadImage('images/dogImg.png');
  happyDog = loadImage('images/dogImg1.png')
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog=createSprite(250,250,10,10);
  dog.addImage(thedog)
  dog.scale=0.5;

}

function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  textSize(15);
  fill('white')
  text("Press Up Arrow to feed the dog",250,450);
  text("Food left: "+foodS,250,475);
}

function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  if(x<=0){
    x=0
  } else {
    x--;
  }

  database.ref('/').update({
    Food:x
  });
}





