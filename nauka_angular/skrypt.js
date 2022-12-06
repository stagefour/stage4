(function () {
	'use strict';

	angular.module('pierwszaAppka', [])

	.controller('kontroler1', function ($scope, $filter)
	{
		$scope.imie = "";
		$scope.wartosc = 0;
		$scope.krzyk = "cichutko";

		$scope.wyswietlWartosc = function () {
			var licznik = policz ($scope.imie);
			$scope.wartosc = licznik;
		};

		$scope.duzeLitery = function () {
			var duze = $filter ('uppercase');
			$scope.imie = duze ($scope.imie);
		};

	function policz	(string) {
		var totalnaWartosc = 0;
		for (var i = 0; i < string.length; i=i+1) {
			totalnaWartosc = totalnaWartosc + string.charCodeAt (i);
		};

		return totalnaWartosc;
	};

		$scope.krzyknij = function () {
			$scope.krzyk = "GLOSNOOOOO!!!!!";
		};

});
})();
