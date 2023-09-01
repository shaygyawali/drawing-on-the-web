// Set the date we're counting down to
var time = 30 * 1000
var timePassed = 0
var timeInterval = 0;

var cut = 1.0/((time/1000)/1)
var backgroundOpacity = 1.0

var mainDiv = document.getElementById('starHolder')
var newBg = 'rgba(200, 198, 247, 1.0)'
mainDiv.style.backgroundColor = newBg


var mCut = 1.5/(time/1000/1)
mtnBrightness = 2.5

var backMtn = document.getElementById('backMtn')
backMtn.style.filter = 'brightness(2.5)'

var frontMtn = document.getElementById('frontMtn')
frontMtn.style.filter = 'brightness(2.5)'

width = window.innerWidth
height = window.innerHeight

x
// Update the count down every 1 second
var x = setInterval(function() {

    if(timePassed == (time/1000)){
        console.log("done")
    }

    if(timeInterval == 1){
        console.log("----" + timePassed + "--------");
        timeInterval = 0;
        backgroundOpacity -= cut;
        mtnBrightness -= mCut;

        console.log("MTN BRIGHT: " + mtnBrightness);

        var newBg = 'rgba(200,198,247,' + backgroundOpacity + ')'
        mainDiv.style.backgroundColor = newBg

        if(mtnBrightness >= 1.0){
            var newMtn = 'brightness('+ mtnBrightness +')'
            backMtn.style.filter = newMtn
            frontMtn.style.filter = newMtn

            starX = Math.floor(Math.random() * (width-5))
            starY = Math.floor(Math.random() * (height-200))
            console.log(height-backMtn.clientHeight)

            console.log("X: " + starX + "Y: " + starY)
    
            mainDiv.innerHTML += '<svg class="str" xmlns="http://www.w3.org/2000/svg" style="position:absolute;z-index:10;margin:0;padding:0;top:'+ starY + 'px;left:' + starX + 'px" width="8" height="8"> <circle cx="2" cy="2" r="2" stroke-width="4" fill="white" /></svg>';
        }
       
    } 
    else{
        console.log(timePassed);
    }
    timePassed+=1;
    timeInterval += 1;

  // Get today's date and time

}, 500);