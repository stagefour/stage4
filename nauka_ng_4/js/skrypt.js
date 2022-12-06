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
	

	function KontrolerKomponentu ()
		{
			var $ctrl = this;

			$ctrl.$onInit = function ()
				{
					console.log ("ON INIT");
				};

			$ctrl.$onChanges = function (changeObj)
				{
					console.log ("changes: ",changeObj);
				}

			$ctrl.remove = function (myIndex) 
				{
			    	$ctrl.wywal({ index: myIndex });
				};

		}

	Kontroler.$inject = ['Serwis'];
	function Kontroler (Serwis)
		{
			var k = this;
			k.jedzenie = "";
			k.ilosc = "";

			k.lista = Serwis.przekaz();

			k.dodaj = function ()
				{
					var pozycja = {nazwa: k.jedzenie, ilosc: k.ilosc};
					Serwis.dodaj (pozycja);
					k.jedzenie = "";
					k.ilosc = "";
				};

			k.wywal = function (co)
				{
					Serwis.xxx (co);
				};
		}
	
	function Serwis ()
		{
			var s = this;
			s.menu = new Array ();


			s.dodaj = function (co)
				{
					if (co.nazwa != "")
					{
						s.menu.push (co);
					};
				};

			s.przekaz = function ()
				{
					return s.menu;
				};

			s.xxx = function (co)
				{
					s.menu.splice (co, 1);
				}
		};

})();