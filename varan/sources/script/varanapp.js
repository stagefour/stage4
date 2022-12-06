(function () {

	'use strict';


    angular.module('VaranApplication', ['ngAudio', 'ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
	.config(RoutesConfig)
	.controller('HomeController', HomeController)
    .controller('CareerController', CareerController)
    .controller('LetterController', LetterController)
    .controller('PastimeController', PastimeController)
    .controller('ContactController', ContactController)
	.service('ServiceEngine', ServiceEngine);





	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) 
		{
			
			$urlRouterProvider.otherwise('/');

			$stateProvider

			.state('home', {
    		url: '/',
    		templateUrl: 'sources/chunks/home.html',
    		controller: 'HomeController as k',
			})

			.state('career', {
			url: '/career',
			templateUrl: 'sources/chunks/career.html',
			controller: 'CareerController as k',
			})

			.state('letter', {
			url: '/letter',
			templateUrl: 'sources/chunks/letter.html',
			controller: 'LetterController as k',
			})

			.state('pastime', {
			url: '/pastime',
			templateUrl: 'sources/chunks/pastime.html',
			controller: 'PastimeController as k',
			})

			.state('contact', {
			url: '/contact',
			templateUrl: 'sources/chunks/contact.html',
			controller: 'ContactController as k',
			})

        };


HomeController.$inject = ['ServiceEngine'];
function HomeController (ServiceEngine)
        {
			var k = this;
			k.showLizard = false;

			setTimeout(function(){ k.showLizard = true; }, 1000);

        };

CareerController.$inject = ['ServiceEngine'];
function CareerController (ServiceEngine)
        {
			var k = this;
			k.careerText = false;
			k.work = false;
			k.education = false;
			k.certificates = false;
			k.languages = false;


			k.flipPage = function (p)
			{
				if (p === 1) { k.education = false; k.certificates = false; k.languages = false;
					setTimeout(function(){ k.work = true; 
					}, 2010); };
				if (p === 2) { k.work = false; k.certificates = false; k.languages = false;
				setTimeout(function(){ k.education = true; 
				}, 2010); };
				if (p === 3) { k.work = false; k.education = false; k.languages = false;
					setTimeout(function(){ k.certificates = true; 
					}, 2010); };
				if (p === 4) { k.work = false; k.certificates = false; k.education = false; 
						setTimeout(function(){ k.languages = true; 
					}, 2010); };



			};

			setTimeout(function(){ k.careerText = true; }, 1000);		
        };

LetterController.$inject = ['ServiceEngine'];
function LetterController (ServiceEngine)
        {
			var k = this;
			k.showTheLetter = false;
			setTimeout(function(){ k.showTheLetter = true; }, 1000);

        };

PastimeController.$inject = ['ServiceEngine'];
function PastimeController (ServiceEngine)
        {
			var k = this;
			k.interestsText = false;
			k.games = false;
			k.guitar = false;
			k.travel = false;
			k.gamesIntro = true;
			k.theList = false;
			k.guitarIntro = true;
			k.guitarInspirations = false;


			k.gamelist = ["Gothic", "Gothic 2 + The Night of The Raven", "Gothic 3", "The Elder Scrolls: Skyrim",
						"Fallout: New Vegas", "Mount and Blade", "Dragon's Dogma: Dark Arisen", "Dragon Age: Origins", 
						"ELEX", "Metro: Last Light", "Grand Theft Auto V", "The Witcher: Enhanced Edition", "The Witcher 3: Wild Hunt",
						"XCOM 2: War of The Chosen", "Risen, Risen 2, Risen 3", "Assassin's Creed: Odyssey", "Pillars of Eternity",
						"Call of Juarez: Gunslinger", "Two Worlds, Two Worlds 2", "Battlefield: Bad Company 2", "Dark Souls 3",
						"This War of Mine", "Sleeping Dogs", "Mafia", "Mafia 2", "Call of Duty", "… and many more and still waiting for more to come"];

			k.guitarDescription = ["Pat Metheny", "John Pettrucci", "James Brown", "BB King", "Red Hot Chili Peppers", "Faith no More", "Slayer", "Tower of Power", "Stevie Wonder", "... and many more"];

			k.otherActivities = ["movies", "the gym", "writing stories", "reading", "sailing", "my cat", "travelling"]

			k.flipPage = function(p)
			{
			if (p === 1) { k.guitar = false; k.travel = false; k.theList = false; k.games = false;
				setTimeout(function(){ k.games = true; k.gamesIntro = true; 
				}, 2010); };
			if (p === 2) { k.games = false; k.travel = false; k.guitarInspirations = false; k.guitar = false;
			setTimeout(function(){ k.guitar = true; k.guitarIntro = true; 
			}, 2010); };
			if (p === 3) { k.games = false; k.guitar = false; k.travelInfo = false; k.travel = false;
				setTimeout(function(){ k.travel = true; k.travelIntro = true;
				}, 2010); };
			};

			k.ShowTheList = function ()
			{
				k.gamesIntro = false;
				setTimeout(function(){ k.theList = true; }, 1010);
			};

			k.ShowInspirations = function ()
			{
				k.guitarIntro = false;
				setTimeout(function(){ k.guitarInspirations = true; }, 1010);				
			};


			setTimeout(function(){ k.interestsText = true; }, 1010);

        };

ContactController.$inject = ['ServiceEngine'];
function ContactController (ServiceEngine)
        {
			var k = this;
			k.fotopad = false;
			k.contactText = false;

			setTimeout(function(){ k.fotopad = true; }, 1000);
			setTimeout(function(){ k.contactText = true; }, 2500);
        };

ServiceEngine.$inject = ['ngAudio'];
function ServiceEngine (ngAudio)
        {
            var s = this;
        };

    })();
