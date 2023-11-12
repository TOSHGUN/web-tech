var canvas=document.getElementById('game');
var context=canvas.getContext('2d');
	context.fillStyle='#eeeeee';
	context.fillRect(0,0,800,600);

var squarePosition_x = 0;
var squarePosition_y = 300;
let f = false;

let circles = [];
let x = 80;

function addCir(){
	if (squarePosition_x > 10 && x<90){
		x = Math.floor(Math.random()*(275-205)+105);
		y = Math.floor(Math.random()*(475-115)+115);
		let coor = [];
		coor.push(x);
		coor.push(y);
		circles.push(coor);
	}
	if (squarePosition_x> 120 && x <190){
		x = Math.floor(Math.random()*(375-305)+305);
		y = Math.floor(Math.random()*(475-115)+115);
		let coor = [];
		coor.push(x);
		coor.push(y);
		circles.push(coor);
	}
	if (squarePosition_x > 250 && x <390){
		x = Math.floor(Math.random()*(475-405)+405);
		y = Math.floor(Math.random()*(475-115)+115);
		let coor = [];
		coor.push(x);
		coor.push(y);
		circles.push(coor);
	}
	if (squarePosition_x>350 && x <490){
		x = Math.floor(Math.random()*(575-505)+505);
		y = Math.floor(Math.random()*(475-115)+115);
		let coor = [];
		coor.push(x);
		coor.push(y);
		circles.push(coor);
	}
	if (squarePosition_x>450 && x <590){
		x = Math.floor(Math.random()*(675-605)+605);
		y = Math.floor(Math.random()*(475-115)+115);
		let coor = [];
		coor.push(x);
		coor.push(y);
		circles.push(coor);
	}
}

function startGame(){
	let game = document.getElementById('game');
	game.style.display = 'block';
	let start = document.getElementById('button-1');
	start.style.display = 'block';
}

document.addEventListener('keydown', function keyMove(event){
	console.log('Key: ', event.key);
	if (event.key == 'w' || event.key == 'W' || event.key == 'ArrowUp')
		moveUp();
	else if (event.key == 's' || event.key == 'S' || event.key == 'ArrowDown')
			moveDown();
});

function clearRect(){
		// Очистить холст
		context.clearRect(0, 0, 800, 600);
		context.fillStyle='#eeeeee';
		context.fillRect(0,0,800,600);
		context.beginPath();
}

function moveUp(){
	// функция перемещения объекта вверх по экрану
	if(squarePosition_y > 0)
		squarePosition_y -= 10;
}

function moveDown(){
	// функция перемещения объекта вниз по экрану
	if(squarePosition_y < 570)
		squarePosition_y += 10;
}

function drawRect(){
		// Рисуем квадрат размером 30x30 пикселов в текущей позиции
		context.rect(squarePosition_x, squarePosition_y, 30, 30);
		context.lineStyle = "#109bfc";
		context.lineWidth = 1;
		context.stroke();
}

function drawCir(x,y){
	context.beginPath();
	context.arc(x, y, 25, 0, Math.PI * 2, true);
	context.fillStyle='#000000';
	context.fill();
	context.lineStyle = "#109bfc";
	context.lineWidth = 1;
	context.stroke();
}

function collision(x1, y1, x2, y2, r){
	if ((x1+30 >= x2-r && x1+30 <= x2+r && y1 <= y2+r && y1 >= y2-r) || 
		(x1+15 >= x2-r && x1+30 <= x2+r && y1+15 <= y2+r && y1+15 >= y2-r) ||
		(x1+30 >= x2-r && x1+30 <= x2+r && y1+30 <= y2+r && y1+30 >= y2-r)){
		fail();
	}
}

function fail(){
	endGame();
	let fin = document.getElementById('fin');
	fin.style.display = 'block';
	fin.innerHTML = 'fail';
	f = true;
}

function success(){
	endGame();
	let fin = document.getElementById('fin');
	fin.style.display = 'block';
	fin.innerHTML = 'success';
}

function endGame(){
	let game = document.getElementById('game');
	game.style.display = 'none';
	
}

function drawFrame() {
	clearRect();
	drawRect();
	var b1=document.getElementById('button-1');
	b1.style.display = "None";
	
	// Перемещаем квадрат вправо на 3 пиксел (где он будет прорисован в следующем кадре)
	if (squarePosition_x<790 && !f){
		squarePosition_x += 3;
		addCir();
		for(let i=0; i<circles.length;i++){
			drawCir(circles[i][0], circles[i][1]);
			collision(squarePosition_x, squarePosition_y, circles[i][0], circles[i][1], 25);
		}
		
	}
	else if (!f){
		context.clearRect(0, 0, 800, 600);
		context.fillStyle='#eeeeee';
		context.fillRect(0,0,800,600);
		context.beginPath();
		success();
	}
	// Рисуем следующий кадр через 20 миллисекунд
	setTimeout("drawFrame()", 20);
	
	
}