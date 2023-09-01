var audio = document.getElementById("audio");
var source = document.getElementById("audioSrc");
audio.load(); //call this to just preload the audio without playing
audio.play(); //call this to play the song right away

setTimeout(go, 3500);
    var canvas = document.getElementById("drawing");
    var context = canvas.getContext("2d");
    var img = document.getElementById("spongeFlower");
    var canvas = document.getElementById("drawing");
    var context = canvas.getContext("2d");
    var image = document.getElementById("spongeFlower");

    var imgDim = 500;
    var height = 0;
    var width = 0;



function setup(){

    height = window.innerHeight
    width = window.innerWidth
    canvas.style.height = height + 'px'
    canvas.style.width = width + 'px'

    
    scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
    canvas.height = Math.floor(height * scale);
    canvas.width = Math.floor(width * scale);
    
    context.scale(scale, scale);
    context.drawImage(image, width/2-imgDim/2,height/2-imgDim/2, imgDim, imgDim);
    context.globalCompositeOperation = 'multiply';

}

var fps = 10;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;
scalee = 1;
inv = 0;
invFinal = 'invert(0%)'

function draw(){


    now = Date.now();
    delta = now - then;
    if (delta > interval) {

        then = now - (delta % interval);

        context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

        if(imgDim >= 700){
            scalee -= 0.05;
            imgDim *= scalee;
        } else if(imgDim <= 400){
            scalee += 0.05;
            imgDim *= scalee;
        } else {
            scalee += 0.05;
            imgDim *= scalee;
        }

        inv += 5;
        invFinal = 'invert(' + inv + '%)'

        if(inv > 100){
            inv = 0;
            invFinal = 'invert(' + inv + '%)'
        }
        
        context.filter = invFinal;
        context.drawImage(image, width/2-imgDim/2,height/2-imgDim/2, imgDim, imgDim)
    }

    requestAnimationFrame(draw)

}


const btn = document.getElementById("btn");
function go() {
    fps = 10;

    /*var audio = document.getElementById("audio");
    var source = document.getElementById("audioSrc");
    source.src = "spongeTrap.mp3"
    audio.load(); //call this to just preload the audio without playing
    audio.play(); //call this to play the song right away*/

    var spongeBG = document.getElementById("sh");
    var bg = document.body;

    spongeBG.style.backgroundColor = "transparent";

    var sp = document.getElementById("sp");
    sp.src="spongeDancing.gif";
    sp.style.width="300px";
    sp.style.mixBlendMode="0.7";

    //sh.style.mixBlendMode = "lighten"
}

window.addEventListener('load', () => {
    setup();
    window.requestAnimationFrame(draw);
})
