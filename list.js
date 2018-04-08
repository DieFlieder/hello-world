var inputN = document.querySelector("#name");//строка ввода названия
var inputD = document.querySelector("#description");//строка ввода описания
var list = document.querySelector("ul");// сам список 

var activeB = document.querySelector("#activ");// БА
var enter = document.querySelector("#enter"); //кнопка ввода
var reset = document.querySelector("#reset"); // обновление страницы 

var MAct = [];// в БА

//при нажатии меняется фон
inputN.onclick = function () {
	inputN.style.background = "silver";
	inputD.style.background = "radial-gradient(ellipse at center, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 22%, rgba(254,254,254,1) 100%)";

}

inputD.onclick = function () {
	inputD.style.background = "silver";
	inputN.style.background = "radial-gradient(ellipse at center, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 22%, rgba(254,254,254,1) 100%)";

}

//нажатие на кнопку ввода - генерация наших "планов"
enter.onclick = function liGenerate() {
	var li = document.createElement("li");
	li.innerText = inputN.value;
	
	var button = document.createElement("button");

 	var p = document.createElement("p");
 	p.innerText = inputD.value;


	li.appendChild(button);
	li.appendChild(p);
	list.appendChild(li);
	
	//если количество задач выше 5, то остальные скрытые
	if (MAct.length < 5) {
		MAct.push(li);
	} else {
		MAct.push(li);
		li.style.display = "none";
	}

	//очистка строки ввода, после передачи данных в li
	setTimeout(function() { 
		inputN.value = "" ;
		inputD.value = "" ;
		inputN.style.background = "radial-gradient(ellipse at center, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 22%, rgba(254,254,254,1) 100%)";
		inputD.style.background = "radial-gradient(ellipse at center, rgba(226,226,226,1) 0%, rgba(209,209,209,1) 22%, rgba(254,254,254,1) 100%)";
	}, 20);

	//'удаление' задач
	// находясь вне функции генератора - не видит кнопок. Поэтому находится здесь :)
	button.onclick = function () {
		li.style.display = "none";
		li.className = "delete";
	}

	//клик по клавише БА. Фильтр по классу активных : показывает все
	// неудаленные, даже те, которые находятся за знаком 5.
	activeB.onclick = function() {
			activeB.style.background = "radial-gradient(ellipse at center, rgba(252,236,252,1) 0%, rgba(253,137,215,1) 67%, rgba(255,124,216,1) 100%)";
			activeB.style.textDecoration = "underline";
			activeB.style.fontWeight = "bold";

		if (li.style.display = "none" && li.className != "delete") {
			li.style.display = "list-item";
		}
	}
}

//обновление страницы - плана
reset.onclick = function () {
	location.reload();
}
