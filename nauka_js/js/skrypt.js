var message = "in global";

console.log ("hello" + message);

function test1 (a) {
		return a / 10;
	}

var b = 3 + test1(100);

console.log (b);
console.log (test1(150));


if (b===13 || b===11) {
	console.log ("zgadza sie");
}
else {
	console.log ("nie zgadza sie");
}

for (b; b>1; b = b-3) {
	console.log (b);
}

var company = new Object();
company.name = "Sodom";
company.structure = new Object();
company.structure.prezes = "Pawel Banasiewicz";
company.structure.sekretarka = "Ania";
company.structure.robotnik = "Adam";

console.log (company);
console.log ("Przedsiębiorstwo: " + company["name"]);
console.log ("Struktura: ");
console.log ("Prezes: " + company.structure["prezes"]);
console.log ("Sekretarka: " + company.structure["sekretarka"]);
console.log ("Robotnik: " + company.structure["robotnik"]);

console.log (JSON.stringify (company));

var sodom = {
	prezes: "Pawel",
	samochody: {
		sluzbowy: "Mercedes",
		prywatny: "Bmw"
	},
	warosc: 100
	};

for (var prop in sodom) {
	console.log (prop + ": " + sodom[prop]);
}

console.log (sodom);

function Circle (promien) {
	this.promien = promien;
}

Circle.prototype.powierzchnia =
	function () {
		return Math.PI * Math.pow (this.promien, 2);
	};

var kolo = new Circle (2);
console.log (kolo);
console.log (kolo.powierzchnia());


var Tabela = new Array ();
Tabela [0] = "Pawel";
Tabela [1] = 2;
Tabela [2] = function (name) {
	console.log ("Hello " + name);
};
Tabela [3] = {
	kurs : "HTML" };

b=0;


for (b; b < Tabela.length; b = b+1) {
	console.log (b + " -- " + Tabela[b]);
}

Tabela[2] (Tabela [0] + ", idz na kurs " +
	Tabela [3].kurs);

console.log (Tabela);

// Imm Invoked Funct Expression

(function() { console.log ("Brudny najbrudniejszy") })();

function sayhello()
	{

		var kronos = document.getElementById("name").value;
		console.log (kronos);
		document.getElementById("mega")
		.textContent = kronos;

	if (kronos === "Pawel")
	{
		document.querySelector("#imie")
		.textContent = kronos;
	}

}