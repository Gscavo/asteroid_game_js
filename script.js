//Context:
var canvas = window.document.getElementById("cnv");
var ctx = canvas.getContext("2d");

//Contador:
var count = 0;


//Funções:
function randint(min, max) {
    return Math.ceil((Math.random()) * (max-min) + min)
};

//Variaveis:

//Estrelas:
var star = {
    radius:0,
    x:0,
    y:0,
    total: [],
    maxTotal: 50
   
}

//Nave:
var spaceship = {
    //Posição:
    x:(canvas.width/2),
    y:(canvas.height/2),
    //Tamanho:
    halfsize: 15,
    //Velocidade:
    velx:0,
    vely:0,
    //Aceleração:
    acelx:0,
    acely:0,
    //Angulação:
    angle:0
}


//Grando estrelinhas:
genstars()

requestAnimationFrame(loop);

function loop(){
    requestAnimationFrame(loop);
    if (count++ < 4){
        count++;
        return;
    };
    count = 0
    //Limpando Tela
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Pintando Fundo
    ctx.fillStyle = '#010616' 
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    //Desenhando estrelinhas:
    ctx.fillStyle = "white"
       
    star.total.forEach(function(stars){
        let x = stars.x
        let y = stars.y
        let size = stars.radius
        ctx.beginPath();
        ctx.arc(x, y, size, 0, circ)
        ctx.fill()
    })
}
function genstars(){
    for(var i=0; i < (star.maxTotal * 10); i++) {
        star.radius = randint(1, 3);
        star.x = randint(0, canvas.width);
        star.y = randint(0, canvas.height);
        star.total.unshift({x:star.x, y:star.y, radius:star.radius});
    }
}
function Nave() {
    ctx.beginPath()
    ctx.translate(spaceship.x, spaceship.y)
    ctx.rotate(spaceship.angle)
    ctx.moveTo()
}

