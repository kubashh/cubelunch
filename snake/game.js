const ctx = document.getElementById('snake-canvas').getContext('2d');
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
const pixelSize = 40;
const minSizeX = 5, maxSizeX = 15, minSizeY = 0, maxSizeY = 10;

const width = Math.floor(window.innerWidth / pixelSize), height = Math.floor(window.innerHeight / pixelSize);

let screenPoint = [-10, 0, 0, 0];

const adress = "https://ideal-disco-wr7pjrr654jr367q-8888.app.github.dev/";

function setToBackend(mes = "") {
	fetch(adress, {
		method: "POST",
		body: mes,
	});
}

let apple = { x: 0, y: 0 }
let direction = "D", l = [3, 3];
let snakeX = [5, 6, 7];
let snakeY = [0, 0, 0];

ctx.fillStyle = "black";
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
NewGame();

document.addEventListener("DOMContentLoaded", function() {
  function uruchomPelnyEkran() {
    if(document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
	  	console.error("pierdole");
		}
	}

  // Inicjacja pełnego ekranu w odpowiedzi na kliknięcie
  document.addEventListener("click", uruchomPelnyEkran);
});



//ctx.width = width;
//ctx.height = height;

let ups = 0
let fps = 0
let maxfps = 60

let lastTime = new Date().getTime();
let timer = new Date().getTime();
let ms = 1000 / 10;
let delta = 0;
let framesps = 0, updates = 0;

let running = true;
run()

function run() {
	let now = new Date().getTime();
	delta += (now - lastTime) / ms;
	lastTime = now;
	while(delta >= 1) {
		update();
		updates++;
		delta--;
	}
	render();
	framesps++;

	if(new Date().getTime() - timer > 1000) {
		timer += 1000;
		ups = updates;
		fps = framesps;
		updates = 0;
		framesps = 0;
	}
	if(running) {
		setTimeout(run, 1000 / maxfps);
	}
}

function update() {
	Move();

	for(var i = 0; i < snakeX.length - 1; i++)
	{
		if(snakeX[snakeX.length - 1] == snakeX[i] && snakeY[snakeX.length - 1] == snakeY[i])
		{
			NewGame();
			break;
		}
	}
}

function render() {
	drawBox(0, 0, window.innerWidth, window.innerHeight, "black");
  drawBox(0, 0, width * pixelSize, height * pixelSize, "black");

	/*let [x0, y0, x1, y1] = screenPoint;

	if(x0 < 0) {
		drawBox(0, 0, Math.abs(x0), window.innerHeight, "blue");
	} else if(x1 > maxSizeX * pixelSize) {
		drawBox(maxSizeX * pixelSize , 0, Math.abs(x0), window.innerHeight, "blue");
	}
	if(y0 < 0) {
		drawBox(0, 0, window.innerWidth, Math.abs(y0), "blue");
	} else if(y1 > maxSizeY * pixelSize) {
		drawBox(0, 0, window.innerWidth, Math.abs(y0), "blue");
	}*/

	drawBox(apple.x * pixelSize, apple.y * pixelSize, pixelSize, pixelSize, "yellow");

	ctx.fillStyle = "red";
	var c = 100 / snakeX.length;
	for(var i = 0; i < snakeX.length; i++) {
		drawBox(snakeX[i] * pixelSize, snakeY[i] * pixelSize, pixelSize, pixelSize, "rgb(" + (255 - ((snakeX.length - 1) - i) * c) + " , 0, 0)");
	}
	
	// Draw text on the canvas
	renderText("usp " + ups + " fps " + fps, 0, 20, 20);
}

function drawBox(x, y, w, h, color = "white")  {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
}


function renderText(s, x, y, fontSize = 30, color = "white") {
	ctx.font = fontSize + "px Arial";
	ctx.fillStyle = color;
	ctx.fillText(s, x, y);
}

function Move() {
	let next = { x: 0, y: 0 }
	switch(direction) {
		case 'W':
			next.x = snakeX[snakeX.length - 1];
			next.y = snakeY[snakeX.length - 1] - 1;
			break;
		case 'A':
			next.x = snakeX[snakeX.length - 1] - 1;
			next.y = snakeY[snakeX.length - 1];
			break;
		case 'S':
			next.x = snakeX[snakeX.length - 1];
			next.y = snakeY[snakeX.length - 1] + 1;
			break;
		case 'D':
			next.x = snakeX[snakeX.length - 1] + 1;
			next.y = snakeY[snakeX.length - 1];
			break;
	}
	if(next.x < 0) {
		next.x = width - 1;
	}
	if(next.x >= width) {
		next.x = 0;
	}
	if(next.y < 0) {
		next.y = height - 1;
	}
	if(next.y >= height) {
		next.y = 0;
	}
	snakeX.push(next.x);
	snakeY.push(next.y);
	if(snakeX[snakeX.length - 1] == apple.x && snakeY[snakeX.length - 1] == apple.y) {
		GenerateApple();
	} else {
		snakeX.shift();
		snakeY.shift();
	}
}

function GenerateApple() {
	var a = true;
	while(a)
	{
		apple.x = Math.floor(Math.random() *  Math.floor(width));
		apple.y = Math.floor(Math.random() *  Math.floor(height));
		for(var i = 0; i < snakeX.length; i++)
		{
			if(apple.x == snakeX[i] && apple.y == snakeY[i])
			{
				a = true;
				break;
			} else
			{
				a = false;
			}
		}
	}
}

document.addEventListener('keydown', (event) => {
	var a = event.key;
	if(a == "ArrowUp" || a == "w" || a == "W") {
		if(snakeY[snakeX.length - 2] != snakeY[snakeX.length - 1] - 1) {
			direction = 'W';
		}
	} else if(a == "ArrowLeft" || a == "a" || a == "A")
	{
		if(snakeX[snakeX.length - 2] != snakeX[snakeX.length - 1] - 1) {
			direction = 'A';
		}
	} else if(a == "ArrowDown" || a == "s" || a == "S") {
		if(snakeY[snakeX.length - 2] != snakeY[snakeX.length - 1] + 1) {
			direction = 'S';
		}
	} else if(a == "ArrowRight" || a == "d" || a == "D") {
		if(snakeX[snakeX.length - 2] != snakeX[snakeX.length - 1] + 1) {
			direction = 'D';
		}
	}

	if(a == "r" || a == "R") {
		GenerateApple();
	}
});

function NewGame() {
	snakeX = [5, 6, 7];
	snakeY = [8, 8, 8];
	direction = "D";
	GenerateApple();
}
