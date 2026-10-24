/*
  作者：[你的名字]
  作品名稱：星際漂流 (Star Drift)
  操作說明：
  - 在主選單點擊任意處開始遊戲。
  - 移動滑鼠控制下方飛行器左右移動，閃避掉落的紅色隕石。
  - 若發生碰撞將進入遊戲結束畫面，點擊可返回主選單。
*/

let state = 'MENU'; // 狀態變數：'MENU', 'PLAY', 'GAMEOVER'
let score = 0;
let player;
let obstacles = [];

function setup() {
  createCanvas(800, 600);
  player = { x: width / 2, y: height - 50, size: 30 };
}

function draw() {
  background(15, 15, 30);

  // 狀態機邏輯分派
  if (state === 'MENU') {
    drawMenu();
  } else if (state === 'PLAY') {
    drawPlay();
  } else if (state === 'GAMEOVER') {
    drawGameOver();
  }
}

// 狀態 1：主選單
function drawMenu() {
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(36);
  text('星際漂流 - 期中專案', width / 2, height / 2 - 60);
  textSize(18);
  fill(200, 200, 255);
  text('點擊任意處開始遊戲', width / 2, height / 2 + 10);
}

// 狀態 2：遊戲進行中
function drawPlay() {
  // 1. 繪製動態背景
  drawBackgroundParticles();

  // 2. 玩家控制與繪製
  player.x = constrain(mouseX, player.size / 2, width - player.size / 2);
  fill(0, 200, 255);
  noStroke();
  ellipse(player.x, player.y, player.size, player.size);

  // 3. 隨機生成障礙物 (使用 random())
  if (frameCount % 40 === 0) {
    obstacles.push({
      x: random(width),
      y: -20,
      size: random(20, 50),
      speed: random(3, 7)
    });
  }

  // 4. 更新與繪製障礙物，並進行碰撞檢測
  for (let i = obstacles.length - 1; i >= 0; i--) {
    let obs = obstacles[i];
    obs.y += obs.speed;
    
    fill(255, 100, 100);
    ellipse(obs.x, obs.y, obs.size, obs.size);

    // 條件判斷：碰撞檢測
    let d = dist(player.x, player.y, obs.x, obs.y);
    if (d < (player.size / 2 + obs.size / 2)) {
      state = 'GAMEOVER';
    }

    // 移除超出畫面的障礙物並計分
    if (obs.y > height + 50) {
      obstacles.splice(i, 1);
      score += 10;
    }
  }

  // 5. 顯示即時分數
  fill(255);
  textSize(20);
  textAlign(LEFT, TOP);
  text('分數: ' + score, 20, 20);
}

// 狀態 3：遊戲結束
function drawGameOver() {
  textAlign(CENTER, CENTER);
  fill(255, 100, 100);
  textSize(36);
  text('遊戲結束', width / 2, height / 2 - 40);
  
  fill(255);
  textSize(20);
  text('最終得分: ' + score, width / 2, height / 2 + 10);
  text('點擊此處返回主選單', width / 2, height / 2 + 60);
}

// 滑鼠互動：控制不同狀態下的點擊事件
function mousePressed() {
  if (state === 'MENU') {
    resetGame();
    state = 'PLAY';
  } else if (state === 'GAMEOVER') {
    // 點擊指定區域返回主選單
    if (mouseX > width / 2 - 120 && mouseX < width / 2 + 120 && mouseY > height / 2 + 30 && mouseY < height / 2 + 90) {
      state = 'MENU';
    }
  }
}

// 自定義函數 1：重置遊戲變數 (滿足重新開始要求)
function resetGame() {
  score = 0;
  obstacles = [];
  player.x = width / 2;
}

// 自定義函數 2：繪製背景流星動畫
function drawBackgroundParticles() {
  fill(255, 150);
  noStroke();
  for (let i = 0; i < 6; i++) {
    let px = random(width);
    let py = (frameCount * 3 + i * 120) % height;
    ellipse(px, py, 2, 2);
  }
}