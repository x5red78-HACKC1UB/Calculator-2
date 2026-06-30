const display=document.getElementById("numberdisplay");
const calc =document.getElementById("calculator");
const background =document.getElementById("background");

function appendToDisplay(input) {
    display.value+= input;
background.textContent=display.value;

}
function clearDisplay() {
    display.value="";
   background.textContent="";

}
function calculate() {
    
    try{
    display.value=eval(display.value);
   background.textContent=display.value;
    }
    catch(error){
        display.value="Error :("
        background.textContent=display.value;
    }
};

document.addEventListener("mousemove", (e) =>{
const distanceX = (window.innerWidth/2 - e.clientX)/25;
const distanceY = (window.innerHeight/2 - e.clientY)/25;
calc.style.transform =`rotateX(${distanceY}deg) rotateY(${-distanceX}deg)`
});
  



