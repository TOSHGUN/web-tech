let dates = [];
let d = true;

function createRow(name){
    const tbl = document.getElementById('date');
    const tr = tbl.insertRow();
    let td = tr.insertCell();
    let strong = document.createElement('strong');
    td.appendChild(strong);
    strong.appendChild(document.createTextNode(name));
    return tr;
}

function readTable_date(){
    var table = document.getElementById('date').querySelector("table tbody");
    var rows = table.children;
    var fields = rows[0].children;
    for (var j = 1; j < fields.length; j++) {
        let date = fields[j].innerHTML;
        date = new Date("20" + date.slice(6,8), date.slice(3,5), date.slice(0,2));
        dates.push(date);
    }
}

function sortDates(name){
    dates.sort(function(a,b){
        return a-b;
    });
    let tr = createRow(name);
    for(var j = 0; j<dates.length; j++){
        let date_cell = ("0" + dates[j].getDate()).slice(-2) + '.' + ("0"+(dates[j].getMonth()+1)).slice(-2) + '.' + ("" + dates[j].getFullYear()).slice(-2);
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(date_cell));
    }
}

function changeSep(name, a){
    let tr = createRow(name);
    for(var j = 0; j<dates.length; j++){
        let date_cell = ("0" + dates[j].getDate()).slice(-2) + a + ("0"+(dates[j].getMonth()+1)).slice(-2) + a + ("" + dates[j].getFullYear()).slice(-2);
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(date_cell));
    }
}

function fullYear(name, a){
    let tr = createRow(name);
    for(var j = 0; j<dates.length; j++){
        let date_cell = ("0" + dates[j].getDate()).slice(-2) + a + ("0"+(dates[j].getMonth()+1)).slice(-2) + a +
        dates[j].getFullYear();
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(date_cell));
    }
}

function fullMonth(name, a){
    let tr = createRow(name);
    for(var j = 0; j<dates.length; j++){
        let date_cell = dates[j].toLocaleDateString("ru", {day: 'numeric', month: 'long', year: 'numeric'});
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(date_cell));
    }
}

function changeOrd(name, a){
    let tr = createRow(name);
    for(var j = 0; j<dates.length; j++){
        let date_cell = ("0"+(dates[j].getMonth()+1)).slice(-2) + a + ("0" + dates[j].getDate()).slice(-2) + a + ("" + dates[j].getFullYear()).slice(-2);
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(date_cell));
    }
}

function toRoman(num){
    var listOfNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var listOfRoman = ['M', 'CM', 'D', 'CD', "C", 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    var numToRoman = '';
    for (let i = 0; i < listOfNum.length; i++) {
        while (num >= listOfNum[i]) {
            numToRoman += listOfRoman[i];
            num -= listOfNum[i];
        }
    }
    return numToRoman;
}

function dateToRoman(name, a){
    let tr = createRow(name);
    for(var j = 0; j<dates.length; j++){
        let date_cell = toRoman(dates[j].getMonth()+1) + a + toRoman(dates[j].getDate()) + a + toRoman(dates[j].getFullYear());
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(date_cell));
    }
}


function button_date(){
    if (d){
        readTable_date();
        sortDates('Отсортированная');
        changeSep('ДД/ММ/ГГ','/');
        fullYear('ДД/ММ/ГГГГ','_');
        fullMonth('ДД Месяц ГГГГ',' ');
        changeOrd('ММ.ДД.ГГГГ','.');
        dateToRoman('ММ.ДД.ГГГГ','.');
        d=false;
    }
    
}