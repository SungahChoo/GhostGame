let a = 0;
let b = 0.01;
let a2 = 2;
let p = 0;
let xPos;
let yPos;
let eyes;

let vid;
let playing = false;
let button;

let enemyX, enemyY, enemyA, enemyB, enemyC, enemyD, enemyE, enemyF;
let colors;

let bombA, bombB, bombC, bombD;

let plusA, plusB, plusC, plusD, plusE, plusF, plusG, plusH;
let plusI, plusJ, plusK, plusL, plusM, plusN, plusO, plusP;


let speedA, speedB;

let addPoint;

let speedBoostActive;

function setup() {
  createCanvas(640, 640);

  //원하면 'music'버튼을 눌러 음악을 실행할 수 있음.
  vid = createVideo('게임배경음악.mp4');
  button = createButton('music');
  button.position(200, 35);
  button.mousePressed(toggleVid);
  vid.hide();

  xPos = 0;
  yPos = 0;

  eyes = [
    color(255, 125, 0),
    color(255, 255, 0)
  ];

  enemyX = 500;
  enemyY = 150;

  enemyA = 180;
  enemyB = 550;

  enemyC = 180;
  enemyD = 300;

  enemyE = 500;
  enemyF = 400;

  colors = [
    color(255, 0, 255),
    color(255, 20, 147),
    color(255, 240, 245),
    color(255, 182, 193)
  ];

  bombA = 350;
  bombB = 105;

  bombC = 330;
  bombD = 550;

  plusA = 560;
  plusB = 120;

  plusC = 80;
  plusD = 200;

  plusE = 200;
  plusF = 290;

  plusG = 300;
  plusH = 450;

  plusI = 300;
  plusJ = 155;

  plusK = 183;
  plusL = 455;

  plusM = 500;
  plusN = 335;

  plusO = 475;
  plusP = 555;

  speedA = 350;
  speedB = 400;
  addPoint = 5000;

  speedBoostActive = false;
}

