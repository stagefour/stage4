let oko = 'zielone oko';
let stanOka = 'zaropiale';
let mojWzrok = `${oko} jest ${stanOka}`;

function zbadajWzrok () {
                        console.log ('badamy wzrok');
                        console.log (`${mojWzrok}`);
                        if (stanOka != 'zdrowe') { console.log ('oko chore - do okulisty');
                                stanOka = okulista (); mojWzrok = `${oko} jest ${stanOka}` }
                        else (console.log ('masz zdrowe oczy')) 
                    };

function okulista () { 
            console.log ('lecze oko'); return 'zdrowe' 
        };

function mamStoLat () {
                console.log ('mam sto lat, nadszedl czas zbadac oczy');
                stanOka = 'zaropiale';
                zbadajWzrok (); console.log ('po wizycie u okulisty'); zbadajWzrok()
};

mamStoLat ();


