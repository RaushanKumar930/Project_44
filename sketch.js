var bgImg, knifeImg, apple, banana, orange, pineapple, strawberry, stone, rohan;
var knife, appleImg, bananaImg, orangeImg, pineappleImg, strawberryImg, stoneImg, rohanImg;
var appleGroup, bananaGroup, orangeGroup, pineappleGroup, strawberryGroup, stoneGroup;
var score = 0, visibility = 254
var vNumber = 0
var gameState = "play"
var fC =50

function preload(){
  bgImg = loadImage("images/bg.jpg");
  knifeImg = loadImage("images/knife.png");
  appleImg = loadImage("images/apple.png");
  bananaImg = loadImage("images/banana.png");
  orangeImg = loadImage("images/orange.png");
  pineappleImg = loadImage("images/pineapple.png");
  strawberryImg = loadImage("images/strawberry.png");
  stoneImg = loadImage("images/stone.png")
  rohanImg = loadImage("images/Rohan.png")

}

function setup() {
  createCanvas(600,600);
  rohan = createSprite(300,300);
  rohan.addImage(rohanImg);
  rohan.scale = 0.3;

  knife = createSprite(300,300);
  knife.addImage(knifeImg);
  knife.scale = 0.1;

  appleGroup = new Group();
  bananaGroup = new Group();
  orangeGroup = new Group();
  pineappleGroup = new Group();
  strawberryGroup = new Group();
  stoneGroup = new Group();
}

function draw() {
  background(bgImg);
  if(gameState === "play"){
    fill("white");
    stroke("white");
    textSize(25);
    text("Move the knife using your mouse",120,50);
    textSize(18)
    stroke("")
    text("Don't try to slice the stone", 200,130);
    
    vNumber--
    if(visibility > vNumber ){
      visibility -= 5
    }else{
      vNumber = 255
    } 
    if(visibility < vNumber){
      visibility += 10
    }else{
      vNumber = 0
    }
    
    knife.x = mouseX;
    knife.y = mouseY;

    rohan.x = mouseX + 35;
    rohan.y = mouseY + 35;

    if(frameCount % 100 === 0){
      fC--
    }
  }
  if(gameState === "play"){
    spwanFruits();
  }
  if(knife.isTouching(appleGroup)){
    appleGroup.destroyEach();
    score += 2
  }
  if(knife.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score += 4
  }
  if(knife.isTouching(orangeGroup)){
    orangeGroup.destroyEach();
    score += 3
  }
  if(knife.isTouching(pineappleGroup)){
    pineappleGroup.destroyEach();
    score += 5
  }
  if(knife.isTouching(strawberryGroup)){
    strawberryGroup.destroyEach();
    score += 1
  }
  if(knife.isTouching(stoneGroup)){
    knife.destroy();
    rohan.destroy();
    gameState = "end";
    stoneGroup.destroyEach();
    appleGroup.destroyEach();
    bananaGroup.destroyEach();
    orangeGroup.destroyEach();
    pineappleGroup.destroyEach();
  }
  if(gameState === "play"){
  fill(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)));
  stroke(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)));
  }else{
  fill("red");
  }
  textSize(25);
  text("Score: " + score, 250, 100);
  textSize(20);
  if(gameState === "play"){
  fill(255 - visibility,visibility + 50,visibility + 20);
  stroke(255 - visibility,visibility + 50,visibility + 20);
  }else{
    fill("red")
    stroke("red");
  }
  textSize(18)
  text("Strawberry = 1 point",50,80);
  text("Apple = 2 point", 50,100);
  text("Banana = 4 point", 50,120);
  text("Orange = 3 point", 50, 140);
  text("Pineapple = 5 point", 50, 160);

  if(gameState === "end"){
    fill("red");
    stroke("darkred");
    textSize(50);
    text("You Lost",200,300);
    fill("goldenrod");
    textSize(35);
    text("Press R to Restart", 150,350);
    if(keyDown("r")){
      gameState = "play";
      rohan = createSprite(300,300);
      rohan.addImage(rohanImg);
      rohan.scale = 0.3;

      knife = createSprite(300,300);
      knife.addImage(knifeImg);
      knife.scale = 0.1;

      score = 0;
    }
  }
  drawSprites();
}

function spwanFruits(){
  var rand = Math.round(random(1,6))
  if(frameCount % fC === 0){
    if(rand === 1){
      pineapple = createSprite(Math.round(random(10,590)),150);
      pineapple.addImage(pineappleImg);
      pineapple.scale = 0.2;
      pineapple.velocityY = 5;
      pineapple.lifetime = 95;
      pineappleGroup.add(pineapple);
    }else if(rand === 2){
      strawberry = createSprite(Math.round(random(10,590)),150);
      strawberry.addImage(strawberryImg);
      strawberry.scale = 0.14;
      strawberry.velocityY = 5;
      strawberry.lifetime = 95;
      strawberryGroup.add(strawberry);
    }else if(rand === 3){
      apple = createSprite(Math.round(random(10,590)),150);
      apple.addImage(appleImg);
      apple.scale = 0.1;
      apple.velocityY = 5;
      apple.lifetime = 95;
      appleGroup.add(apple);
    }else if(rand === 4){
      banana = createSprite(Math.round(random(10,590)),150);
      banana.addImage(bananaImg);
      banana.scale = 0.3;
      banana.velocityY = 5;
      banana.lifetime = 95;
      bananaGroup.add(banana);
    }else if(rand === 5){
      orange = createSprite(Math.round(random(10,590)),150);
      orange.addImage(orangeImg);
      orange.scale = 0.3;
      orange.velocityY = 5;
      orange.lifetime = 95;
      orangeGroup.add(orange);
    }else if(rand === 6){
      stone = createSprite(Math.round(random(10,590)),150);
      stone.addImage(stoneImg);
      stone.scale = 0.1;
      stone.velocityY = 5;
      stone.lifetime = 95;
      stoneGroup.add(stone);
    }
  }
}
