var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Junior')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Hello world!')
    .pauseFor(2500)
    //numero de caracteres que se borrraran
    .deleteChars(6)
    .typeString('<strong>Programar!</strong>')
    .pauseFor(2500)
    .start();
