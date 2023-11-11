var canvas=document.getElementById('game');
var context=canvas.getContext('2d');
context.fillStyle='#eeeeee';
context.fillRect(0,0,800,600);

var squarePosition_x = 0;
var squarePosition_y = 300;
var b1=document.getElementById('button-1');

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

function drawCir(){
	context.beginPath();
	context.arc(250, 300, 50, 0, Math.PI * 2, true);
	// context.moveTo(100,100);
	context.lineStyle = "#109bfc";
	context.lineWidth = 1;
	context.stroke();
}

function drawFrame() {

	// Очистить холст
	context.clearRect(0, 0, 800, 600);
	context.fillStyle='#eeeeee';
	context.fillRect(0,0,800,600);
	context.beginPath();
	
	drawRect();
	drawCir();

	
	// Перемещаем квадрат вправо на 8 пиксел (где он будет 
	// прорисован в следующем кадре)
	if (squarePosition_x<790){
		
		squarePosition_x += 3;
		// keyMove();
	}
	else {
		squarePosition_y = 0;
		//b1.style.display = "None";
	}
	// Рисуем следующий кадр через 40 миллисекунд
	setTimeout("drawFrame()", 20);
	
	
}