(function () {
	'use strict';

	angular.module('Aplikacja', [])
	.controller('Kontroler', Kontroler)
	.service ('Serwis', Serwis)
	.component ('komponent', 
		{
			templateUrl: 'ins1.html',
			controller: KontrolerKomponentu,
			bindings:
						{
							rzeczy: '<',
							tytul: '@',
							wywal: '&'
						}
				});
	
	KontrolerKomponentu.$inject = ['$scope', '$element']
	function KontrolerKomponentu ($scope, $element)
		{
			var $ctrl = this;
			var wyswietlamy;
			$ctrl.Kupilim = new Array ();
			$ctrl.ListaZapasowa = new Array ();
			$ctrl.cena = 0;
			$ctrl.cc = "";


			$ctrl.reseta = function ()
				{
					console.log ("A HUJA TAM!");
					$ctrl.ListaZapasowa.length = 0;
					$ctrl.Kupilim.length = 0;
					$ctrl.cena = 0;
					$ctrl.cc = "";

					for (var i=0; i<$ctrl.rzeczy.length; i++)
					{
						$ctrl.ListaZapasowa.push($ctrl.rzeczy[i]);
					}
					wyswietlamy = 1;
				};


			$ctrl.zamow = function ()
				{
					wyswietlamy = 4;
				};


			$ctrl.kup = function (numer, co)
				{
					$ctrl.Kupilim.push(co);
					$ctrl.ListaZapasowa.splice(numer, 1);
					if (wyswietlamy === 2 && $ctrl.ListaZapasowa.length === 0)
						{ wyswietlamy = 5 };
					if (wyswietlamy === 1) { wyswietlamy = 2 };
					$ctrl.policzCene();
				};

			$ctrl.policzCene = function ()
				{
					var sumowanie = 0;
					for (var i=0; i<$ctrl.Kupilim.length; i=i+1)
						{
							console.log ($ctrl.Kupilim);
							sumowanie =
							sumowanie + $ctrl.Kupilim[i].cena;
						};
					$ctrl.cena = Math.round(sumowanie*100)/100;
				};



			$ctrl.karta = function ()
				{
					wyswietlamy = 3;
				};


			$ctrl.$onInit = function ()
				{
					console.log ("ON INIT");
					$ctrl.reseta ();
				};

			$ctrl.$onChanges = function (changeObj)
				{
					console.log ("changes: ",changeObj);
				}


			$ctrl.remove = function () 
				{
					$ctrl.reseta();
			    	$ctrl.wywal();
				};


			$ctrl.$doCheck = function ()
				{
					var zam = $element.find('.zamowienie');
					var blad = $element.find('.blad');
					var dokupienia = $element.find('.kupilem');
					var final = $element.find('.finalizacja');
					var licznik = $element.find('.licznik');

					if (wyswietlamy === 2)
							{
								zam.slideUp(900);
								blad.slideUp(900);
								dokupienia.slideDown(900);
								final.slideDown(900);
								licznik.slideDown(900);
							}
					else
					{
					if (wyswietlamy === 1)
							{
								zam.slideUp(900);
								blad.slideUp(900);
								dokupienia.slideDown(900);
								final.slideUp(900);
								licznik.slideUp(900);
							};
					if (wyswietlamy === 3)
							{
								zam.slideUp(900);
								blad.slideDown(900);
								dokupienia.slideUp(900);
								final.slideUp(900);
								licznik.slideUp(900);
							};
					if (wyswietlamy === 4)
							{
								zam.slideDown(900);
								blad.slideUp(900);
								dokupienia.slideUp(900);
								final.slideUp(900);
								licznik.slideUp(900);								
							};
					if (wyswietlamy === 5)
							{
								zam.slideUp(900);
								blad.slideUp(900);
								dokupienia.slideUp(900);
								final.slideDown(900);
								licznik.slideDown(900);																
							};
					};
				};
		}

	Kontroler.$inject = ['Serwis'];
	function Kontroler (Serwis)
		{
			var k = this;
			k.soundIcon = "pics/rura.png";
			k.soundText = "wyłącz muzę!!!";
			k.login = "";
			k.haslo = "";
			k.lista = Serwis.przekaz ();
			k.wejscie = false;
			k.muza = new Audio("music/tegies.mp3");
			k.muza.autoplay = true;
			k.muza.loop = true;


			k.dodaj = function ()
				{
					var pozycja = {lg: k.login, ps: k.haslo};
					k.wejscie = Serwis.sprawdz (pozycja);
					k.login = "";
					k.haslo = "";
				};

			k.nuta = function ()
				{
					console.log (k.muza);
					if (k.soundIcon === "pics/rura.png")
					{
						k.soundIcon = "pics/morda.png";
						k.soundText = "za cicho tu!";
						k.muza.pause();
					}
					else
					{
						k.soundIcon = "pics/rura.png";
						k.soundText = "wyłącz muzę!!!";
						k.muza.play();
					};
				};

			k.wywal = function ()
				{
					k.wejscie = Serwis.reseta ();
				};
		};
	
	function Serwis ()
		{
			var s = this;
			s.menu = [
			{nazwa: "Lubię Paczeć", ilosc: "2015", cena: 3.41},
			{nazwa: "Tego Jego", ilosc: "2014", cena: 3.22},
			{nazwa: "Los Iwiczna Locos", ilosc: "2014", cena: 2.89},
			{nazwa: "Gestapowski Płaszcz Życia", ilosc: "2017", cena: 4.43},
			{nazwa: "Skrzydła z Tłuszczu", ilosc: "2017", cena: 3.99},
			{nazwa: "Pogwałcono Prawa Me", ilosc: "2018", cena: 1.87},
			{nazwa: "Dintojra", ilosc: "2018", cena: 2.33},
			{nazwa: "Kiedy Idę Najebany (ulicami mego miasta w dzień)", ilosc: "2019", cena: 5.23},
			{nazwa: "Eksmisja Komornicza", ilosc: "2019", cena: 3.43},
			{nazwa: "Zimmmmmmno Mu", ilosc: "2019", cena: 2.97},
			{nazwa: "Krójże Mnie Tasakiem Losu", ilosc: "2020", cena: 8.32},
			{nazwa: "Wolał wypić niż zaruchać", ilosc: "2020", cena: 4.31},
			{nazwa: "Zakład mięsny w Kole (remix 2020)", ilosc: "2020", cena: 9.32},
			{nazwa: "Skłóceni przy wódce", ilosc: "2023", cena: 10.22},
			{nazwa: "Ostatniej zimy przestał stawać mi", ilosc: "2025", cena: 12.32},
			{nazwa: "O kosturze i w żebraczym łachu", ilosc: "2027", cena: 14.33},
			{nazwa: "Królewskie Opierdziny - The Greatest Hits", ilosc: "2030-2033", cena: 33.22}];

			s.sprawdz = function (co)
				{
					if (co.lg === "tegojego" && co.ps === "push")
					{
						return true;
					}
					else { return false };
				};

			s.przekaz = function ()
				{
					return s.menu;
				};

			s.reseta = function ()
				{
					return false;
				}
		};

})();