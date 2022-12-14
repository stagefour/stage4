(function () {

	'use strict';


	angular.module('CounterpartIssues', ['ngAudio', 'ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
	.run (Starter)
	.config(RoutesConfig)
	.controller('PortfolioCtrl', PortfolioCtrl)
	.controller('ContactCtrl', ContactCtrl)
	.controller('HomeCtrl', HomeCtrl)
	.controller('AboutCtrl', AboutCtrl)
	.controller('OfferCtrl', OfferCtrl)
	.controller('PokerCtrl', PokerCtrl)
	.service('Serwis', Serwis);


	Starter.$inject = ['$rootScope', '$state'];
	function Starter ($rootScope, $state)
		{
			$rootScope.$state = $state;
		};


	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) 
		{
			
			$urlRouterProvider.otherwise('/');

			$stateProvider

			.state('home', {
    		url: '/',
    		templateUrl: 'sources/chunks/home.html',
    		controller: 'HomeCtrl as k',
    		data: 	{
    			bodyClass: 'home-template'
    				}
			})

			.state('about', {
			url: '/about',
			templateUrl: 'sources/chunks/about.html',
			controller: 'AboutCtrl as k',
    		data: 	{
    			bodyClass: 'about-template'
    				}
			})

			.state('offer', {
			url: '/offer',
			templateUrl: 'sources/chunks/offer.html',
			controller: 'OfferCtrl as k',
    		data: 	{
    			bodyClass: 'offer-template'
    				}
			})

			.state('portfolio', {
			url: '/portfolio',
			templateUrl: 'sources/chunks/portfolio.html',
			controller: 'PortfolioCtrl as k',
    		data: 	{
    			bodyClass: 'portfolio-template'
    				}
			})

			.state('poker', {
			url: '/dice',
			templateUrl: 'sources/chunks/poker.html',
			controller: 'PokerCtrl as k',
			data: 	{
				bodyClass: 'poker-template'
					}
			})

			.state('contact', {
			url: '/contact',
			templateUrl: 'sources/chunks/contact.html',
			controller: 'ContactCtrl as k',
    		data: 	{
    			bodyClass: 'contact-template'
    				}
			})

		};


PokerCtrl.$inject = ['Serwis', '$state'];
function PokerCtrl (Serwis, $state)
{
		var k = this;

		var startUp = Serwis.init (5);
		k.soundIcon = startUp.music;
		k.soundShutUp = startUp.sound;
		k.dieseLeute = {};
		k.dieseLeute = Serwis.passName ("justpass");
		k.brutality = false;
		k.AlbertynaPicture = "sources/media/pics/poker1.jpg";
		k.AlbertynaIdle = true;
		k.shufflebutton = false;
		k.playbuttons = false;
		k.playermoney = 1000;
		k.photojoker = false;
		k.winningScreen = false;
		k.mymoney = 1000;
		k.ascendus = 1;
		k.round = 1;
		k.changeDone = false;
		k.buttonText = "Wymieniam!";
		k.moneypile = 0;
		k.whatIdo = "";
		k.winner = "";
		k.showWinner = false;
		k.minimumBet = 15;
		k.bid = k.minimumBet;
		k.dice = ['sources/media/icons/one.png', 'sources/media/icons/two.png', 'sources/media/icons/three.png', 'sources/media/icons/four.png', 'sources/media/icons/five.png', 'sources/media/icons/six.png'];
		k.playercards = [];
		k.mycards = [];
		k.noLooking = true;
		k.swapemDice = false;
		k.points = false;
		k.tuapua = "";
		k.duplexpua = "";

		k.nuta = function (what)
		{
			if (what === 1)
			{
				k.soundIcon = Serwis.nuta (1);
			} else
			{
				k.soundShutUp = Serwis.nuta (2);
			};
		};

		function finishThatBlast (didAlbertynaLoose)
		{
			var sound = 0;

			setTimeout(function(){
			if (didAlbertynaLoose)
			{
				k.whatIdo = "Wygra??e??! A?? nie mog?? uwierzy??. Gratuluj?? szcz????cia wygrania darmowej metamorfozy Twej nory, kt??r?? - zgodnie z obietnic?? - zaprojektuj?? i b??d?? nadzorowa??. Ty pokrywasz tylko koszt materia????w!";
				k.AlbertynaPicture = "sources/media/pics/grandfinale.jpg";	sound = 6;
			} else
			{
				k.whatIdo = "Hah! M??wi??am Ci, ??e jestem dobra w ko??ci! Mam nadziej??, ??e nie zapomnisz o naszej umowie i zatrudnisz mnie do zaprojektowania Twoich wn??trz. Obiecuj??, ??e b??dziesz naprawd?? zadowolony, a Twoje ??ycie nabierze kolor??w.";
				k.AlbertynaPicture = "sources/media/pics/playersbroke.jpg"; sound = 9;
			};
			}, 3500);
			
			setTimeout(function(){			
				Serwis.soundMachine (sound);
				k.winningScreen = true;
						 }, 4000);

		};



		function undressingCheck ()
		{
			var temporaryPicture = "";
			var newAscendus = 0;

			if (k.playermoney < 1)
			{
				k.brutality = false;
				Serwis.init (7);
			setTimeout(function(){
				finishThatBlast (false); }, 1200);				
			}

			else {
			if (k.mymoney > 900) { temporaryPicture = "sources/media/pics/poker1.jpg"; newAscendus = 1; };
			if ((k.mymoney > 700) && (k.mymoney < 901))  { temporaryPicture = "sources/media/pics/poker2.jpg"; newAscendus = 2;  };
			if ((k.mymoney > 500) && (k.mymoney < 701))  { temporaryPicture = "sources/media/pics/poker3.jpg"; newAscendus = 3;  };
			if ((k.mymoney > 300) && (k.mymoney < 501))  { temporaryPicture = "sources/media/pics/poker4.jpg"; newAscendus = 4;  };
			if ((k.mymoney > 100) && (k.mymoney < 301))  { temporaryPicture = "sources/media/pics/poker5.jpg"; newAscendus = 5;  };
			if ((k.mymoney > 0) && (k.mymoney < 101))  { temporaryPicture = "sources/media/pics/poker6.jpg"; newAscendus = 6;  };
			if (k.mymoney < 1)  { 
				k.brutality = false;
				Serwis.init (7);
			setTimeout(function(){
				finishThatBlast (true); }, 1200);
			};

			if (k.AlbertynaPicture != temporaryPicture)
			{
				k.photojoker = false;
			setTimeout(function(){ 
			k.AlbertynaPicture = temporaryPicture;
			k.photojoker = true;
			if (k.ascendus < newAscendus)
				{	Serwis.soundMachine(10); }
				else {	Serwis.soundMachine(11); };
			k.ascendus = newAscendus;
			}, 1000);
			};

		};	
		};

		function showUsWhoWon ()
		{
			var i = 0;

			setTimeout(function(){ k.showWinner = true;
			Serwis.soundMachine (14);

			setTimeout(function(){
			if (k.winner === "wygrywa Albertyna!")
			{
				Serwis.soundMachine (1);
				k.mymoney = k.mymoney + k.moneypile;
				k.moneypile = 0;
				Serwis.soundMachine (8);
			}
			else 
			{ if (k.winner!="REMIS!")
			{
				Serwis.soundMachine (13);
				k.playermoney = k.playermoney + k.moneypile;
				k.moneypile = 0;
				Serwis.soundMachine (8);
			} else
				{
					Serwis.soundMachine (17);
				};
			};

			setTimeout(function(){ k.shufflebutton = true; k.bid = k.minimumBet;
				k.showWinner = false; k.round = 1;
			for (i=0; i<6; i++)
			{
				k.playercards.pop();
				k.mycards.pop();
			};
				k.points = false;
				undressingCheck (); }, 4000);
			}, 1500);
			 }, 1200);
		};


		k.yuppi = function ()
		{
			k.winningScreen = false;
			setTimeout(function(){ Serwis.soundMachine(12); }, 500);
			setTimeout(function(){ 
			Serwis.soundMachine(20); 
			setTimeout(function(){ $state.go('home');}, 1500); }, 2800);
		};


		k.shuffle = function ()
		{
			var i = 0;
			var rc = 0;
			var rl = 0;

			k.changeDone = false;
			k.noLooking = true;

			k.buttonText = "Wymieniam!";

			k.shufflebutton = false;
			setTimeout(function(){
			Serwis.soundMachine (8);
			k.playermoney = k.playermoney - k.minimumBet;
			k.mymoney = k.mymoney - k.minimumBet;
			k.moneypile = k.moneypile + k.minimumBet + k.minimumBet;
			k.bid = k.minimumBet;
			k.round = 1;

			undressingCheck ();
			 }, 1200);

			setTimeout(function() {
			for (i=0; i<6; i++)
			{
				rc = Math.floor(Math.random() * 6) + 1;
				rl = Math.floor(Math.random() * 6) + 1;

				k.playercards [i] = rc;	k.mycards [i] = rl;
			};

			k.playercards.sort(function(a, b){return b-a}); k.mycards.sort(function(a, b){return b-a});

			}, 2900);

			setTimeout(function(){ k.playbuttons = true; }, 1200);

		};

		k.ruchAlbertyny = function ()
		{
			var myStrength = 0;
			var i = 0;
			var bluffFactor = Math.floor(Math.random() * 100);

			for (i=0; i<6; i++)
			{
				var myStrength = myStrength + k.mycards[i];
			};

			var additionalText = "";

			if (myStrength>30) {
				if (k.mymoney > 2*k.bid) { additionalText = " podnosz?? stawk??!!!"; }
					else {
						if (k.changeDone) { additionalText = " sprawdzam!!!"; }
							else { additionalText = " zmieniam!!!"; };
					};
				};

			if ((myStrength < 31) && (myStrength > 24)) {
				if ((bluffFactor > 70) && (k.mymoney > 2*k.bid)) { additionalText = " podnosz?? stawk??!!!"; }
				else {
				if ((bluffFactor < 10) && (k.moneypile < 105)) { additionalText = " pasuj??...."; }
					else {
						if (k.changeDone) { additionalText = " sprawdzam!!!"; }
							else { additionalText = " zmieniam!!!"; };
					};
				};
				};

			if ((myStrength < 25) && (myStrength > 17)) {
				if ((bluffFactor > 80) && (k.mymoney > 3*k.bid)) { additionalText = " podnosz?? stawk??!!!"; };
				if ((bluffFactor < 20) && (k.moneypile < 140)) { additionalText = " pasuj??...."; }
					else {
						if (k.changeDone) { additionalText = " sprawdzam!!!"; }
							else { additionalText = " zmieniam!!!"; };
					};
				};

			if (myStrength < 18) {
				if (bluffFactor > 93) { additionalText = " podnosz?? stawk??!!!"; };
				if (bluffFactor < 45) { additionalText = " pasuj??...."; }
					else {
						if ((k.moneypile>65) && (!k.changeDone)) {  additionalText = " zmieniam!!!"; }
							else {  additionalText = " pasuj??...."; };
					};
				};

			if ((additionalText === " podnosz?? stawk??!!!") && (k.round > 4))
			{
				if (!changeDone) { additionalText = " zmieniam!!!"; }
					else { additionalText = " sprawdzam!!!"; };
			}

			k.whatIdo = "... no wi??c " + Serwis.caressMe() + " ... ";

			setTimeout(function(){  k.AlbertynaIdle=false; Serwis.soundMachine(5); }, 1000);
			setTimeout(function(){  k.whatIdo = k.whatIdo + additionalText; 
			if (additionalText === " podnosz?? stawk??!!!")
			{
			k.bid = k.bid + k.minimumBet;
			k.mymoney = k.mymoney - k.bid;
			k.moneypile = k.moneypile + k.bid;

			Serwis.soundMachine (8);
			setTimeout(function(){  k.AlbertynaIdle=true; k.playbuttons = true; 
						k.round = k.round + 1; }, 2000);
			};

			if (additionalText === " sprawdzam!!!")
			{
			Serwis.soundMachine (15);
			setTimeout(function(){  k.AlbertynaIdle=true; k.check (1); }, 2000);				
			};

			if (additionalText === " zmieniam!!!")
			{
			Serwis.soundMachine (18);
			setTimeout(function(){  k.AlbertynaIdle=true; k.check (1); }, 2000);				
			};

			if (additionalText === " pasuj??....")
			{
				Serwis.soundMachine (16);
				k.winner = "wygrywa " + k.dieseLeute.name + "!";
				setTimeout(function(){  k.AlbertynaIdle=true; showUsWhoWon(); }, 2000);					
			};
			}, 3000);
		};

		k.raise = function ()
		{
			k.bid = k.bid + k.minimumBet;
			k.playermoney = k.playermoney - k.bid;
			k.moneypile = k.moneypile + k.bid;
			k.round = k.round + 1;
			k.whatIdo = "m??j ruch ....";
			k.playbuttons = false;
			setTimeout(function(){ 
			k.AlbertynaIdle = false;
			Serwis.soundMachine(0); }, 1200);	
			setTimeout(function(){  k.AlbertynaIdle=true; 
			setTimeout(function(){

			k.ruchAlbertyny(); }, 1000);
			}, 3000);						
		};

		k.pass = function ()
		{
			k.winner = "wygrywa Albertyna!";
			k.playbuttons = false;
			showUsWhoWon ();
		};

		k.changeDice = function (howmany)
		{
			var i = 0;
			var y = 0;
			var rn = 0;
			var playerswapper = "";
			var Albertynaswapper = "";
			k.swapemDice = false;

			for (i = 0; i < howmany; i++)
			{
				k.playermoney = k.playermoney - k.bid;
				k.moneypile = k.moneypile + k.bid;
				k.playercards.pop();
			};

			for (i = 0; i < howmany; i++)
			{
				rn = Math.floor(Math.random() * 6) + 1;
				k.playercards.push(rn);	
			};

			k.playercards.sort(function(a, b){return b-a});

			i = 0;

			if (k.mycards[5]<4)
			{
				i = i+1;
				k.mycards.pop();
				k.mymoney = k.mymoney - k.bid;
				k.moneypile = k.moneypile + k.bid;
				if (k.mycards[4]<4)
				{
					i = i+1;
					k.mycards.pop();
					k.mymoney = k.mymoney - k.bid;
					k.moneypile = k.moneypile + k.bid;					
					if (k.mycards[3]<4)
					{
					i = i+1;
					k.mycards.pop();
					k.mymoney = k.mymoney - k.bid;
					k.moneypile = k.moneypile + k.bid;		
					};
				};
			};
			
			for (y = 0; y < i; y++)
			{
				rn = Math.floor(Math.random() * 6) + 1;
				k.mycards.push(rn);					
			};

			k.mycards.sort(function(a, b){return b-a});

			if (howmany === 0) { playerswapper = "nie wymieniona ani jedna kostka." };
			if (howmany === 1) { playerswapper = "wymieniona jedna kostka." };
			if (howmany === 2) { playerswapper = "wymienione dwie kostki." };
			if (howmany === 3) { playerswapper = "wymienione trzy kostki." };

			if (i === 0) { Albertynaswapper = "nie wymieniona ani jedna kostka." };
			if (i === 1) { Albertynaswapper = "wymieniona jedna kostka." };
			if (i === 2) { Albertynaswapper = "wymienione dwie kostki." };
			if (i === 3) { Albertynaswapper = "wymienione trzy kostki." };


			k.winner = k.dieseLeute.name + " : " + playerswapper + "\n"
			+ "Albertyna " + " : " + Albertynaswapper;

			k.showWinner = true;
			setTimeout(function(){
				k.showWinner = false;
			}, 5000);

			Serwis.soundMachine (19);

			setTimeout(function(){
			k.buttonText = "Sprawdzam!";
			k.round = 1;
			console.log (k.changeDone);
			if (k.changeDone) 
			{
			k.playbuttons = true;
			} else
			{
			k.changeDone = true;
			k.whatIdo = "m??j ruch ....";
			setTimeout(function(){ 
			k.AlbertynaIdle = false;
			Serwis.soundMachine(0); }, 1200);	
			setTimeout(function(){  k.AlbertynaIdle=true; 
			setTimeout(function(){

			k.ruchAlbertyny(); }, 1000);
			}, 3000); };
			}, 2500);
		};


		k.check = function (who)
		{

			k.playbuttons = false;
			var AlbertynaPoints = 0;
			var PlayerPoints = 0;
			var i = 0;

			if (who === 0)
			{
			k.playermoney = k.playermoney - k.bid;
			k.moneypile = k.moneypile + k.bid;				
			}
			else
			{
			k.mymoney = k.mymoney - k.bid;
			k.moneypile = k.moneypile + k.bid;			
			};
			Serwis.soundMachine (8);

			if (k.changeDone)
			{
		
			k.noLooking = false; 
			Serwis.soundMachine (4);
			setTimeout(function(){

				k.points = true;
			}, 1000);


			k.round = 1;
			for (i = 0; i<6; i++)
			{
				AlbertynaPoints = AlbertynaPoints + k.mycards [i];
				PlayerPoints = PlayerPoints + k.playercards [i];
			};

			k.tuapua = PlayerPoints.toString();
			k.duplexpua = AlbertynaPoints.toString();


			setTimeout(function(){
			if (AlbertynaPoints > PlayerPoints) { k.winner = "wygrywa Albertyna!";};
			if (AlbertynaPoints ===  PlayerPoints) { k.winner = "REMIS!"; };
			if (AlbertynaPoints < PlayerPoints) { k.winner = "wygrywa " + k.dieseLeute.name;};
			showUsWhoWon (); }, 2000);
			}
			else { 
				if (who === 1) { k.changeDone = true };
				setTimeout(function(){
				Serwis.soundMachine (2);
				k.swapemDice = true;
				}, 2000)};
		};


		setTimeout(function(){ k.brutality = true; Serwis.soundMachine (7);
		setTimeout(function(){ k.photojoker = true; Serwis.soundMachine (21); k.shufflebutton = true; }, 7000);			
		}, 5000); 
		};


PortfolioCtrl.$inject = ['Serwis'];
function PortfolioCtrl (Serwis)
	{
		var k = this;
		k.photos = [];
		k.karuzelizowal = false;
		k.diabolizowal = false;
		k.whichProject = 0;

		k.photos = [
		{
			image: 'sources/media/carousel/s1.jpg',
			text: "elegancka jadalnia",
			description: 
			"Projektowa??am t?? jadalni?? dla rodziny kar????w w 2014 roku. Tak naprawd?? - cho?? pomieszczenie wygl??da na pe??nowymiarowe - to ma 2 na 3 metry, a np. krzes??a po ok. 40 cm. wysoko??ci. Ciekawe wyzwanie, jedno z pierwszych. Kar??y ucztuj?? tam po dzi?? dzie??.",
			id : 1
		},
		{
			image: 'sources/media/carousel/s2.jpg',
			text: "pracownia na poddaszu",
			description: 
			"Ta pracownia powsta??a dla cz??owieka, kt??ry nic nie chcia?? robi?? - by?? zbyt leniwy. Prosi?? o stworzenie takiego wn??trza, kt??re wr??cz uniemo??liwia jak??kolwiek prac??. St??d gipsowe krzywizny, za niskie biurko i szafa z pochy??ymi p????kami, z kt??rych wszystko spada.",
			id : 2
		},
		{
			image: 'sources/media/carousel/s3.jpg',
			text: "turkusowa ??azienka",
			description: 
			"Bardzo ucieszy??o mnie, gdy o pomoc przy projektowaniu ??azienki zg??osi??a si?? do mnie para daltonist??w, gdy?? mog??am wypapra?? zalegaj??c?? mi w sk??adziku turkusow?? olejn??. Wysz??o nawet zgrabnie.",
			id : 3
		},		
		{
			image: 'sources/media/carousel/s4.jpg',
			text: "??azienka retro",
			description: 
			"Jest to ??azienka zaprojektowana na specjalne ??yczenie pewnej korpulentnej pani. Pod wymiar jej niewymiarowych bioder sprowadza??am robion?? na zam??wienie wann?? firmy Tresse z w??oskiego Neppi. Wanna s??u??y do siedzenia w niej i namydlania nogi, wystawionej w g??r?? by wabi?? samc??w.",
			id : 4
		},
		{
			image: 'sources/media/carousel/s5.jpg',
			text: "diaboliczna ubikacja",
			description: 
			"Ta ubikacja zosta??a przeze mnie zaprojektowana dla osoby cichej i nie??mia??ej, w konsultacji z psychologiem oraz matadorem. Efekt przeszed?? naj??mielsze oczekiwania. U??ytkownik ??azienki w skutek kolorystycznej stymulacji sensorycznej, w nied??ugim czasie po renowacji wymordowa?? siekier?? ca???? swoj?? rodzin??.",
			id : 5
		},
		{
			image: 'sources/media/carousel/s6.jpg',
			text: "szykowna sala kominkowa",
			description: 
			"Projekt sali kominkowej w stylu Barbary Niechcic zosta?? mi zlecony przez dwie panie oko??o sze????dziesi??tki. Zgodnie z ich ??yczeniem, jego motywem przewodnim i celem by??o takie dobranie kolor??w, dodatk??w, mebli oraz tak umiej??tne ich ustawienie, ??eby negatywna energia feng-shui wygania??a stamt??d ka??dego go??cia po maksymalnie trzech minutach i to z migren??. Panie nie lubi??y wizyt. Spisa??am si?? chyba dobrze, bo sama po oddaniu projektu nie mog??am tam wytrzyma??.",
			id : 6
		},
		{
			image: 'sources/media/carousel/s7.jpg',
			text: "salon snob??w",
			description: 
			"Salon snob??w to ci??g dalszy sali kominkowej. W salonie snob??w jest miejsce na czytanie romans??w, uk??adanie pasjans??w i specjalny k??cik obgadywania ludzi.",
			id : 7
		},
		{
			image: 'sources/media/carousel/s8.jpg',
			text: "sypialnia letnia",
			description: 
			"Sypialnia letnia - inspirowana pla??ami Malediw??w - powsta??a na ??yczenie pewnego przeuroczego by??ego gwa??ciciela, kt??ry odpokutowawszy grzechy m??odo??ci w zak??adzie karnym, chcia?? stworzy?? sobie bezpieczn?? oaz?? spokojnego snu. Projekt multimedialny! Pr??cz starannie zaprojektowanej strony wizualnej dodatkowo z wmontowanych w ??ciany g??o??nik??w s??czy si?? non-stop d??wi??k rozpinanych rytmicznie rozpork??w.",
			id : 8
		},
		{
			image: 'sources/media/carousel/s9.jpg',
			text: "zak??tek utraty dziewictwa",
			description: 
			"Stworzona przeze mnie zaciszna norka, w kt??rej zleceniodawczyni - czterdziestoletnia pani A. - zamierza??a straci?? dziewictwo z pewnym do???? nieciekawym jegomo??ciem. Czy zamiar si?? uda??? Nie wiem. Natomiast ciekawostk?? by??o to, ??e pani A. zap??aci??a za projekt przetworami owocowo-warzywnymi w??asnej produkcji. Do dzi?? si?? nimi zajadam!",
			id : 9
		},
		{
			image: 'sources/media/carousel/s10.jpg',
			text: "sala bankietowa",
			description: 
			"Jednorazowy projekt - tak zwana fuszka - na wieczorek zapoznawczy internetowego ko??a wielbicieli film??w erotycznych z serii R????owa Landrynka. St??d kolorystyka. Bardzo zacna impreza odby??a si?? w tym wn??trzu, bardzo w skutek niej to wn??trze ucierpia??o. C????... Kt???? by si?? spodziewa?? tak niecodziennej pijackiej ??arliwo??ci w??r??d zdawa??oby si?? spokojnych internaut??w?",
			id : 10
		},
		{
			image: 'sources/media/carousel/s11.jpg',
			text: "klub jazzowy",
			description: 
			"Znajoma poprosi??a mnie o przemian?? jej pijalni piwa Ufo w snobistyczny klub jazzowy. Niestety nie dysponowa??a szerokim bud??etem, st??d jedynie przemalowa??am ??ciany i narysowa??am na nich kred?? instrumenty oraz udzieli??am jej kilku wskaz??wek tycz??cych skomponowania samej siebie z wn??trzem i stworzenia paj??czego matecznika, maj??cego wabi??, kusi??, n??ci??. Po mej modernizacji niegdysiejsza pijalnia piwa, a obecnie klub jazzowy Tryton przynosi miesi??c w miesi??c nieliche zyski.",
			id : 11
		},
		{
			image: 'sources/media/carousel/s12.jpg',
			text: "m??ska jaskinia",
			description: 
			"Jeden z moich ciekawszych projekt??w, m????czyzna oko??o czterdziestki, uwolniwszy si?? z ma????e??skich side?? i wygoniwszy kobiet?? z domu poprosi?? mnie o pomoc w ca??kowitej modernizacji swojej przestrzeni. Zburzyli??my garderob??, dwie ??azienki i sal?? do aerobiku, zniszczyli??my ka??dy ??lad obecno??ci kobiety w tym domu, miast tego jest kr??gielnia, pok??j do grania w gry, pok??j pornograficzny, bar, sala kina domowego i mini izba wytrze??wie??. Koszty by??y ogromne, pracy du??o, jednak moja satysfakcja niebywa??a, gdy z ka??dym dniem widzia??am budz??c?? si?? na twarzy tego st??amszonego przez niegodziw?? kobiet?? cz??owieka dzieci??c?? i szczer?? rado????.",
			id : 12
		}];

		k.myInterval = 3000;

		var startUp = Serwis.init (3);
		k.soundIcon = startUp.music;
		k.soundShutUp = startUp.sound;

		k.nuta = function (what)
		{
			if (what === 1)
			{
				k.soundIcon = Serwis.nuta (1);
			} else
			{
				k.soundShutUp = Serwis.nuta (2);
			};
		};



		k.modal = function (numer)
			{
				if (numer!=99)
				{
				k.karuzelizowal = false;
				k.whichProject = numer;
    			setTimeout(function(){ k.diabolizowal = true; }, 1400);
    			}	else
    			{
    			k.diabolizowal = false;
    			setTimeout(function(){ k.karuzelizowal = true; }, 1400);
    			};
			};

    	setTimeout(function(){ k.karuzelizowal = true; }, 2000);
		console.log (k.photos);
	};




ContactCtrl.$inject = ['Serwis'];
function ContactCtrl (Serwis)
	{
		var k = this;
		k.showform = false;
		k.showcontacts = false;
		k.showass = false;
		k.paxTu1 = false;
		k.paxTu2 = false;
		k.paxTu3 = false;
		k.paxTu4 = false;
		k.paxTu5 = false;
		k.paxTu6 = false;
		k.paxTu7 = false;
		k.kiss = false;

		k.ContactDetails = {
			FirstName : "",
			Email : "",
			PhoneNumber : "",
			Subject : "",
			Comment : ""
		};

		var startUp = Serwis.init (4);
		k.soundIcon = startUp.music;
		k.soundShutUp = startUp.sound;

		k.nuta = function (what)
		{
			if (what === 1)
			{
				k.soundIcon = Serwis.nuta (1);
			} else
			{
				k.soundShutUp = Serwis.nuta (2);
			};
		};


		k.submitContactForm = function ()
		{
			console.log (k.ContactDetails);
			k.showform = false;
    		setTimeout(function(){ k.showass = true; }, 1200);
    		setTimeout(function(){ k.paxTu1 = true; }, 2100);
     		setTimeout(function(){ k.paxTu2 = true; }, 2600);
    		setTimeout(function(){ k.paxTu3 = true; }, 3100);
    		setTimeout(function(){ k.paxTu4 = true; }, 3600);
    		setTimeout(function(){ k.paxTu5 = true; }, 4100);
    		setTimeout(function(){ k.paxTu6 = true; }, 4600);
    		setTimeout(function(){ k.paxTu7 = true; }, 5600);
    		setTimeout(function(){ Serwis.soundMachine(2); k.kiss = true; }, 6600);
		};

    setTimeout(function(){ k.showcontacts = true; }, 4000);
    setTimeout(function(){ k.showform = true; }, 7000);

	};





HomeCtrl.$inject = ['Serwis'];
function HomeCtrl (Serwis)
	{
		var k = this;
		k.bodyclass = 'home-template';
		k.hello = false;
		var startUp = Serwis.init (0);
		k.soundIcon = startUp.music;
		k.soundShutUp = startUp.sound;
		k.primitivity = startUp.answer;
		k.thyName = startUp.poker;
		k.innocentGames = true;
		k.validation = false;
		k.valid = false;

		k.enterYourName = true;
		k.powitanie = true;
		k.firsttime = false;
		k.showWishes = false;
		k.showVarans = false;
		k.showControls = false;
		k.pointnavi = false;
		k.pointsounds = false;
		k.pointwaran = false;


		k.sawItAll = false;

		k.nuta = function (what)
		{
			if (what === 1)
			{
				k.soundIcon = Serwis.nuta (1);
			} else
			{
				k.soundShutUp = Serwis.nuta (2);
			};
		};

		k.goPlayPoker = function ()
		{
			console.log ("yay");
			k.hello = false;
			setTimeout(function(){ k.innocentGames = false; }, 3000);
			if (k.thyName!="none")
				{
					k.valid = true; k.validation = true;
				} else (k.thyName="");
			Serwis.init (6);
		};

		k.checkName = function ()
		{
			k.enterYourName = false;
			if (k.thyName.length === 0)
				{ k.thyName = "Anonim" };
			Serwis.passName (k.thyName);
  			setTimeout(function(){ k.valid = true; }, 4000);				
   			setTimeout(function(){ k.validation = true; }, 6000);			
		};

		k.flipPage = function (p)
		{
			if (p === 1) { k.powitanie = false; k.firsttime = true; };
			if (p === 2) { k.powitanie = false; k.showWishes = true; };
			if (p === 3) { k.firsttime = false; k.showControls = true;
			 setTimeout(function(){ k.pointsounds = true; Serwis.soundMachine(4); }, 1000); };
			if (p === 4) { k.showControls = false; k.showVarans = true;  k.pointsounds = false;
			 setTimeout(function(){ k.pointwaran = true; Serwis.soundMachine(4); }, 1500);
			 setTimeout(function(){ k.pointnavi = true; Serwis.soundMachine(4); }, 4000); }
			if (p === 5) { k.showVarans = false; k.showWishes = true; 
				k.pointwaran = false; k.pointnavi = false };
		};



    	setTimeout(function(){ k.hello = true;
    	console.log ("powitanie : ", k.powitanie);
    	console.log ("fist-time: ", k.firsttime); }, 3000);

	};




AboutCtrl.$inject = ['Serwis'];
function AboutCtrl (Serwis)
	{
		var k = this;
		k.speedButton = false;
		k.fotopad = false;
		k.mamba = false;
		k.soYoSpeak = false;
		k.writings = "";
		k.domek = false;
		k.whichLetter = 0;
		k.textToType = "Nasze codzienne ??ycie, nawyki, a przede wszystkim przestrze??, w kt??rej ??yjemy definiuje nas bardziej ni?? sobie to u??wiadamiamy. Przebywanie w funkcjonalnie zaprojektowanej przestrzeni u??atwia wiele rzeczy, powoduje, ??e nie musimy marnowa?? czasu na niepotrzebne dzia??ania i mo??emy skupi?? si?? na rzeczach bardziej istotnych. Jako projektant staram si?? tak projektowa?? wn??trza, aby spe??nia??y w??a??nie t?? funkcj??. Nie widz?? sensu aran??acji pomieszcze?? jedynie modnie, ale w oderwaniu od mieszka??c??w, kt??rzy maj?? tam sp??dza?? swe wolne chwile. Jeste?? w tym procesie najwa??niejszy i Twoje potrzeby stoj?? na pierwszym miejscu. W oparciu o wiedz?? i do??wiadczenie tworz?? projekt, kt??ry ma wychodzi?? na wprost Twoim oczekiwaniom, ale jednocze??nie ma stanowi?? niepowtarzaln?? jako????. ";



		function typeIt ()
		{			 

			if (k.whichLetter < k.textToType.length)
			{
			setTimeout(function()
				{
					k.writings = k.writings + k.textToType.charAt(k.whichLetter);
					k.whichLetter = k.whichLetter + 1;
					typeIt ();
				}, (Math.floor((Math.random() * 100) + 1)));
			} else
			{ 
				Serwis.soundMachine(100);
				k.speedButton = false;
		};
		};


		console.log (k.writings.length);

		var startUp = Serwis.init (1);
		k.soundIcon = startUp.music;
		k.soundShutUp = startUp.sound;

		k.nuta = function (what)
		{
			if (what === 1)
			{
				k.soundIcon = Serwis.nuta (1);
			} else
			{
				k.soundShutUp = Serwis.nuta (2);
			};
		};

		k.showItAll = function ()
		{
			console.log ("yey");
			k.whichLetter = k.textToType.length;
			k.writings = k.textToType;
		};


		setTimeout(function(){ k.speedButton = true; }, 11500);

    	setTimeout(function(){ k.fotopad = true; }, 2500);
    	
    	setTimeout(function(){ k.mamba = true; }, 1000);


    	setTimeout(function(){ k.soYoSpeak = true; 

     	setTimeout(function(){ k.domek = true; }, 2000);

    	setTimeout(function(){ Serwis.soundMachine (3); typeIt (); }, 1000);
    			 }, 4500);



	};




OfferCtrl.$inject = ['Serwis'];
function OfferCtrl (Serwis)
	{
		var k = this;
		var startUp = Serwis.init (2);
		k.soundIcon = startUp.music;
		k.soundShutUp = startUp.sound;
		k.particularOffer = {};
		k.oferujta = false;

		k.nuta = function (what)
		{
			if (what === 1)
			{
				k.soundIcon = Serwis.nuta (1);
			} else
			{
				k.soundShutUp = Serwis.nuta (2);
			};
		};


    	k.goForIt = function (section)
    	{
    		k.particularOffer = Serwis.passOffer (section);
    		$('#okienkoOfert').modal();
    	};

    	k.die = function ()
    	{
    		k.particularOffer.length = 0;
    	};

    	setTimeout(function(){ k.oferujta = true; }, 4000);    	

	};




Serwis.$inject = ['ngAudio'];
function Serwis (ngAudio)
	{
		var s = this;
		s.soundIcon = "sources/media/icons/big-pause-button.png";
		s.soundShutUp = "sources/media/icons/big-speaker.png";

		s.muza = [];
		s.soundFX = [];

		s.soundFX [0] = ngAudio.load("sources/media/sounds/think.wav");
		s.soundFX [1] = ngAudio.load("sources/media/sounds/winning.wav");
		s.soundFX [2] = ngAudio.load("sources/media/sounds/kiss.wav");
		s.soundFX [3] = ngAudio.load("sources/media/sounds/typing.wav");
		s.soundFX [4] = ngAudio.load("sources/media/sounds/bling.wav");
		s.soundFX [5] = ngAudio.load("sources/media/sounds/gasp.mp3");		
		s.soundFX [6] = ngAudio.load("sources/media/sounds/touch-my-body.wav");	
		s.soundFX [7] = ngAudio.load("sources/media/sounds/enjoy-my-breeze.wav");
		s.soundFX [8] = ngAudio.load("sources/media/sounds/coins.wav");
		s.soundFX [9] = ngAudio.load("sources/media/sounds/giggle.wav");
		s.soundFX [10] = ngAudio.load("sources/media/sounds/takeoff.wav");
		s.soundFX [11] = ngAudio.load("sources/media/sounds/dressup.wav");
		s.soundFX [12] = ngAudio.load("sources/media/sounds/oh_yes.wav");
		s.soundFX [13] = ngAudio.load("sources/media/sounds/argh.ogg");
		s.soundFX [14] = ngAudio.load("sources/media/sounds/ba-da-dum.wav");
		s.soundFX [15] = ngAudio.load("sources/media/sounds/checked.wav");
		s.soundFX [16] = ngAudio.load("sources/media/sounds/pass.wav");
		s.soundFX [17] = ngAudio.load("sources/media/sounds/draw.wav");
		s.soundFX [18] = ngAudio.load("sources/media/sounds/changeyeah.wav");
		s.soundFX [19] = ngAudio.load("sources/media/sounds/dice.wav");
		s.soundFX [20] = ngAudio.load("sources/media/sounds/blast.wav");
		s.soundFX [21] = ngAudio.load("sources/media/sounds/missyou.wav");


		s.muza[0] = ngAudio.load("sources/media/sounds/home_song.mp3");
		s.muza[1] = ngAudio.load("sources/media/sounds/about_song.mp3");
		s.muza[2] = ngAudio.load("sources/media/sounds/offer_song.mp3");
		s.muza[3] = ngAudio.load("sources/media/sounds/portfolio_song.mp3");
		s.muza[4] = ngAudio.load("sources/media/sounds/contact_song.mp3");
		s.muza[5] = ngAudio.load("sources/media/sounds/poker_song.mp3");
		s.muza[6] = ngAudio.load("sources/media/sounds/poker_login.mp3");
		s.muza[7] = ngAudio.load("sources/media/sounds/bens.mp3");
		s.muza[0].volume = 0.45; s.muza[0].unbind();
		s.muza[1].volume = 0.2; s.muza[1].unbind();
		s.muza[2].volume = 0.4; s.muza[2].unbind();
		s.muza[3].volume = 0.2; s.muza[3].unbind();
		s.muza[4].volume = 0.95; s.muza[4].unbind();
		s.muza[5].volume = 0.2; s.muza[5].unbind();
		s.muza[6].volume = 0.45; s.muza[6].unbind();
		s.muza[7].volume = 0.44; s.muza[7].unbind();
		s.soundFX [0].unbind();
		s.soundFX [1].unbind();
		s.soundFX [2].unbind();
		s.soundFX [3].unbind();
		s.soundFX [4].unbind();
		s.soundFX [5].unbind();
		s.soundFX [6].unbind();
		s.soundFX [7].unbind();
		s.soundFX [8].unbind();
		s.soundFX [9].unbind();
		s.soundFX [10].unbind();
		s.soundFX [11].unbind();
		s.soundFX [12].unbind();
		s.soundFX [13].unbind();
		s.soundFX [14].unbind();
		s.soundFX [15].unbind();
		s.soundFX [16].unbind();
		s.soundFX [17].unbind();
		s.soundFX [18].unbind();
		s.soundFX [19].unbind();
		s.soundFX [20].unbind();
		s.soundFX [20].unbind();
		s.soundFX [21].unbind();

		s.isFirst = true;

		s.dj = 1;

		s.offerList = [];

		s.offerList[0] = {
		title : "Cel",
		maintext : "Moja oferta skierowana jest do os??b, kt??re poszukuj?? rozwi??za?? ??ci??le dopasowanych do swoich oczekiwa??. Decyzja, jaka forma wsp????pracy zostanie podj??ta - zale??y od Ciebie.Mo??e by?? to jedynie porada, wsparcie koncepcyjne, aran??acja pojedynczego pomieszczenia,jak r??wnie?? projekt i wizualizacja wraz projektem wykonawczym ca??ego domu ????cznie z nadzorem autorskim.",
		listExistance : false,
		photo : 'sources/media/pics/szacunek_do_kotow.jpg' };

		s.offerList[1] = {
		title : "Planowanie",
		maintext : "Po wykonaniu inwentaryzacji istniej??cych pomieszcze?? omawiam z Tob?? wszelkie kwestie zwi??zane z ich przeznaczeniem, stylem i charakterem. Poznaj?? Twoje wymagania i oczekiwania, dzi??ki czemu jestem w stanie bardziej szczeg????owo zaplanowa?? wst??pn?? aran??acj?? przestrzeni i wydoby?? z niej to, co najlepsze. Pod uwag?? branych jest bardzo wiele czynnik??w, kt??re wp??ywaj?? na dalszy projekt:",
		listExistance : true,
		list : [
		"styl ??ycia i ilo???? sp??dzanego czasu w danej przestrzeni",
		"liczba i wiek domownik??w",
		"podzia?? funkcjonalny i hierarchia pomieszcze??",
		"ulubione tkaniny, faktury, materia??y wyko??czeniowe, urz??dzenia, meble, detale, ro??liny, rodzaje o??wietlenia",
		"charakter i kolorystyka wn??trza",
		"indywidualne rozwi??zania i koncepcje technologiczne - sala kinowa, piwniczka na wino, sala gier, strefa SPA i relaksu, przestrze?? dla zwierz??t (np. kot??w), inteligentny system sterowania, solary, itp."
		],
		photo : 'sources/media/pics/planowanie.jpg' };

		s.offerList [2] = {
		title : "Koncepcja",
		maintext : "Prezentuj?? zazwyczaj dwie koncepcje podzia??u i zagospodarowania pomieszcze?? - podpowiadam, jak lepiej rozwi??za?? niekt??re problemy zwi??zane z ich funkcj??, sugeruj?? zastosowanie odpowiednich zmian tak, aby doskonale pasowa??y do Twoich wymaga??. Na podstawie tak szczeg????owo om??wionej aran??acji podczas kilku spotka?? dokonujemy wst??pnego doboru materia????w i rozwi??za?? architektonicznych, co w przysz??o??ci przekszta??ci si?? w sp??jny i przemy??lany w ca??o??ci projekt. Powinno zaj???? to oko??o 3 - 5 spotka??",
		listExistance : false,
		photo : 'sources/media/pics/koncept.jpg'		
		};

		s.offerList [3] = {
		title : "Wizualizacja",
		maintext : "Teraz mog?? przej???? do stworzenia fotorealistycznej wizualizacji projektowanej przestrzeni.Na tym etapie wykonuj?? szczeg????owy projekt pomieszczenia lub pomieszcze??.Proponuj?? zastosowanie okre??lonych materia????w i kolor??w, wybranych mebli czy te?? rodzaju o??wietlenia. Prezentuj?? kilka wariant??w przez co mo??na swobodnie eliminowa?? lub dodawa?? r????ne elementy oraz rozwija?? stworzon?? wizj?? w form??, kt??ra nabierze finalnego kszta??tu, zgodnego z Twoimi oczekiwaniami. Czas na przygotowanie wizualizacji jest uzale??niony od ilo??ci pomieszcze?? i waha si?? od 1 do 2 tygodni.",
		listExistance : false,
		photo : 'sources/media/pics/wizualizacja.jpg'
		};

		s.offerList [4] = {
		title : "Projekt",
		maintext : "W zale??no??ci od liczby potrzebnych rysunk??w do wykonania czas potrzebny na ten etap, to ??rednio 2 tygodnie. Tworzone s?? wszelkie rysunki architektoniczne (rzuty, przekroje, widoki) oraz zestawienia, kt??re pozwol?? wszystkim wykonawcom wdro??y?? nasz?? wizj?? w ??ycie, m.in.:",
		listExistance : true,
		list : [
		"rzut i przekroje usytuowania wszystkich urz??dze?? i mebli we wn??trzu",
		"rzut pod????g i sufit??w",
		"widoki rozk??adu p??ytek ceramicznych na pod??odze i ??cianach",
		"rzuty i widoki przedstawiaj??ce miejsca przy????czy hydraulicznych",
		"rzut instalacji elektrycznej wraz z aran??acj?? o??wietlenia",
		"rzut z naniesieniem usytuowania i rodzaju ogrzewania wewn??trznego",
		"rzut z naniesieniem rodzaju i kolorystyki ka??dej ??ciany",
		"rzuty i przekroje wszelkich mebli i zabud??w pod wymiar",
		"rzut i przekroje schod??w wraz z balustrad??",
		"zestawienie ilo??ci i rodzaju potrzebnych materia????w: p??ytek, tkanin, parkietu, drzwi, farb, fug, grzejnik??w, itp.",
		"zestawienie ca??ego wyposa??enia wraz z cen?? i miejscem zakupu"		
		],
		photo : 'sources/media/pics/projekt.jpg' 
		};

		s.offerList [5] = {
		title : "Nadz??r",
		maintext : "Nadz??r nad realizacj?? projektu mo??esz przej???? sam, jednak??e z do??wiadczenia wiem, ??e niestety podczas tej czasoch??onnej i wymagaj??cej pracy niezwykle cz??sto, a mo??na nawet powiedzie??, ??e zawsze zdarzaj?? si?? problemy. Naprawd?? nikt podejmuj??cy si?? prac remontowo-budowlanych nie jest w stanie przewidzie?? ich skali. Przy udziale tylu os??b, kt??re s?? uzale??nione od kolejnego szeregu os??b nietrudno o pomy??ki i kwestie sporne. Wtedy okazuje si??, ??e trzeba na bie????co nanosi?? na projekt zmiany, podejmowa?? szybko decyzje oraz mie?? ogromn?? cierpliwo???? i wytrwa??o????. W tak mozolnej pracy niew??tpliwie bardzo pomaga wsparcie projektanta. Jego regularna obecno???? podczas prac, analizowanie i natychmiastowe rozwi??zanie problem??w powoduje, ??e oszcz??dzasz czas i sporo pieni??dzy. Zazwyczaj jeste?? w pracy, a niekt??re kwestie musz?? by?? rozwi??zane niezw??ocznie.Zrozumie to ten, kto po przyj??ciu na plac budowy przekona sie, ??e p??ytki nie s?? u??o??one tam, gdzie mia??y by??, ??e ??ciana jest za kr??tka, ??e schody s?? krzywe, ??e k??ty nie s?? r??wne, ??e okna za w??skie, ??e sofa nie taka, jak zam??wiona, ??e wylewka za niska, ??e kabel zatynkowany, ??e kolor nie taki, ??e...Podczas nadzoru jestem zobowi??zana om??wi?? z ka??dym wykonawc?? wszystkie szczeg????y prac oraz dokona?? ewentualnych modyfikacji i by?? na miejscu budowy lub remontu co najmniej raz w tygodniu. Dokonuj?? wszelkich adnotacji i przekazuj?? je Tobie, co pozwoli na bie????co mie?? kontrol?? nad ka??d?? rzecz??, kt??ra wymaga wykonania lub poprawki.projekt zmiany, podejmowa?? szybko decyzje oraz mie?? ogromn?? cierpliwo???? i wytrwa??o????. W tak mozolnej pracy niew??tpliwie bardzo pomaga wsparcie projektanta. Jego regularna obecno???? podczas prac, analizowanie i natychmiastowe rozwi??zanie problem??w powoduje, ??e oszcz??dzasz czas i sporo pieni??dzy. Zazwyczaj jeste?? w pracy, a niekt??re kwestie musz?? by?? rozwi??zane niezw??ocznie.rozumie to ten, kto po przyj??ciu na plac budowy przekona sie, ??e p??ytki nie s?? u??o??one tam, gdzie mia??y by??, ??e ??ciana jest za kr??tka, ??e schody s?? krzywe, ??e k??ty nie s?? r??wne, ??e okna za w??skie, ??e sofa nie taka, jak zam??wiona, ??e wylewka za niska, ??e kabel zatynkowany, ??e kolor nie taki, ??e... Podczas nadzoru jestem zobowi??zana om??wi?? z ka??dym wykonawc?? wszystkie szczeg????y prac oraz dokona?? ewentualnych modyfikacji i by?? na miejscu budowy lub remontu co najmniej raz w tygodniu. Dokonuj?? wszelkich adnotacji i przekazuj?? je Tobie, co pozwoli na bie????co mie?? kontrol?? nad ka??d?? rzecz??, kt??ra wymaga wykonania lub poprawki.",
		listExistance : false,
		photo : 'sources/media/pics/nadzor.jpg'
		};

		s.offerList [6] = {
		title : "Finalizacja",
		maintext : "Po zako??czeniu wszystkich prac, posprz??taniu, wniesieniu mebli, zamontowaniu urz??dze??, udekoruj?? wn??trze przedmiotami wcze??niej wybranymi i zakupionymi tak, aby ca??o???? aran??acji by??a harmonijna i sp??jna, a przede wszystkim wywo??ywa??a u??miech na twojej twarzy. Czas potrzebny na wszystkie etapy jest ??ci??le powi??zany r??wnie?? z tempem podejmowanych przez Ciebie decyzji.",
		listExistance : false,
		photo : 'sources/media/pics/finale.jpg'		
		};

		s.offerList [7] = {
		title : "Cennik",
		maintext : "Wycena i czas przygotowywania projektu zale??y przede wszystkim od skali prac i powierzchni pomieszcze??. Ka??dorazowo jest przygotowywana indywidualnie pod Twoje zapytanie. Cena za metr kwadratowy r????nicuje si?? w zale??no??ci od ich ilo??ci, rodzaju pomieszcze?? oraz zakresu dzia??a??, kt??re b??d?? musia??y by?? zrealizowane. Je??li jednak nie potrzebujesz projektu, a potrzebna Ci jedynie porada, mo??esz zadzwoni?? i um??wi?? si?? na spotkanie, podczas kt??rego om??wimy problem i postaramy sie go rozwi??za??.",
		listExistance : false,
		photo : 'sources/media/pics/doctorGreenThumb.jpg'
		};		

		s.personalData = { name : "none", head : "none"};

		s.nicknames = {
			chicknames : ["kr??lewna ", "kocica ", "rusa??ka ", "krzywdzicielka ", "nimfa ", "syrena ", "czarodziejka ", "butelkonosa ", "??liczna ", "wied??ma ",
						"t??ustawa ", "bogini seksu ", "otrupia??a ", "paj??czyca ", "sroga ", "smakowita ", "??lepawa ", "zmys??owa ", "pazerna ", "nimfomanka "],
			dicknames : ["zakapior ", "??ulik ", "cwaniaczyna ", "ziomalik ", "kat uczu?? ", "psychopata ", "cherlawy ", "ksi?????? ", "przebogaty ", "nieodgadniony ",
			            "brudas ", "boski ??ygolo ", "kominiarz ", "rycerski ", "??wierzb ", "maluczki ", "niedobry ", "menelik ", "wieczny ", "megaloman "]
		};

		s.realMacho = false;

		s.males = ["drogusiu", "kole??ko", "kochanie??ki", "m??j brutalu", "skarbie", "wariacie", "mordo", "ziomaliku", "prztojniaku", "pokr??cony gargulcu",
					"z??ociutki", "meneliku", "szefie", "mistrzuniu", "moczymordo", "kr??lu", "grubszy", "rycerzu", "twardzielu", "chamie"];
		s.females = ["male??ka", "smr??dko", "kochanie??ka", "tragikomiczna wied??mo", "niezno??na j??dzo", "??licznotko", "kotku", "dupe??ko", "czarodziejko", "grzebiuszko",
					"skarbie", "skarbe??ku", "bezczelna z??odziejko", "mikrokotku", "nie mazgaj si??", "pere??ko", "ptaszyno", "zagadko ewolucji", "martwisz mnie", "chrobocie"];


		s.passName = function (name)
		{
			console.log (s.nicknames);

			if (name === "justpass")
				{ return s.personalData }
			else
				{
					var nicknameNumber = Math.floor(Math.random() * 20);
					if ((name.charAt(name.length-1) === "a") || (name.charAt(name.length-1) === "A"))
						{
						s.personalData = {
							name : s.nicknames.chicknames[nicknameNumber] + name,
							head : 'sources/media/icons/ladyhead.png'
						};
						} else
						{
						s.personalData = {
							name : s.nicknames.dicknames[nicknameNumber] + name,
							head : 'sources/media/icons/guyhead.png'
						}; s.realMacho = true;
						};
				};
		};

		s.caressMe = function ()
		{
			var dearestOne = Math.floor(Math.random() * 20);

			if (s.realMacho)
			{
				return s.males [dearestOne];
			} else { return s.females [dearestOne]; };
		};


		s.init = function (state)
		{

			s.muza[s.dj].stop();

			var musicDeterminieties = {
				music : s.soundIcon,
				sound : s.soundShutUp,
				answer : s.isFirst,
				poker : s.personalData.name
			};

			if (s.isFirst) { s.isFirst = false };

			s.dj = state;

			if (s.soundIcon === "sources/media/icons/big-pause-button.png"
				 && s.soundShutUp === "sources/media/icons/big-speaker.png") 
			{
			s.muza[s.dj].play();
			};
			return musicDeterminieties;
		};

		s.soundMachine = function (burritoSplash)
		{
			if (burritoSplash === 100)
			{
				s.soundFX[3].stop();
			}
			else
			{
				s.soundFX[burritoSplash].play();
			};
		};


		s.passOffer = function (which)
		{
			console.log (s.offerList);
			return s.offerList [which];
		};

		s.nuta = function (what)
			{


				if(what===1){
				if (s.soundIcon === "sources/media/icons/big-pause-button.png")
				{
					s.soundIcon = "sources/media/icons/big-play-button.png";
					s.muza[s.dj].pause();
				}
				else
				{
					s.soundIcon = "sources/media/icons/big-pause-button.png";
					s.muza[s.dj].play();
				};

				return s.soundIcon;
				}
				else{
				if (s.soundShutUp === "sources/media/icons/big-speaker.png")
				{
					s.soundShutUp = "sources/media/icons/big-mute.png"
					ngAudio.mute();
				}else {
					s.soundShutUp = "sources/media/icons/big-speaker.png"
					ngAudio.unmute();
				};

				return s.soundShutUp;
				};
			};





	};


})();