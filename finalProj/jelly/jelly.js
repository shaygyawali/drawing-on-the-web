var mins = 1;
var totalSeconds = 60*mins*1000;
var numberFives = totalSeconds/5000;
console.log("TOTAL FIVES: " + numberFives + "---" + totalSeconds);

var startInterval = 0;

var mainDiv = document.getElementById('jellyHolder')
var water = document.getElementById('water')



var width = window.innerWidth
var height = window.innerHeight


var hundredDown = 0.9/numberFives;
var halfDown = 0.6/numberFives;

var hundredVal = 0.1;
var halfVal = 0.1

x
// Update the count down every 1 second
var x = setInterval(function() {

    if(startInterval >= totalSeconds){
        console.log("done")
    }

    else{
            jellyX = Math.floor(Math.random() * (width))
            jellyY = Math.floor(Math.random() * (height))
            jellyWidth =  300 - Math.floor(Math.random() * (250))
            console.log("WIDTH: + " + jellyWidth)
            jellies = ["<img src='mainJelly.svg' style='width:" + jellyWidth +";position:absolute;z-index:3;margin:0;padding:0;top:" + jellyY + "px;left:" + jellyX +"px;'>",
                        "<img src='jelly1.svg' style='width:" + jellyWidth +";position:absolute;z-index:3;margin:0;padding:0;top:" + jellyY + "px;left:" + jellyX +"px;'>",
                        "<img src='jelly2.svg' style='width:" + jellyWidth +";position:absolute;z-index:3;margin:0;padding:0;top:" + jellyY + "px;left:" + jellyX +"px;'>"]
            randJell = Math.floor(Math.random() * (jellies.length))
        
            mainDiv.innerHTML +=  jellies[randJell]
        
        var allJellies = document.querySelectorAll('img')

        hundredVal += hundredDown;
        halfVal += halfDown;
        console.log("hundredVal:" + hundredVal + '----' + hundredDown)
        water.style.opacity = hundredVal;
        for(let step = 0; step < allJellies.length; step++){
            allJellies[step].style.opacity = halfVal;
        }
        startInterval += 5000;
    }

  // Get today's date and time

}, 5000);