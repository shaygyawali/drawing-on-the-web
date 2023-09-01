
const canvas = document.getElementById('c1');
const context = canvas.getContext('2d');

const canvas2 = document.getElementById('c2');
const context2 = canvas2.getContext('2d');

var imgScale = 40;

var mainPlanetColor = "grey"
var ringColor = "white"
var subPlanet1 = 'rgba(255,255,255,0.2)';
var subPlanet2 = 'rgba(255,255,255,0.2)';
var backgroundColor = "black";



function setCanvas() {
    height = canvas.height
    width = canvas.width
    height2 = canvas2.height
    width2 = canvas2.width

    canvas.style.height = height  + 'px'
    canvas.style.width = width  + 'px'
    canvas2.style.height = height2  + 'px'
    canvas2.style.width = width2  + 'px'


    // Set actual size in memory (scaled to account for extra pixel density).
    scale = window.devicePixelRatio; 
    // Change to 1 on retina screens to see blurry canvas.
    canvas.height = Math.floor(height * scale);
    canvas.width = Math.floor(width * scale);
    canvas2.height = Math.floor(height2 * scale);
    canvas2.width = Math.floor(width2 * scale);

    context.scale(scale, scale); 
    context2.scale(scale, scale);             
            
}

function draw(){
    circRadius = height/3
    context.save();
    context.fillStyle = backgroundColor;
    context.fillRect(0,0,width,height);

    context.fillStyle = mainPlanetColor;
    context.arc(width/2, height/2, circRadius, 0, 2 * Math.PI);
    context.fill();

    bez1W = (width/2)-circRadius-20
    context.beginPath();
    context.moveTo((width/2)-circRadius, (height/2)-15);
    context.bezierCurveTo((width/2)-circRadius-300, height/2+15, (width/2)+circRadius+300, height/2+15, (width/2)+circRadius, (height/2)-15);
    context.lineWidth = 10;
    context.strokeStyle = ringColor;
    context.stroke();

    context.save()
    context.beginPath();
    context.filter = "blur(16px)"
    context.fillStyle = subPlanet1;
    context.arc(0, 0, circRadius, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.filter = "blur(10px)"
    context.fillStyle = subPlanet2;
    context.arc(width, height, circRadius*1.2, 0, 2 * Math.PI);
    context.fill();

    context.restore();
    context.beginPath();
    context.moveTo(width-100,50);
    context.lineTo(width-150,100);
    context.lineTo(width-100,150);
    context.lineTo(width-50,100);
    context.closePath();
    context.fillStyle = "white"
    context.fill()

    context.restore();
    context.beginPath();
    context.moveTo(150,height-100);
    context.lineTo(130,height-80);
    context.lineTo(150,height-60);
    context.lineTo(170,height-80);
    context.closePath();
    context.fillStyle = "white"
    context.fill()

    circRadius = height2/3
    context2.save();
    context2.fillStyle = backgroundColor;
    context2.fillRect(0,0,width,height);
    context2.fillStyle = 'rgba(0,0,1,0.7)';
    context2.fillRect(0,0,width,height);

    context2.arc(width2/2, height2/2, circRadius, 0, 2 * Math.PI);
    context2.fillStyle = mainPlanetColor;
    context2.fill();

    bez1W = (width2/2)-circRadius-20
    context2.beginPath();
    context2.moveTo((width2/2)-circRadius, (height2/2)-15);
    context2.bezierCurveTo((width2/2)-circRadius-300, height2/2+15, (width2/2)+circRadius+300, height2/2+15, (width2/2)+circRadius, (height2/2)-15);
    context2.lineWidth = 10;
    context2.strokeStyle = ringColor;
    context2.stroke();
    context.lineWidth = 10;
    context.strokeStyle = "rgba(255,255,255,0.5)";
    context.stroke();

    context2.save()
    context2.beginPath();
    context2.filter = "blur(16px)"
    context2.fillStyle = subPlanet1;
    context2.arc(0, 0, circRadius, 0, 2 * Math.PI);
    context2.fill();

    context2.beginPath();
    context2.filter = "blur(10px)"
    context2.fillStyle = subPlanet2;
    context2.arc(width2, height2, circRadius*1.2, 0, 2 * Math.PI);
    context2.fill();

    context2.restore();
    context2.beginPath();
    context2.moveTo(width2-100,50);
    context2.lineTo(width2-150,100);
    context2.lineTo(width2-100,150);
    context2.lineTo(width2-50,100);
    context2.closePath();
    context2.fillStyle = "white"
    context2.fill()

    context2.restore();
    context2.beginPath();
    context2.moveTo(150,height2-100);
    context2.lineTo(130,height2-80);
    context2.lineTo(150,height2-60);
    context2.lineTo(170,height2-80);
    context2.closePath();
    context2.fillStyle = "white"
    context2.fill()
}

accessData = async () => {
        fetch("https://api.pexels.com/v1/search?query=nepal",{
            headers: {
              Authorization: "5UzV5IiJ0aFVpI73FIUctmuTSA92jPXH2JdLwKWAWE9uuIrXsswnxW9y"
            }
          })
        .then(resp => {
            return resp.json()
          })
          .then(data => {
            getImage(data.photos);
          })

    
      getImage = (response) => {
        // access value with dot syntax

        var img = new Image;
        img.onload = function() {

            context2.drawImage(img, 0, 0, canvas2.width, canvas2.height);

            let imageData = context2.getImageData(0, 0, canvas2.width, canvas2.height);
            let data = imageData.data;
            context2.clearRect(0, 0, width, height);


            colorStrings = [];
            for(let i = 0; i < data.length; i+=4){
                tempStr = 'rgba(' + data[i] + ',' + data[i+1] + ',' + data[i+2] + ',' + data[i+3] + ')';
                colorStrings.push(tempStr);
            }

            mainPlanetColor = colorStrings[Math.floor(Math.random() * colorStrings.length)]
            ringColor = colorStrings[Math.floor(Math.random() * colorStrings.length)]
            subPlanet1 = colorStrings[Math.floor(Math.random() * colorStrings.length)]
            subPlanet2 = colorStrings[Math.floor(Math.random() * colorStrings.length)]
            backgroundColor = colorStrings[Math.floor(Math.random() * colorStrings.length)]

            redrawC2();
        }

        photoIndex = Math.floor(Math.random() * 5)
        imgURL = response[photoIndex].src.original;
        img.crossOrigin = "Anonymous";
        img.src = imgURL;
} }

function redrawC2() {
    circRadius = height2/3
    context2.save();
    context2.fillStyle = backgroundColor;
    context2.fillRect(0,0,width,height);
    context2.fillStyle = 'rgba(0,0,1,0.7)';
    context2.fillRect(0,0,width,height);

    context2.arc(width2/2, height2/2, circRadius, 0, 2 * Math.PI);
    context2.fillStyle = mainPlanetColor;
    context2.fill();

    bez1W = (width2/2)-circRadius-20
    context2.beginPath();
    context2.moveTo((width2/2)-circRadius, (height2/2)-15);
    context2.bezierCurveTo((width2/2)-circRadius-300, height2/2+15, (width2/2)+circRadius+300, height2/2+15, (width2/2)+circRadius, (height2/2)-15);
    context2.lineWidth = 10;
    context2.strokeStyle = ringColor;
    context2.stroke();

    context2.save()
    context2.beginPath();
    context2.filter = "blur(16px)"
    context2.fillStyle = subPlanet1;
    context2.arc(0, 0, circRadius, 0, 2 * Math.PI);
    context2.fill();

    context2.beginPath();
    context2.filter = "blur(10px)"
    context2.fillStyle = subPlanet2;
    context2.arc(width2, height2, circRadius*1.2, 0, 2 * Math.PI);
    context2.fill();

    context2.restore();
    context2.beginPath();
    context2.moveTo(width2-100,50);
    context2.lineTo(width2-150,100);
    context2.lineTo(width2-100,150);
    context2.lineTo(width2-50,100);
    context2.closePath();
    context2.fillStyle = "white"
    context2.fill()

    context2.restore();
    context2.beginPath();
    context2.moveTo(150,height2-100);
    context2.lineTo(130,height2-80);
    context2.lineTo(150,height2-60);
    context2.lineTo(170,height2-80);
    context2.closePath();
    context2.fillStyle = "white"
    context2.fill()
}

window.addEventListener('load', () => {
  setCanvas();
  draw();
  accessData();
});
