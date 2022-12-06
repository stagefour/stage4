(function () {
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);




	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController ($scope)
	{
		$scope.MenuForToday = "";
		$scope.odpowiedz = "............";

		$scope.styl="neutral";
		
		$scope.krzyknij = function () {
			var jedzenie = $scope.MenuForToday;
			jedzenie = jedzenie.trim();
			if (jedzenie === "")
			{
				$scope.odpowiedz = "enter some data first";
				$scope.styl="neutral";
			}	else
				{
					var ilosc = policz (jedzenie);
						if (ilosc<4)
						{
							$scope.styl="notfat";
							$scope.odpowiedz="ENJOY!";
						}
							else
							{
								$scope.styl="toomuch";
								$scope.odpowiedz="TOO MUCH!";
							};

						
				};
		};
	};

	function policz (jedzenie)
	{

		var counter = 1;
		for (var i = jedzenie.length - 2; i >= 0; i--) {
			if (jedzenie.charAt(i) === ",")
				{
					counter = counter+1;
				};
		};
		return counter;
	}
})();
