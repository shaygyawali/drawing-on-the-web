var back = document.getElementById("image")
var stars = document.getElementsByClassName("stars")
var city = document.getElementsByClassName("city")
var jelly = document.getElementsByClassName("jelly")
height = window.innerHeight

stars[0].addEventListener("mouseover",function(){
    back.style.backgroundImage = "url('stars.jpeg')";
    back.style.backgroundSize = "cover";

});

city[0].addEventListener("mouseover",function(){
    back.style.backgroundImage = "url('city.jpeg')";
    back.style.backgroundSize = "cover";

});

jelly[0].addEventListener("mouseover",function(){
    back.style.backgroundImage = "url('jelly.jpeg')";
    back.style.backgroundSize = "cover";
});






