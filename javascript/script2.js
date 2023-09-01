window.addEventListener('load', function() {
    scaleWheel();
    scaleRatio();
});

window.addEventListener('resize', function() {
    scaleRatio();
});

let turn = 0;
let animation =  requestAnimationFrame(spin);
let foodFiles = ['./media/bagel.png', './media/injera.png', './media/momos.png', './media/ramen.png', './media/pizza.png', './media/halal.png', './media/sushi.png']
let wheel = document.getElementById('wheel')

function spin(){

    animation =  requestAnimationFrame(spin);
    
    if(turn < 360){
        if(turn == 100 || turn == 200 || turn == 300 || turn == 400){
            const randomElement = foodFiles[Math.floor(Math.random() * foodFiles.length)];
            wheel.src=randomElement;
        }
        turn += 1;
        wheel.style.transform = 'rotate('+turn+'deg)';
    } else {
        turn = 0;
    }

}

var delayInMilliseconds = 2000; //2 second
setTimeout(function() {
    let inst = document.getElementById('instructions')
    inst.style.opacity = '1.0'
  }, delayInMilliseconds);

function scaleWheel() {
    wheel.style.scale = '500%'
  }

  let yRatio;
  
  function scaleRatio() {
    let browserHeight = window.innerHeight;
  
    yRatio = browserHeight / 150; 
  }
  
  function coordinates(event) {
    let yPos = event.clientY; 

    console.log(yPos)
  
    interaction(yPos);
  }
  
  function interaction(yPos) {
  
     let yRotation = -75 + Math.ceil(yPos / yRatio); 
     console.log('Y rotation: ' + yRotation/15); 
     speedPre = yRotation/15;
     let speedFinal = 1.0;

     if(speedPre > 0){
        speedFinal = 1-speedPre/10;
     }
     else if(speedPre < 0){
        speedFinal = Math.abs(speedPre);
     }  

    document.querySelector('video').playbackRate = speedFinal;
    wheel.style.transform = 'rotate(' + yRotation*1.5 + 'deg)';
    
  }
  
  window.addEventListener('pointermove', coordinates);
  window.addEventListener('pointerdown', coordinates);