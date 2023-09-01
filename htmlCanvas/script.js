
const canvas = document.getElementById('drawing');
const context = canvas.getContext('2d');
height = window.innerHeight
width = window.innerWidth

finalSunX = 0;
finalSunY = 0;
finalSunColor = '';
finBackgroundColor = '';

const image = document.querySelector('img');
const imgScale = 40;

mtn1Color = '';
mtn2Color = '';

function setCanvas() {
    height = window.innerHeight
    width = window.innerWidth

    canvas.style.height = height  + 'px'
    canvas.style.width = width  + 'px'


    // Set actual size in memory (scaled to account for extra pixel density).
    scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
    canvas.height = Math.floor(height * scale);
    canvas.width = Math.floor(width * scale);

    context.scale(scale, scale);             
}

function draw(){

    currXRange = width - radMax;
    currYRange = height - radMax;

    xScale = currXRange/originalXRange;
    yScale = currYRange/originalYRange;

    //calculating random point for sun to go, x and y
    radMax = width/10;
    sunXVal = finalSunX * xScale;
    sunYVal = finalSunY * yScale;

    context.fillStyle = 'rgba(0, 0, 0, 1)';
    context.fillRect(0,0,width,height);


    context.fillStyle = finBackgroundColor;
    context.fillRect(0,0,width,height);
    
    context.fillStyle = finalSunColor;
    context.arc(sunXVal, sunYVal, radMax, 0, 2 * Math.PI);
    context.fill();

    mtn1Color = colorStrings[mtnIndex1];
    context.fillStyle = mtn1Color;
    context.save();
    context.beginPath();
    context.moveTo(0, height);
    context.lineTo(width/4, height/3);
    context.lineTo((width/4)*2, height);
    context.closePath();
    context.fill();

    mtn2Color = colorStrings[mtnIndex2];
    context.fillStyle = mtn2Color;
    context.translate(width/4, 0);
    context.beginPath();
    context.moveTo(0, height);
    context.lineTo(width/4, height/1.5);
    context.lineTo((width/4)*2, height);
    context.closePath();
    context.fill()

    context.restore();
    context.translate(width/2, 0);
    context.beginPath();
    context.moveTo(0, height);
    context.lineTo((width/4), height/6);
    context.lineTo(width/2, height);
    context.closePath();
    context.fill();
}

function drawInitial(){
    if (width >= height) {
        context.drawImage(image, 0, 0, width/imgScale, width/imgScale * (image.height/image.width));
    } else {
        context.drawImage(image, 0, 0, height/imgScale * (image.width/image.height), height/imgScale);
    }

    let imageData = context.getImageData(0, 0, canvas.width/imgScale, canvas.height/imgScale);
    let data = imageData.data;
    context.clearRect(0, 0, width, height);

    colorStrings = [];
    console.log("all values: " + data.length/4);
    for(let i = 0; i < data.length; i+=4){
        tempStr = 'rgba(' + data[i] + ',' + data[i+1] + ',' + data[i+2] + ',' + data[i+3] + ')';
        colorStrings.push(tempStr);
    }

    //calculating random point for sun to go, x and y
    radMax = width/10;
    sunXVal = Math.floor(Math.random() * (width-(radMax*2)));
    sunYVal = Math.floor(Math.random() * (height-(radMax*2)));
    if(sunXVal - radMax < 0){
        sunXVal += radMax+20;
    }
    if(sunYVal - radMax < 0){
        sunYVal += radMax+20;
    }

    finalSunX = sunXVal;
    finalSunY = sunYVal;

    context.fillStyle = 'rgba(0, 0, 0, 1)';
    context.fillRect(0,0,width,height);

    //adjusting brightnesses
    yRange = height - radMax;
    originalYRange = yRange;
    originalXRange = width - radMax;

    sunBrightnessScale = 255/yRange;
    sunBrightness = sunYVal * sunBrightnessScale;
    backgroundBrightnessScale = 1/yRange;
    backgroundBrightness = 1 - (sunYVal * backgroundBrightnessScale) + 0.10;

    //sun + background brightness according to suns position in the sky + to help create contrast in drawing in case simmilar colors are chosen
    bgIndex = Math.floor(Math.random() * colorStrings.length)
    bgStringArray = colorStrings[bgIndex].split(",")
    finBackgroundColor = bgStringArray[0] + ',' + bgStringArray[1] + ',' + bgStringArray[2] + ',' + backgroundBrightness + ')'; 

    context.fillStyle = finBackgroundColor;
    context.fillRect(0,0,width,height);

    sunIndex = Math.floor(Math.random() * colorStrings.length)
    sunStringArray = colorStrings[sunIndex].split(",")
    finalSunColor = sunStringArray[0] + ',' + sunStringArray[1] + ',' + sunBrightness + ',' + sunStringArray[3]; 

    context.fillStyle = finalSunColor;
    context.arc(sunXVal, sunYVal, radMax, 0, 2 * Math.PI);
    context.fill();

    mtnIndex1 = Math.floor(Math.random() * colorStrings.length)
    mtnIndex2 = Math.floor(Math.random() * colorStrings.length)

    mtn1Color = colorStrings[mtnIndex1];
    while(mtn1Color == "rgba(0,0,0,0)"){
        mtnIndex1 = Math.floor(Math.random() * colorStrings.length)
        mtn1Color = colorStrings[mtnIndex1];
    }
    context.fillStyle = mtn1Color;
    context.save();
    context.beginPath();
    context.moveTo(0, height);
    context.lineTo(width/4, height/3);
    context.lineTo((width/4)*2, height);
    context.closePath();
    context.fill();


    mtn2Color = colorStrings[mtnIndex2];
    while(mtn2Color == "rgba(0,0,0,0)"){
        mtnIndex2 = Math.floor(Math.random() * colorStrings.length)
        mtn2Color = colorStrings[mtnIndex2];
    }                context.fillStyle = mtn2Color;
    context.translate(width/4, 0);
    context.beginPath();
    context.moveTo(0, height);
    context.lineTo(width/4, height/1.5);
    context.lineTo((width/4)*2, height);
    context.closePath();
    context.fill()

    context.restore();
    context.translate(width/2, 0);
    context.beginPath();
    context.moveTo(0, height);
    context.lineTo((width/4), height/6);
    context.lineTo(width/2, height);
    context.closePath();
    context.fill();
}

window.addEventListener('load', () => {
setCanvas();
drawInitial();
});

window.addEventListener('resize', () => {
setCanvas();
draw();
});