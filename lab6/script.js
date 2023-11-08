let context;

function showCan(){
    let can = document.getElementById('can');
    can.style.display = 'block';
    var inp = document.getElementById('inputs');
	inp.style.display="block";
    var canvas = document.getElementById('can');
    context = canvas.getContext('2d');
    context.fillRect(0,0,200,200);

    context.clearRect(0, 0, 200, 200);
	var x = 0;
	var y = 0;
	context.lineStyle = "#109bfc";
	context.lineWidth = 0.5;
	
	context.moveTo(100, 100);
	context.lineTo(100, 0);
	context.moveTo(100, 100);
	context.lineTo(100, 200);
	context.moveTo(100, 100);
	context.lineTo(0, 100);
	context.moveTo(100, 100);
	context.lineTo(200, 100);
	context.moveTo(100, 0);
	context.lineTo(103, 3);
	context.moveTo(100, 0);
	context.lineTo(97, 3);
	context.moveTo(200, 100);
	context.lineTo(197, 103);
	context.moveTo(200, 100);
	context.lineTo(197, 97);
	context.font = "normal 10px sans-serif";
    context.fillText('Ось X', 160, 110);
    context.fillText('Ось Y', 105, 10);
    context.stroke();
}

function createPlane(){
    
	var x1 = Number(document.getElementById('l1').value);
	var x2 = Number(document.getElementById('l2').value);
	var y1 = Number(document.getElementById('l3').value);
	var y2 = Number(document.getElementById('l4').value);
	var x3 = Number(document.getElementById('l5').value);
	var b = y1-x1*(y2-y1)/(x2-x1);
	var a = (y2-y1)/(x2-x1);
	var y3 = a*x3+b;
	document.getElementById('l6').value = y3;
	context.moveTo(100+x1*10, 100-y1*10);
	context.lineTo(100+x2*10, 100-y2*10);
	context.lineTo(100+x3*10, 100-y3*10);
    context.strokeText('('+ x1 + ',' + y1 + ')', 110+x1*10, 100-y1*10);
    context.strokeText('o', 100+x1*10, 100-y1*10);
    context.strokeText('('+ x2 + ',' + y2 + ')', 110+x2*10, 100-y2*10);
    context.strokeText('o', 100+x2*10, 100-y2*10);
    context.strokeText('('+ x3 + ',' + y3 + ')', 110+x3*10, 100-y3*10);
    context.strokeText('o', 100+x3*10, 100-y3*10);
	context.stroke(); 
}

function drawFrame(){
    createPlane();
}