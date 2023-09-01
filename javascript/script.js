window.addEventListener('load', function() {
    scaleWheel();
    scaleRatio();
});

window.addEventListener('resize', function() {
    scaleRatio();
});

let wheel = document.getElementById('wheel')

var delayInMilliseconds = 2000; //1 second
setTimeout(function() {
    let inst = document.getElementById('instructions')
    inst.style.opacity = '1.0'
    //your code to be executed after 1 second
  }, delayInMilliseconds);

function scaleWheel() {
    console.log("hello")
    wheel.style.scale = '300%'
  }

  let xRatio;
  let yRatio;
  
  
  function scaleRatio() {
    let browserWidth = window.innerWidth;
    let browserHeight = window.innerHeight;
  
    xRatio = browserWidth / 150; 
    yRatio = browserHeight / 150; 
  }
  
  function coordinates(event) {
    let xPos = event.clientX; 
    let yPos = event.clientY; 

    console.log(yPos)
  
    interaction(xPos, yPos);
  }
  
  function interaction(xPos, yPos) {
  
     let yRotation = -75 + Math.ceil(yPos / yRatio); 
     console.log('Y rotation: ' + yRotation/15); 
     speedPre = yRotation/15;
     let speedFinal = 1.0;

     if(speedPre > 0){
        speedFinal = 1-speedPre/10;
     }
     else if(speedPre < 0){
        speedFinal = 1 + Math.abs(speedPre);
     }  

    document.querySelector('video').playbackRate = speedFinal;
    wheel.style.transform = 'rotate(' + yRotation*1.5 + 'deg)';
    
  }
  
  window.addEventListener('pointermove', coordinates);
  window.addEventListener('pointerdown', coordinates);