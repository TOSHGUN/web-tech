let array_c = [];
let array_f = [];

function readTable(){
    var table = document.querySelector("table tbody");
    var rows = table.children;
    for (var i = 0; i < rows.length; i++) {
        var fields = rows[i].children;
      var rowArray = [];
      for (var j = 0; j < fields.length; j++) {
        rowArray.push(fields[j].innerHTML);
      }
      array_f.push(rowArray);
    }
    console.log(array_f);
}

function f_to_c(temp){
    temp = (5/9*(temp-32)).toFixed(1);
    return temp;
}

function table_to_c(){
    for (var i = 0; i<array_f.length; i++){
        let rowArray = [];
        for(var j = 0; j<5; j++){
            if(i==0 || j==0) {
                rowArray.push(array_f[i][j]);
            }
            else {
                rowArray.push(f_to_c(array_f[i][j]));
            }
        }
        array_c.push(rowArray);
    }
    console.log(array_c);
}

function createTable(){
    readTable();
    table_to_c();
    const body = document.body,
        tbl = document.createElement('table');
        let cap = document.createElement('caption');
        cap.innerHTML = "Средняя температура, C";
        tbl.appendChild(cap);
        for (var i = 0; i<array_c.length; i++){
            const tr = tbl.insertRow();
            for(var j = 0; j<5; j++){
                const td = tr.insertCell();
                td.appendChild(document.createTextNode(array_c[i][j]));
            }
        }
        const tabl = document.getElementById('tl');
        tabl.after(tbl);
    // body.appendChild(tbl);
}