function toggleVid(){
  if (playing === true){
    vid.pause();
    button.html('music');
  }
  else{
    vid.loop();
    button.html('pause');
  }
  playing = !playing;
  
}
function draw() {
  background(220, 255, 255);
  noStroke();

  image(vid, 0, 640, 100, 100);

  //메인 캐릭터가 움직이는 범위 설정
  fill(220, 255, 200);
  noStroke();
  //윗테두리
  rect(0, 0, 640, 80);
  //왼쪽테두리
  rect(0, 0, 50, 640);
  //아랫쪽테두리
  rect(0, 590, 640, 80);
  //오른쪽테두리
  rect(590, 0, 50, 640);

  //메인캐릭터 만들기 (빨간유령)
  noStroke();
  fill(255, 0, 0);
  ellipse(xPos, yPos, 25, 25);

  arc(xPos, yPos, 50, 80, 3*PI/2 * (a + p), 3*PI/2 * (a2 + p));

  //유령의 눈
  fill(random(eyes));
  ellipse(xPos, yPos, 10, 10);

//유령이 움직이는 범위 제한
  if(xPos > 565) //오른쪽
  {
    xPos = 565;
  }
  if(xPos < 75) //왼쪽
  {
    xPos = 75;
  }
  if(yPos > 545) //아래
  {
    yPos = 545;
  }
  if(yPos < 95) //위
  {
    yPos = 95;
  }
  

  if (keyIsPressed === true) {
    
    //key를 눌렀을 때, 빨간유령이 움직임
    if (key === "d") {
      xPos = xPos + 2;
      p = 0;
    }
    if (key === "a") {
      xPos = xPos - 2;
    
    }
    if (key === "s") {
      yPos = yPos + 2;
    }
    if (key === "w") {
      yPos = yPos - 2;
    }

    //속도조절아이템 범위 설정
    if (
      xPos > speedA-30 &&
      xPos < speedA+30 &&
      yPos > speedB-30 &&
      yPos < speedB+30
      )
      {
      console.log("Speed Boost Activated");
      speedBoostActive = true;

      speedA = -100;
      speedB = -100;
      }

    //점수증가아이템1(초록색, +1000)
    if (xPos > plusA - 30 && xPos < plusA + 30 && yPos > plusB - 55 && yPos < plusB + 30) {
      console.log("PLUS");
      addPoint += 1000;

      plusA = -100;
      plusB = -100;
    }
    //점수증가아이템2(초록색, +1000)
    if (xPos > plusC - 30 && xPos < plusC + 30 && yPos > plusD - 55 && yPos < plusD + 30) {
      console.log("PLUS");
      addPoint += 1000;
  
      plusC = -100;
      plusD = -100;
    }

    //점수증가아이템3(초록색, +1000)
    if (xPos > plusE - 30 && xPos < plusE + 30 && yPos > plusF - 55 && yPos < plusF + 30) {
      console.log("PLUS");
      addPoint += 1000;
  
      plusE = -100;
      plusF = -100;
    }

    //점수증가아이템4(초록색, +1000)
    if (xPos > plusG - 30 && xPos < plusG + 30 && yPos > plusH - 55 && yPos < plusH + 30) {
      console.log("PLUS");
      addPoint += 1000;
  
      plusG = -100;
      plusH = -100;
    }

    //점수증가아이템5(노란색, +2000)
    if (xPos > plusI - 30 && xPos < plusI + 30 && yPos > plusJ - 55 && yPos < plusJ + 30) {
      console.log("PLUS");
      addPoint += 2000;
  
      plusI = -100;
      plusJ = -100;
    }

    //점수증가아이템6(노란색, +2000)
    if (xPos > plusK - 30 && xPos < plusK + 30 && yPos > plusL - 55 && yPos < plusL + 30) {
      console.log("PLUS");
      addPoint += 2000;
  
      plusK = -100;
      plusL = -100;
    }

    //점수증가아이템7(노란색, +2000)
    if (xPos > plusM - 30 && xPos < plusM + 30 && yPos > plusN - 55 && yPos < plusN + 30) {
      console.log("PLUS");
      addPoint += 2000;
  
      plusM = -100;
      plusN = -100;
    }

    //점수증가아이템8(노란색, +2000)
    if (xPos > plusO - 30 && xPos < plusO + 30 && yPos > plusP - 55 && yPos < plusP + 30) {
      console.log("PLUS");
      addPoint += 2000;
  
      plusO = -100;
      plusP = -100;
    }

  }

  //점수 표시
  textSize(20);
  fill(0);
  text("SCORE: ", 425, 45);
  text(addPoint, 490, 45);

  //메인 캐릭터 움직임
  if (a > 0.25) {
    b = -0.01;
  }
  if (a < 0) {
    b = 0.01;
  }
  a = a + b;
  
  if (a2 < 1.75) {
    b = -0.01;
  }
  if (a2 > 2) {
    b = 0.01;
  }
  a2 = a2 - b;

  //장애물 1 (갈색 세로 직사각형)
  fill(160, 82, 45);
  noStroke();
  rect(120, 150, 20, 70);

  //장애물 1 범위 설정
  //왼쪽 벽
  if(xPos > 95) {
    if(xPos < 120) {
      if(yPos > 120) {
        if(yPos < 220) {
          xPos = 95;
        }
      }
    }
  }
  //오른쪽 벽
  if(xPos > 140) {
    if(xPos < 165) {
      if(yPos > 120) {
        if(yPos < 220) {
          xPos = 165;
        }
      }
    }
  }
  //윗쪽 벽
  if (yPos > 110) {
    if (yPos < 150) {
      if (xPos > 120) {
        if (xPos < 140) {
          yPos = 110;
        }
      }
    }
  }
  //아랫쪽 벽
  if (yPos > 223) {
    if (yPos < 230) {
      if (xPos > 120) {
        if (xPos < 140) {
          yPos = 230;
        }
      }
    }
  }

  //장애물 2 (갈색 가로 직사각형)
  fill(160, 82, 45);
  rect(250, 510, 180, 20);

  //장애물 2 범위 설정
  //왼쪽 벽
  if(xPos > 225) {
    if(xPos < 245) {
      if(yPos > 470) {
        if(yPos < 530) {
          xPos = 225;
        }
      }
    }
  }
  //오른쪽 벽
  if(xPos > 430) {
    if(xPos < 455) {
      if(yPos > 480) {
        if(yPos < 530) {
          xPos = 455;
        }
      }
    }
  }
  //윗쪽 벽
  if (yPos > 470) {
    if (yPos < 510) {
      if (xPos > 240) {
        if (xPos < 430) {
          yPos = 470;
        }
      }
    }
  }
  //아랫쪽 벽
  if (yPos > 533) {
    if (yPos < 540) {
      if (xPos > 250) {
        if (xPos < 430) {
          yPos = 540;
        }
      }
    }
  }

  //핑크색 적1 (가로로 움직임))
  fill(random(colors));
  ellipse(enemyX, enemyY, 100, 50);
  fill(255);
  textSize(15);
  text("ENEMY 1", enemyX-20, enemyY);

  enemyX -= 3;
  if(enemyX < 220)
  {
    enemyX += 300;
  }

  // 적1에게 닿으면 점수 깎임
  if (xPos > enemyX-50 && xPos < enemyX+50 && yPos > enemyY-80 && yPos < enemyY+30) {
    console.log("CRASH");
    addPoint -= 800; 
  }

  //핑크색 적2 (세로로 움직임)
  fill(random(colors));
  ellipse(enemyA, enemyB, 50, 100);
  fill(255);
  textSize(15);
  text("ENEMY\n2", enemyA-20, enemyB);

  enemyB -=2;
  if(enemyB < 230)
  {
    enemyB += 300;
  }

  //적2에게 닿으면 점수 깎임
  if (xPos > enemyA-50 && xPos < enemyA+50 && yPos > enemyB-80 && yPos < enemyB+70) {
    console.log("CRASH");
    addPoint -= 800;
  }

  //핑크색 적3 (가로로 움직임)
  fill(random(colors));
  ellipse(enemyC, enemyD, 100, 50);
  fill(255);
  textSize(15);
  text("ENEMY3", enemyC-20, enemyD);

  enemyC -= 3;
  if(enemyC < 300)
  {
    enemyC += 300;
  }

  //적3에게 닿으면 점수 깎임
  if (xPos > enemyC-50 && xPos < enemyC+50 && yPos > enemyD-80 && yPos < enemyD+30) {
    console.log("CRASH");
    addPoint -= 300;
  } 
  //핑크색 적4 (세로로 움직임)
  fill(random(colors));
  ellipse(enemyE, enemyF, 50, 100);
  fill(255);
  textSize(15);
  text("ENEMY\n4", enemyE-20, enemyF);

  enemyF -=2;
  if(enemyF < 480)
  {
    enemyF += 60;
  }

  //적4에게 닿으면 점수 깎임
  if (xPos > enemyE-50 && xPos < enemyE+50 && yPos > enemyF-80 && yPos < enemyF+70) {
    console.log("CRASH");
    addPoint -= 300;
  }
  //속도조절아이템(속도증가아이템)
  fill(0, 0, 255);
  rect(speedA, speedB, 40, 40);
  fill(255);
  textSize(15);
  text("speed", speedA, speedB+25);

  //'speed'에 닿으면 속도가 2 -> 4 로 증가
  //조건연산자써서 speedBoostActive가 참이면 스피드가 4
  let moveSpeed = speedBoostActive ? 4 : 2;

  if (keyIsPressed === true) {
    if (key === "d") {
      xPos = xPos + moveSpeed;
    }
    if (key === "a") {
      xPos = xPos - moveSpeed;
    }
    if (key === "s") {
      yPos = yPos + moveSpeed;
    }
    if (key === "w") {
      yPos = yPos - moveSpeed;
    }
  }

  //점수증가아이템1 (초록색, +1000)
  fill(29, 219, 22);
  ellipse(plusA, plusB, 30, 30);
  fill(0);
  textSize(30);
  text("+", plusA-8, plusB+10);

 //점수증가아이템2 (초록색, +1000)
fill(29, 219, 22);
ellipse(plusC, plusD, 30, 30);
fill(0);
textSize(30);
text("+", plusC-8, plusD+10);

//점수증가아이템3 (초록색, +1000)
fill(29, 219, 22);
ellipse(plusE, plusF, 30, 30);
fill(0);
textSize(30);
text("+", plusE-8, plusF+10);

//점수증가아이템4 (초록색, +1000)
fill(29, 219, 22);
ellipse(plusG, plusH, 30, 30);
fill(0);
textSize(30);
text("+", plusG-8, plusH+10);

//점수증가아이템5 (노란색, +2000)
fill(255, 255, 0);
ellipse(plusI, plusJ, 30, 30);
fill(0);
textSize(30);
text("+", plusI-8, plusJ+10);

//점수증가아이템6 (노란색, +2000)
fill(255, 255, 0);
ellipse(plusK, plusL, 30, 30);
fill(0);
textSize(30);
text("+", plusK-8, plusL+10);

//점수증가아이템7 (노란색, +2000)
fill(255, 255, 0);
ellipse(plusM, plusN, 30, 30);
fill(0);
textSize(30);
text("+", plusM-8, plusN+10);

//점수증가아이템8 (노란색, +2000)
fill(255, 255, 0);
ellipse(plusO, plusP, 30, 30);
fill(0);
textSize(30);
text("+", plusO-8, plusP+10);

//폭탄1 (빨간색 동그라미, !!!, 닿으면 죽음)
fill(204, 0, 51);
ellipse(bombA, bombB, 30, 30);
fill(255);
textSize(20);
text("!!!", 340, 110);

//폭탄2 (빨간색 동그라미, !!!, 닿으면 죽음)
fill(204, 0, 51);
ellipse(bombC, bombD, 30, 30);
fill(255);
textSize(20);
text("!!!", 320, 555);

  //시작과 끝 표시
  fill(0);
  textSize(10);
  text("START POINT", 30, 75);

  fill(0);
  textSize(10);
  text("END POINT", 540, 605);
  fill(255, 100, 100);
  rect(590, 530, 20, 60);

//폭탄1에 닿으면, 종료 + FAIL
if (xPos > bombA - 30 && xPos < bombA + 30 && yPos > bombB - 30 && yPos < bombB + 30) {
  console.log("BOMB");
  fill(0);
  rect(0, 0, 640, 640);
  fill(255);
  textSize(80);
  text("GAMEOVER", 90, 200); 
  textSize(60);
  text("SCORE: ", 130, 400);
  text(0, 440, 400);
  fill(255, 0, 0);
  textSize(100);
  text("FAIL", 140, 570);
  rect(530, 520, 100, 50); 
  textSize(17);
  fill(255);
  text("PRESS HERE\nTO RESTART", 535, 540);
  if(mouseIsPressed === true){
    if(mouseX>530 && mouseX<630 && mouseY>520 && mouseY<570)
    {
      setup(); 
    }
  }
} 

//폭탄2에 닿으면, 종료 + FAIL
if (xPos > bombC - 30 && xPos < bombC + 30 && yPos > bombD - 30 && yPos < bombD + 30) {
  console.log("BOMB");
  fill(0);
  rect(0, 0, 640, 640);
  fill(255);
  textSize(80);
  text("GAMEOVER", 90, 200); 
  textSize(60);
  text("SCORE: ", 130, 400);
  text(0, 440, 400);
  fill(255, 0, 0);
  textSize(100);
  text("FAIL", 140, 570);
  rect(530, 520, 100, 50); 
  textSize(17);
  fill(255);
  text("PRESS HERE\nTO RESTART", 535, 540);
  if(mouseIsPressed === true){
    if(mouseX>530 && mouseX<630 && mouseY>520 && mouseY<570)
    {
      setup(); 
    }
  }
} 
//score = 0이 되면, 종료 + FAIL
if(addPoint <= 0)
{ 
  fill(0);
  rect(0, 0, 640, 640);
  fill(255);
  textSize(80);
  text("GAMEOVER", 90, 200); 
  textSize(60);
  text("SCORE: ", 130, 400);
  text(0, 440, 400);
  fill(255, 0, 0);
  textSize(100);
  text("FAIL", 140, 570);
  rect(530, 520, 100, 50); 
  textSize(17);
  fill(255);
  text("PRESS HERE\nTO RESTART", 535, 540);
  if(mouseIsPressed === true){
    if(mouseX>530 && mouseX<630 && mouseY>520 && mouseY<570)
    {
      setup(); 
    }
  }
  
}

//end point에 도착하면 success
if(xPos>560 && xPos<590 && yPos>540 && yPos<590)
{
  fill(0);
  rect(0, 0, 640, 640);
  fill(255);
  textSize(100);
  text("GAMEOVER", 80, 200); 
  textSize(60);
  text("SCORE: ", 150, 400);
  text(addPoint, 440, 400);
  fill(255, 0, 0);
  textSize(100);
  text("SUCCESS", 150, 600);
  rect(530, 520, 100, 50); 
  textSize(17);
  fill(255);
  text("PRESS HERE\nTO RESTART", 535, 540);
  if(mouseIsPressed === true){
    if(mouseX>530 && mouseX<630 && mouseY>520 && mouseY<570)
    {
      setup(); 
    }
  }

  //15000점 이상이면 A+
  if(addPoint >= 15000)
  {
    textSize(100);
    fill(random(colors));    
    text("A+", 360, 300);
  }

  //13000점 이상 15000점 미만이면 A
  if(addPoint >= 13000 && addPoint < 15000)
  {
    textSize(100);
    fill(random(colors));    
    text("A", 360, 300);
  }

  //10000점 이상 13000점 미만이면 B
  if(addPoint >= 10000 && addPoint < 13000)
  {
    textSize(100);
    fill(random(colors));    
    text("B", 360, 300);
  }

  //5000점 이상 10000점 미만이면 C
  if(addPoint >= 5000 && addPoint < 10000)
  {
    textSize(100);
    fill(random(colors));    
    text("C", 360, 300);
  }
}

//5000점 이하면 F, 승천 불가
if(xPos>560 && xPos<590 && yPos>540 && yPos<590)
{
  if(addPoint < 5000)
  {
  fill(0);
  rect(0, 0, 640, 640);
  fill(255);
  textSize(100);
  text("GAMEOVER", 80, 200); 
  textSize(60);
  text("SCORE: ", 150, 400);
  text(addPoint, 440, 400);
  fill(255, 0, 0);
  textSize(100);
  text("FAIL", 150, 600);
  rect(530, 520, 100, 50); 
  textSize(17);
  fill(255);
  text("PRESS HERE\nTO RESTART", 535, 540);
  if(mouseIsPressed === true){
    if(mouseX>530 && mouseX<630 && mouseY>520 && mouseY<570)
    {
      setup(); 
    }
  }
  textSize(100);
  fill(random(colors));    
  text("F", 360, 300);
  }
}
}
