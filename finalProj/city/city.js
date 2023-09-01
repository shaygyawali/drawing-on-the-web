var mins = 1;
var totalSeconds = 60*mins*1000;
var numberFives = totalSeconds/5000;
console.log("TOTAL FIVES: " + numberFives + "---" + totalSeconds);

var startInterval = 0;

var mainDiv = document.getElementById('starHolder')


var width = window.innerWidth
var height = window.innerHeight

mainDiv.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;z-index:-1;margin:0;padding:0;top:'+ height/10 + 'px;left:' + ((width/2)-150) + 'px" width="300" height="300"> <circle cx="150" cy="150" r="150" stroke-width="4" fill="white" /></svg>';
mainDiv.innerHTML += "<img class='frnt' src='small.svg' style='height:250px;position:absolute;z-index:2;margin:0;padding:0;bottom:-10px;left:" + 0 +"px;'>"
mainDiv.innerHTML += "<img class='frntR' src='smallRight.svg' style='height:250px;position:absolute;z-index:2;margin:0;padding:0;bottom:-10px;right:" + 0 +"px;'>"

var sunPosition = height/numberFives;
var hundredDown = 100/numberFives;

var hundredVal = 100;



x
// Update the count down every 1 second
var x = setInterval(function() {

    if(startInterval >= totalSeconds){
        console.log("done")
    }

    else{

        var img = document.querySelectorAll("img"); 
        console.log(img)


        console.log("HELLO")
        buildingX = Math.floor(Math.random() * (width))
        buildingX2 = Math.floor(Math.random() * (width))


        allBuildings = ["<img class='frnt' src='medium.svg' style='position:absolute;z-index:2;margin:0;padding:0;fro-10px;left:" + buildingX +"px;'>",
                        "<img class='frnt' src='mediumSteps.svg' style='position:absolute;z-index:2;margin:0;padding:0;bottom:-10px;left:" + buildingX +"px;'>",
                        "<img class='frnt' src='small.svg' style='height:200px;position:absolute;z-index:2;margin:0;padding:0;bottom:-10px;left:" + buildingX +"px;'>"]

        backBuildings = ["<img src='tall.svg' class='tall' style='position:absolute;z-index:1;margin:0;padding:0;bottom:-10px;left:" + buildingX +"px;'>",
                        "<img src='tallCut.svg' style='position:absolute;z-index:1;margin:0;padding:0;bottom:-10px;left:" + buildingX2 +"px;'>",
                        "<img src='unique.svg' style='height:400px;position:absolute;z-index:1;margin:0;padding:0;bottom:-10px;left:" + buildingX2 +"px;'>"]

        toAdd = Math.floor(Math.random() * (allBuildings.length))
        toAdd2 = Math.floor(Math.random() * (allBuildings.length))


        mainDiv.innerHTML += allBuildings[toAdd]
        mainDiv.innerHTML += backBuildings[toAdd2]


        /*for(image of img) {
            console.log(image)
            image.style.filter = "invert(" + hundredVal + "%)"
        }*/
        
        hundredVal -= hundredDown;
        startInterval += 5000;
    }

  // Get today's date and time

}, 5000);