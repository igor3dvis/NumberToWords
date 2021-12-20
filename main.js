//* * * * * * * * * * * * * * * * * * * * * * * * ТЕСТИРОВАНИЕ * * * * * * * * * * * * * * * * * * * * * * * 
// 	Программа получает на вход целое число от 0 до 999 999 999,
//		и преобразует это число в строку "Числительное"
//
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

var arr_Edinizy = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'одна', 'две'];
var arr_Nadzat = ['одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
var arr_Desiatki = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
var arr_Sotni = ['сто', 'двести', 'триста', 'четиреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
var arr_Tsch = ['тысяча', 'тысячи', 'тысяч'];
var arr_Mlny = ['миллион', 'миллиона', 'миллионов'];
var razryad;

// = = = Функция определяющая Единицы = = =
function fn_Edinizy(v)  // Получаем на вход функции однозначное число
{
	var i = 0;  // Сбрасываем счетчик цикла

	while (v > 1)  // Если число больше 1
	{
		v = v - 1;	// Уменьшаем его на 1
		i++;		// Счетчик увеличиваем на 1
	}

	if ((razryad == 1 && i == 0) || (razryad == 1 && i == 1))
		i = i + 9;  // нужны числительные со склонением, они в конце массива

	var s = document.getElementById("numstr").innerHTML = arr_Edinizy[i];
	razryad = 0; //  обнуляем глобальную переменную, определяющую необходимость склонения

	return s;  // Возвращаем элемент массива Единиц
}

// = = =  Функция определяющая ... надцать ( 11 ... 19 ) = = =
function fn_Nadzat(v) // Получаем на вход функции двузначное число ...надцать
{
	var i = 0; // Сбрасываем счетчик цикла

	while (v > 11) { // Пока число больше 11-ти
		v = v - 1;   // Уменьшаем его на 1
		i++;         // Счетчик увеличиваем на 1
	}
	// Выводим элемент массива ... надцатых чисел ( 11 ... 19 )
	var s = document.getElementById("numstr").innerHTML = arr_Nadzat[i];  
	return s;  // Возвращаем элемент массива Надцать
}


// = = = Функция определяющая Десятки = = =
function fn_Desiatki(v) // Получаем на вход функции двузначное число
{
	var i = 0; // Сбрасываем счетчик цикла

	while (v > 10) // Пока число больше 10
	{
		v = v - 10; // Уменьшаем его на 10
		i++; 		// Счетчик увеличиваем на 1
		if (v < 10 && v > 0)
			i = i - 1; // Уменьшаем индекс массива Десяток на 1, потому что без этого
			           // выдает следующий ( неправильный ) элемент массива
	}

	if (v == 10) { // Если Число кратно 10-ти
		// Выводим элемент массива Десятков
		var s2 = document.getElementById("numstr").innerHTML = arr_Desiatki[i];   
		return s2;
	}
	else {
		// Выводим элемент массива Десятков и результат функции, вычисляющей Единицы
		var s2 = document.getElementById("numstr").innerHTML = arr_Desiatki[i] + '  ' + fn_Edinizy(v);   

		return s2;
	}
}

// = = = Функция определяющая Сотни  = = =
function fn_Sotni(v) // Получаем на вход функции трехзначное число
{
	var s3;
	var i = 0;                // Сбрасываем счетчик цикла

	while (v > 100)           // Пока число больше 100
	{
		v = v - 100;          // Уменьшаем его на 100
		i++; 			      // Счетчик увеличиваем на 1
		if (v < 100 && v > 0)
			i = i - 1;         // Уменьшаем индекс массива Сотен на 1, потому что 
			                   // без этого выдает следующий ( неправильный ) элемент массива
	}

	if (v == 100) {	 // Если Число - ровная сотня
		// Выводим элемент массива Сотен
		s3 = document.getElementById("numstr").innerHTML = arr_Sotni[i];                         
		return s3;
	}
	else if (v > 0 && v < 10) {  // Если Число ( 101 ... 109 )
		// Выводим элемент массива Сотен и Единиц
		s3 = document.getElementById("numstr").innerHTML = arr_Sotni[i] + '  ' + fn_Edinizy(v);  
		return s3;
	}
	else if (v > 10 && v < 20) { // Если Число ( 111 ... 119 )
		// Выводим элемент массива Сотен и Надцать
		s3 = document.getElementById("numstr").innerHTML = arr_Sotni[i] + '  ' + fn_Nadzat(v);   
		return s3;
	}
	else
	// Выводим элемент массива Сотен и результат функции, вычисляющей Десятки
		s3 = document.getElementById("numstr").innerHTML = arr_Sotni[i] + '  ' + fn_Desiatki(v);   
	return s3;
}

// = = =  Функция Склонение " Миллион / Мииллиона / Миллионов" = = =
function fn_mlny(f) {
	if (f > 10 && f < 20) {
		return 2;
	}

	while (f > 10) {
		f = f - 10;
	}

	switch (f) {
		case 1:
			return 0; break;
		case 2:
			return 1; break;
		case 3:
			return 1; break;
		case 4:
			return 1; break;
		default:
			return 2;
	}
}

// = = =  Функция Склонение " Тысяча /  Тысячи / Тысяч " = = =
function fn_tsch(f) {
	if (f > 10 && f < 20) {
		razryad = 0; return 2;
	}

	while (f > 10) {
		f = f - 10;
	}

	switch (f) {
		case 1:
			razryad = 1; return 0; break;
		case 2:
			razryad = 1; return 1; break;
		case 3:
			razryad = 1; return 1; break;
		case 4:
			razryad = 1; return 1; break;
		default:
			return 2;
	}
}

// = = = = = = = = = = = = = = = = = =  Т Е Л О   П Р О Г Р А М М Ы  = = = = = = = = = = = = = = = = = = = = = = = = = = =
function fn_Chislo(v) {
	var s;
	// Проверка количества знаков в числе
	if (v > 0 && v < 10) {      // Если однозначное
		s = fn_Edinizy(v); 		// Выводим результат функции, вычисляющей Единицы
		return s;
	}
	else if (v > 10 && v < 20) {// Если Надцать ( 11 ... 19 )
		s = fn_Nadzat(v);       // Вызываем функцию, определяющую Надцать.
		return s;
	}
	else if (v > 9 && v < 100) { // Если двузначное
		s = fn_Desiatki(v);      // Вызываем функцию, определяющую десятки. Она выведет Десятки и Единицы
		return s;
	}
	else if (v > 99 && v < 1000) { // Если трехзначное
		s = fn_Sotni(v);           // Вызываем функцию, определяющую сотни. Она выведет Сотни, Десятки и Единицы
		return s;
	}
}

function proverka(v) {
	var r, vtys, vtys_str, vedn, vedn_str, fm, ft, ftstr, fmstr, skl_tys, skl_mlny, vm_str, vm;
	razryad = 0;

	if (v > 0 && v < 1000)  // Если число трехзначное, определяем его и выводим
		fn_Chislo(v);
	else if (v > 999 && v < 1000000) { //  Если число от 1 000  до  1 000 000,
		r = v.length - 3; 			 //  находим количество старших разрядов, кроме трех младших
		vtys_str = (v.slice(0, r));  //  получаем строковое значение Тысяч
		vtys = parseInt(vtys_str);   //  получаем целое число - количество Тысяч
		var output_vtys = fn_Chislo(vtys);
		vedn = parseInt(v.substring(r, v.length)); //  получаем 3 младших разряда

		if (r == 3) // Если количество Тысяч трехзначное
			ftstr = (vtys_str.substring(1, vtys_str.length));  // отсекаем старший разряд (строковый)
		else
			ftstr = vtys_str;  // получаем два или один младших строковых разряда

		ft = parseInt(ftstr);	//  преобразуем в число
		skl_tys = fn_tsch(ft);  //  и на проверку склонения тысяч

		if (vedn == 0)
			document.getElementById("numstr").innerHTML = output_vtys + ' ' + arr_Tsch[skl_tys];
		else
			document.getElementById("numstr").innerHTML = output_vtys + ' ' + arr_Tsch[skl_tys] + ' ' + fn_Chislo(vedn);
	}

	else if (v > 999999 && v < 1000000000) {  //  Если число от 1 000 000  до  1 000 000 000, 
		r = v.length - 6; //  находим количество разрядов Миллионы, кроме шести младших
		vm_str = (v.slice(0, r)); // получаем строковое значение Миллионов, отсекаем остальные разряды

		if (r == 3)  // Если количество Миллионов трехзначное
			fmstr = (vm_str.substring(1, vm_str.length));  // Отсекаем старший разряд
		else
			fmstr = vm_str; // получаем два или один младших строковых разряда

		fm = parseInt(fmstr);  //  преобразуем в число
		skl_mlny = fn_mlny(fm); //  на проверку склонения Миллионов

		vm = parseInt(vm_str); //  получаем целое число - количество Миллионов
		var output_vm = fn_Chislo(vm);
		vedn_str = (v.substring(r, v.length)); //  получаем 6 строковых младших разрядов

		r = vedn_str.length - 3 //  находим количество старших разрядов, кроме трех младших
		vtys_str = (vedn_str.slice(0, r)); //  получаем строковое значение Тысяч

		if (r == 3) // Если количество Тысяч трехзначное
			ftstr = (vtys_str.substring(1, vtys_str.length));// отсекаем старший разряд (строковый)
		else
			ftstr = vtys_str; // получаем два или один младших строковых разряда

		ft = parseInt(ftstr);	//  преобразуем в число
		skl_tys = fn_tsch(ft);  //  и на проверку склонения тысяч

		vtys = parseInt(vtys_str);    //  получаем целое число - количество Тысяч
		var output_vtys = fn_Chislo(vtys);
		vedn = parseInt(vedn_str.substring(r, vedn_str.length));//  получаем 3 младших разряда

		if (vtys == 0 && vedn == 0)
			document.getElementById("numstr").innerHTML = output_vm + ' ' + arr_Mlny[skl_mlny];
		else if (vtys == 0)
			document.getElementById("numstr").innerHTML = output_vm + ' ' + arr_Mlny[skl_mlny] + ' ' + fn_Chislo(vedn);
		else if (vedn == 0)
			document.getElementById("numstr").innerHTML = output_vm + ' ' + arr_Mlny[skl_mlny] + ' ' + output_vtys + ' ' + arr_Tsch[skl_tys];
		else
			document.getElementById("numstr").innerHTML = output_vm + ' ' + arr_Mlny[skl_mlny] + ' ' + output_vtys + ' ' + arr_Tsch[skl_tys] + ' ' + fn_Chislo(vedn);
	}
	else if (v > 999999999)
		alert('Дальше миллиарды.....');
}
//***** Конец *******