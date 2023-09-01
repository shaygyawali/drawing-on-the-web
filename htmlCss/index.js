var audio = document.getElementById("audio");
var source = document.getElementById("audioSrc");
audio.load(); //call this to just preload the audio without playing
audio.play(); //call this to play the song right away

setTimeout(go, 3500);


const btn = document.getElementById("btn");
function go() {
    /*var audio = document.getElementById("audio");
    var source = document.getElementById("audioSrc");
    source.src = "spongeTrap.mp3"
    audio.load(); //call this to just preload the audio without playing
    audio.play(); //call this to play the song right away*/

    var spongeBG = document.getElementById("sh");
    spongeBG.style.backgroundColor = "transparent";

    var sp = document.getElementById("sp");
    sp.src="squidDance.gif";
    sp.style.width="300px";
    sp.style.marginRight ="40px";
    //sh.style.mixBlendMode = "lighten"
}