var scorepoint=0;

function openQ(){
	var a1 = document.getElementById('n1');
	var el = document.getElementById('q2')
	if (a1.value != "") {el.style.display = "block"}

	var a1 = document.getElementById('n2-1');
	var a2 = document.getElementById('n2-2');
	var a3 = document.getElementById('n2-3');
	var a4 = document.getElementById('n2-4');

	var el = document.getElementById('q3')
	if (a1.checked || a2.checked || a3.checked || a4.checked) {el.style.display = "block"}

	var a1 = document.getElementById('n3-1');
	var a2 = document.getElementById('n3-2');
	var a3 = document.getElementById('n3-3');
	var a4 = document.getElementById('n3-4');

	var el = document.getElementById('q4')
	if (a1.checked || a2.checked || a3.checked || a4.checked) {el.style.display = "block"}

	var a1 = document.getElementById('n4-1');
	var a2 = document.getElementById('n4-2');
	var a3 = document.getElementById('n4-3');
	var a4 = document.getElementById('n4-4');

	var el = document.getElementById('q5')
	if (a1.checked || a2.checked || a3.checked || a4.checked) {el.style.display = "block"}

	var a1 = document.getElementById('n5-1');
	var a2 = document.getElementById('n5-2');
	var a3 = document.getElementById('n5-3');
	var a4 = document.getElementById('n5-4');

	var el = document.getElementById('q6')
	if (a1.checked || a2.checked || a3.checked || a4.checked) {el.style.display = "block"}

	var a1 = document.getElementById('n6-1');
	var a2 = document.getElementById('n6-2');
	var a3 = document.getElementById('n6-3');
	var a4 = document.getElementById('n6-4');

	var el = document.getElementById('q7')
	if (a1.checked || a2.checked || a3.checked || a4.checked) {el.style.display = "block"}

	var a1 = document.getElementById('n7');
	var el = document.getElementById('q8')
	if (a1.value != "") {el.style.display = "block"}
}

function colorSwap() {
	var resBut = document.getElementById('res');
	{resBut.style.background="lightgreen"}
}

function answers() {
	var a1 = document.getElementById('fs2');
	var el = document.getElementById('q2')
	a1.style.display = "block";

	var a1 = document.getElementById('n1');
	if (a1.value == "13") {++scorepoint};

	var a1 = document.getElementById('n2-1');
	var a2 = document.getElementById('n2-2');
	var a3 = document.getElementById('n2-3');
	var a4 = document.getElementById('n2-4');
	if (a1.checked)
		if (a2.checked)
			if (a4.checked) {++scorepoint};

	var a1 = document.getElementById('n3-1');
	var a2 = document.getElementById('n3-2');
	var a3 = document.getElementById('n3-3');
	var a4 = document.getElementById('n3-4');
	if (a1.checked)
		if (a2.checked) {++scorepoint};

	var a1 = document.getElementById('n4-2');
	if (a1.checked == true) {++scorepoint};

	var a1 = document.getElementById('n5-3');
	if (a1.checked == true) {++scorepoint};

	var a1 = document.getElementById('n6-3');
	if (a1.checked == true) {++scorepoint};

	var a1 = document.getElementById('n7');
	if (a1.value.toLowerCase() == "spike" || a1.value.toLowerCase() == "спайк") {++scorepoint};

	var a1 = document.getElementById('n8-1');
	var a2 = document.getElementById('n8-2');
	var a3 = document.getElementById('n8-4');
	var a4 = document.getElementById('n8-6');
	if (a1.checked)
		if (a2.checked)
			if (a3.checked)
				if (a4.checked) {++scorepoint};

	var a1 = document.getElementById('r1');
	a1.value = scorepoint;
	switch (scorepoint) {
	case 0: case 1: case 2: {	
		var a1 = document.getElementById('vv');
		a1.value = "отвратительно";
		break; }
	case 3: case 4: case 5: {	
		var a1 = document.getElementById('vv');
		a1.value = "неплохо";
		break; }
	case 6: case 7: {	
		var a1 = document.getElementById('vv');
		a1.value = "хорошо";
		break; }
	case 8: {	
		var a1 = document.getElementById('vv');
		a1.value = "невероятно";
		break; }
	default: {
		var a1 = document.getElementById('vv');
		a1.value = "не обработано";
		break; 
		}
    }
	scorepoint=0;
}