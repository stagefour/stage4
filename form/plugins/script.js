(function () {

	'use strict';

	angular.module('Aplikacja', [])
	.controller('Kontroler', Kontroler)
	.service ('Serwis', Serwis);


Kontroler.$inject = ['Serwis'];
function Kontroler (Serwis)
	{
		var k = this;
		k.firstpage = true;
		k.secondpage = false;
		k.sent = false;
		k.success = false;
		k.failed = false;
		k.salekomputerowe = ["x"];
		k.klasy = ["x"];
		k.ContactDetails = {};
		k.ContactDetails.computers = [];
		k.ContactDetails.classes = [];
		k.ContactDetails.term = "yes";
		k.message = "";


		k.flippage = function ()
		{
			k.firstpage = false;
			k.secondpage = true;
		};

		k.dodajklase = function ()
		{
			k.klasy.push("x");
		};

		k.usunklase = function ()
		{
			if (k.klasy.length>1) {
				k.klasy.pop();
				k.ContactDetails.classes.pop();
			};
		};

		k.usunsale = function ()
		{
			if (k.salekomputerowe.length>1) {
				k.salekomputerowe.pop();
				k.ContactDetails.computers.pop();
			};
			console.log (k.ContactDetails);			
		};

		k.dodajsale = function ()
		{
			k.salekomputerowe.push("x");
		};

		k.sendIt = function ()
		{

			console.log (k.ContactDetails);
			k.sent = true;
			k.secondpage = false;
			Serwis.go(k.ContactDetails).then(function(data)
			{
		
				k.success = true;
			}).catch(function ()
			{
				k.failed = true;
		
			});
		};
	};




Serwis.$inject = ['$http'];
function Serwis ($http)
	{
		var s = this;


		s.go = function (content)
		 	{	
		 		var adres = "../../app/vc-map/api/contactus";
		 		return $http({
  				method: 'POST',
  				url: adres,
  				data: content
				}).then(function (response) {
					return response.data;
				});
			};

	};

})();

