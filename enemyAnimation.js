//анимация первой линии врагов
var en1PosX = 50;
var vector1 = false;
function enemy1Animation() {
 if (vector1 == false && en1PosX < 150) {
   enemy1AnimationRight();
   if (en1PosX == 149) {
     vector1 = true;
   }
 } else if (vector1 == true && en1PosX > 50) {
   enemy1AnimationLeft();
   if (en1PosX == 51) {
     vector1 = false;
   }
 }
}
function enemy1AnimationRight() {
  en1PosX += 1;
}

function enemy1AnimationLeft() {
  en1PosX -= 1;
}

//анимация второй линии врагов
var en2PosX = 50;
var vector2 = true;
function enemy2Animation() {
 if (vector2 == true && en2PosX < 120) {
   enemy2AnimationLeft();
   if (en2PosX == 119) {
     vector2 = false;
   }
 } else if (vector2 == false && en2PosX > 70) {
   enemy2AnimationRight();
   if (en2PosX == 71) {
     vector2 = true;
   }
 };
}
function enemy2AnimationRight() {
  en2PosX -= 1;
};

function enemy2AnimationLeft() {
  en2PosX += 1;
};


setInterval(enemy1Animation, 10);
setInterval(enemy2Animation, 15);
