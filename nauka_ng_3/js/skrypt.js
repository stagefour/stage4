(function () {
	'use strict';

	angular.module('ShoppingListCheckoff', [])

	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.controller('DodawanieZakupow', DodawanieZakupow)
	.service ('Checking', Checking)
	.directive ('sodomTag', sodomTag);


	ToBuyController.$inject = ['Checking'];
	function ToBuyController (Checking)
	{
		var tobuy = this;
		tobuy.list = Checking.listOfThingsToBuy;

		tobuy.gotit = function (which) {
			Checking.change (which, 1);
		};

		tobuy.wyczysc = function ()
			{
			Checking.sweep (0)
			};
	};

	AlreadyBoughtController.$inject = ['Checking'];
	function AlreadyBoughtController (Checking)
	{
		var bought = this;
		bought.list = Checking.listOfBoughtThings;

		bought.gotit = function (which)
			{
			Checking.change (which, 2);
			};

		bought.wyczysc = function ()
			{
			Checking.sweep (1);
			};
	};

	DodawanieZakupow.$inject = ['Checking'];
	function DodawanieZakupow (Checking)
	{
		var pyk = this;
		pyk.co ="";
		pyk.ile = "";
		pyk.wpisz = function ()
			{
				Checking.dodaj (pyk.co, pyk.ile);
				pyk.co = "";
				pyk.ile = "";
			};

		pyk.zaduzo = function ()
			{
				var ilosc = Checking.listOfThingsToBuy.length
							+ Checking.listOfBoughtThings.length;

				if (ilosc > 9)
					{ return true }
					else
						{ 
							return false };
			}
	}

function Checking () {
	var sr = this;
	sr.listOfThingsToBuy = new Array ();
	
	sr.listOfBoughtThings = new Array ();

sr.change = function (number, kierunek)
	{
	if (kierunek===1)
		{
		sr.listOfBoughtThings.push(sr.listOfThingsToBuy[number]);
		sr.listOfThingsToBuy.splice (number, 1);
		}
	else {
		sr.listOfThingsToBuy.push(sr.listOfBoughtThings[number]);
		sr.listOfBoughtThings.splice (number, 1);
		};
	}

sr.dodaj = function (co, ile)
	{
		var pozycja = {
			name: co,
			quantity: ile
		};
		if (co != "")
		{
		sr.listOfThingsToBuy.push(pozycja);
		};
	};

sr.sweep = function (co)
	{
		if (co === 0)
			{
				var dlugosc =
				sr.listOfThingsToBuy.length;
				sr.listOfThingsToBuy.splice (0 , dlugosc);
			}
		else
			{
				var dlugosc =
				sr.listOfBoughtThings.length;
				sr.listOfBoughtThings.splice (0, dlugosc);
			};
	};

};

function sodomTag () {
	var ddo = 
		{
			scope:
				{
					mojaLista: '=mojaLista',
					title: '@'
				},
			templateUrl: 'shot.html',
			controller: kontrolaStrachu,
			controllerAs: 'strach',
			bindToController: true,
			link: funkcjaLinku
		};


	return ddo;
}
	

function funkcjaLinku (scope, element, attrs, contoller)
	{
		scope.$watch ('strach.czyzero()',
			function (newValue, oldValue)
			{

				if (newValue === true)
				{
					jest ();
				}
				else
				{
					niema ();
				}
			});

		function jest ()
		{
			var warningElem = element.find("p");
			warningElem.slideDown(900);
		};

		function niema ()
		{
			var warningElem = element.find("p");
			warningElem.slideUp(900);
		};
	};




function kontrolaStrachu()
	{
		var strach = this;
		strach.czyzero = function () 
			{
				if (strach.mojaLista.list.length === 0)
					{	return true  }
				else {   return false  };
			};
	};


})();
