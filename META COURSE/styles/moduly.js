function dodawanie (...argumenty) {
    var suma = 0;
    for (var i = 0; i<argumenty.length; i++)
    { suma += argumenty [i] }; return suma;
};

export { dodawanie };

