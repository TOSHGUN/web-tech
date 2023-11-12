var canvas=document.getElementById('game');
var context=canvas.getContext('2d');
	context.fillStyle='#eeeeee';
	context.fillRect(0,0,800,600);

var squarePosition_x = 0;
var squarePosition_y = 300;

function startGame(){
	let game = document.getElementById('game');
	game.style.display = 'block';
	let start = document.getElementById('button-1');
	start.style.display = 'block';
}
// function keyMove(event){
// 	console.log('Key: ', event.key);
// 	if (event.key == 'w' || event.key == 'W' || event.key == 'ArrowUp')
// 		moveUp();
// 	else if (event.key == 's' || event.key == 'S' || event.key == 'ArrowDown')
// 			moveDown();
// }

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

function drawCir(x, y){
	context.beginPath();
	context.arc(x, y, 15, 0, Math.PI * 2, true);
	context.lineStyle = "#109bfc";
	context.lineWidth = 1;
	context.stroke();
}

function collision(){

}

function fail(){

}

function success(){

}

function endGame(){
	let game = document.getElementById('game');
	game.style.display = 'none';
}

function drawFrame() {
	clearRect();
	drawRect();
	let x = 250;
	let y = 300;
	drawCir(x, y);
	var b1=document.getElementById('button-1');
	b1.style.display = "None";
	
	// Перемещаем квадрат вправо на 3 пиксел (где он будет прорисован в следующем кадре)
	if (squarePosition_x<790){
		squarePosition_x += 3;
		// keyMove();
	}
	else {
		context.clearRect(0, 0, 800, 600);
		context.fillStyle='#eeeeee';
		context.fillRect(0,0,800,600);
		context.beginPath();
		endGame();
		let fin = document.getElementById('fin');
		fin.style.display = 'block';

	}
	// Рисуем следующий кадр через 20 миллисекунд
	setTimeout("drawFrame()", 20);
	
	
}