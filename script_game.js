//Variaveis:::

//Declaração Canvas:
var canvas = window.document.getElementById("cnv");
var ctx = canvas.getContext("2d");

//Canvas medidas:
var cnvw = canvas.width;
var cnvh = canvas.height;

//Timer:
var timeoff = 0;

//Nave:
var nave = {
    //Posição:
    x:cnvw/2,
    y:cnvh/2,
    //Tamanho:
    size:10,
    //Aceleração:
    a:0,
    //Velocidade:
    v:0,
    //Angulação:
    angle:0
}


//Inicio Game:
initiate()

//Função do Inicio Game:
function initiate(){
    requestAnimationFrame(loopgame)
}

//Loop do Jogo
function loopgame() {
    requestAnimationFrame(loopgame)
    if (timeoff++ < 4){
        timeoff++;
        return;
    }
    
    timeoff = 0;
    ctx.clearRect(0, 0, cnvw, cnvh);
    
    new Nave("red");
    
    // Desenhando os Asteroides:   
}

//Draw Nave:
function Nave(cor) {
    this.x = nave.x;
    this.y = nave.y;
    //Save do Canvas Atual:
    ctx.save();
    //Cor:
    ctx.fillStyle = cor;
    //Posição:
    ctx.translate(nave.x, nave.y)
    //Angulação da Nave:
    ctx.rotate(nave.angle*(Math.PI)/180);
    //Desenho da Nave:
    ctx.moveTo(nave.size, nave.size )
    ctx.beginPath();
    ctx.lineTo( 0        , -nave.size)
    ctx.lineTo(-nave.size,  nave.size)
    ctx.lineTo( nave.size,  nave.size)
    ctx.fill()
    ctx.restore()
}

//Gen Asteróides:

//Random Numbers:
function randint(min, max) {
    return Math.ceil( ( (Math.random) * max) + min)
}