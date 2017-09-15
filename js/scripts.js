// scripts.js
var a = prompt('Wartość A:','6');
var h = prompt('Wartość B:', '10');
var value = getTriangleArea(a, h);
console.log('Wynik działania ' + a + ' and ' + h + ' is equal to ' + value);

function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		return 'nieprawidłowe dane';
	} else if (a > 0 && h > 0) {
		return a * h / 2
	}
};

console.log( getTriangleArea(4,7));
console.log( getTriangleArea(10,6));
console.log( getTriangleArea(-10,10));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(13, -12);
var triangle3Area = getTriangleArea(14, 15);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);


document.getElementById("prompt").innerHTML = 'Twój wynik to:' + value