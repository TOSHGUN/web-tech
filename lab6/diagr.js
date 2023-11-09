let array_f = [];
let t = true;


function readTable(){
    var table = document.getElementById('tl').querySelector("table tbody");
    var rows = table.children;
    for (var i = 0; i < rows.length; i++) {
        var fields = rows[i].children;
      var rowArray = [];
      for (var j = 0; j < fields.length; j++) {
        rowArray.push(fields[j].innerHTML);
      }
      array_f.push(rowArray);
    }
    // console.log(array_f);
}

function drawBar(context, n, color){
    context.fillStyle = color; 
    for(var i=1; i<array_f[n].length; i++) { 
        var temp = array_f[n][i]; 
        context.fillRect(10 + 20*n + (i-1)*100, 500-temp*5-12, 20, temp*5); 
    }
    context.fillStyle = 'black';
    context.fillText(array_f[0][n], 50 + (n-1)*100, 498);
}

function createDiag(){
    let diag = document.getElementById('diag');
    diag.style.display = 'block';
    let context = diag.getContext('2d');
    context.fillStyle = 'gray';
    context.fillRect(0,0,500,500);
    context.fillStyle = "black"; 
    context.lineWidth = 2.0;
    context.moveTo(25,5); 
    context.lineTo(25,490); 
    context.lineTo(490,490); 
    context.stroke();
    for(var i=0; i<6; i++) { 
        context.fillText((5-i)*20 + "",0, i*95+10); 
        context.fillText((11-i*2)*10 + "",5, (i*95+10+(i-1)*95+10)/2); 
        context.moveTo(22,(i*95+10+(i-1)*95+10)/2); 
        context.lineTo(25,(i*95+10+(i-1)*95+10)/2);
        context.moveTo(20,i*95+10); 
        context.lineTo(25,i*95+10);
    }
    context.stroke();
    return context;
}

function buttonDiag(){
    if(t){
        readTable();
        let con = createDiag();
        drawBar(con, 1, 'blue');
        drawBar(con, 2, 'red');
        drawBar(con, 3, 'yellow');
        drawBar(con, 4, 'green');
        t=false;
    }
}