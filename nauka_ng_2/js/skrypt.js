(function () {
	'use strict';

	angular.module('Apka', [])

	.controller('Kontroler', Kontroler)
	.service ('Serwis', Serwis)



	Kontroler.$inject = ['Serwis'];
	function Kontroler (Serwis)
	{
		var dupa = this;
		dupa.filtr = "";
		dupa.MenuForToday = "";
		dupa.odpowiedz = "............";
		dupa.lista = ["ciało", "krew", "czarnuch",
		"mizeria", "karambol", "megaloman", 1, 2, 3, "hujek"];
		dupa.styl="neutral";

		

		dupa.krzyknij = function () {
			var jedzenie = dupa.MenuForToday;
			jedzenie = jedzenie.trim();
			if (jedzenie === "")
			{
				dupa.odpowiedz = "enter some data first";
				dupa.styl="neutral";
			}	else
				{
					var ilosc = Serwis.policz (jedzenie);
						if (ilosc<4)
						{
							dupa.styl="notfat";
							dupa.odpowiedz="ENJOY!";
						}
							else
							{
								dupa.styl="toomuch";
								dupa.odpowiedz="TOO MUCH!";
							};

						
				};
		};

		dupa.wywal = function (ktora) {
			Serwis.wywal (ktora, dupa.lista);
		}
		
	};

function Serwis () {
	var sr = this;

sr.policz = function (jedzenie)
	{

		var counter = 1;
		for (var i = jedzenie.length - 2; i >= 0; i--) {
			if (jedzenie.charAt(i) === ",")
				{
					counter = counter+1;
				};
		};
		return counter;
	};

sr.wywal = function (numer, rzeczy)
	{
		rzeczy.splice (numer, 1);
	}
};

})();
