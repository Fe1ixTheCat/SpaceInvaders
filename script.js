var cnv = document.getElementById('canvas');
var ctx = cnv.getContext('2d');

var player = new Image();
var enemy1 = new Image();
var enemy2 = new Image();
var playerLaser = new Image();
var enemyLaser = new Image();

player.src = "img/player.png";
enemy1.src = "img/enemy1.png";
enemy2.src = "img/enemy2.png";
playerLaser.src = "img/playerLaser.png";
enemyLaser.src = "img/enemyLaser.png";

//движение игрока
var pressedSpace = false;

document.addEventListener("keydown", KeyDown, false);
document.addEventListener("keyup", KeyUp, false);


function KeyDown(e) {
  if(e.keyCode == "32") {
  	pressedSpace = true;
  }
}
function KeyUp(e) {
  if(e.keyCode == "32") {
  	pressedSpace = false;
  }
}

document.addEventListener('keydown', function(e) {
  if (e.keyCode == "65") {
    if (xPos > 0) {
      xPos -= 10
    }
  } else if (e.keyCode == "68") {
    if (xPos < 900) {
      xPos += 10;
    }
  }
});




function pause() {
  alert("Пауза. Нажми ОК чтобы продолжить")
}

const bullets = [];
class Bullet {
  constructor() {
    this.x = xPos + 45;
    this.y = 450;
    bullets.push(this);
  }
  draw(){
      this.y--;

    //  ctx.fillStyle = "blue";
    //  ctx.fillRect(this.x, this.y, 5, 10);
      ctx.drawImage(playerLaser, this.x, this.y);
   }
}

const enemyBullets = [];
class EnemyBullet {
  constructor() {
    this.x = en1PosX + Math.floor(Math.random() * 800);
    this.y = 85;
    enemyBullets.push(this);
  }
  draw(){
      this.y++;
      let color = Math.floor(Math.random() * 5);
      let colour = "blue";
      if (color == 1) {
        colour = "lime";
      } else if (color == 2) {
        colour = "red";
      } else if (color == 3) {
        colour = "white";
      }
      ctx.fillStyle = colour;
      ctx.fillRect(this.x, this.y, 5, 40);
   }
}


var ray = 450;
function playerRay() {
  ray -= 10;
}

var xPos = 450;
function draw() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  ctx.drawImage(player, xPos, 500);

  ctx.drawImage(enemy1, en1PosX, 30);
  ctx.drawImage(enemy1, en1PosX + 150, 30);
  ctx.drawImage(enemy1, en1PosX + 350, 30);
  ctx.drawImage(enemy1, en1PosX + 550, 30);
  ctx.drawImage(enemy1, en1PosX + 700, 30);

  ctx.drawImage(enemy2, en2PosX, 150);
  ctx.drawImage(enemy2, en2PosX + 150, 150);
  ctx.drawImage(enemy2, en2PosX + 350, 150);
  ctx.drawImage(enemy2, en2PosX + 550, 150);
  ctx.drawImage(enemy2, en2PosX + 700, 150);
  bullets.forEach(bullet => bullet.draw());
  //if (pressedSpace) {
  //  new Bullet();
  //}
  if (pressedSpace) {

      if (pfire == true) {
        new Bullet;
        pfire = false;
      }

  }
  if (true) {
    enemyBullets.forEach(enemybullet => enemybullet.draw());
    let time = new Date();
    let timer = time.getSeconds();
    if (timer % 2) {
      if (fire == true) {
        new EnemyBullet;
        fire = false;
      }
    }
  }
}
var shots = document.getElementById('shots');
var values = 0;

var pfire = true;
function pFire() {
  pfire = true;
}
var fire = true;
function enemyFire() {
  fire = true;
}
setInterval(draw, 1);
setInterval(enemyFire, 300);
setInterval(pFire, 1000);
window.onload = function(){
  //console.clear();
}
