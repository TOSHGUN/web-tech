var canvas=document.getElementById('game');
var context=canvas.getContext('2d');
context.fillStyle='#ffffff';
context.fillRect(0,0,200,200);

var squarePosition_x = 10;
var squarePosition_y = 0;
var b1=document.getElementById('button-1');

function drawFrame() {

	// Очистить холст
	context.clearRect(0, 0, 200, 200);
	context.beginPath();
	//setTimeout("drawFrame()", 0);
	
	// Рисуем квадрат размером 30x30 пикселов в текущей позиции
	context.rect(squarePosition_x, squarePosition_y, 30, 30);
	context.lineStyle = "#109bfc";
	context.lineWidth = 1;
	context.stroke();
	
	// Перемещаем квадрат вниз на 8 пиксел (где он будет 
	// прорисован в следующем кадре)
	if (squarePosition_y<190) squarePosition_y += 8
		else {squarePosition_y = 0;
		b1.display = "None";}
	
	// Рисуем следующий кадр через 40 миллисекунд
	setTimeout("drawFrame()", 40);
	
	
}