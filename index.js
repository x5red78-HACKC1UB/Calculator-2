const display=document.getElementById("numberdisplay");
const calc =document.getElementById("calculator");
const backgrounddisplay= document.getElementById("backgrounddisplay");

function appendToDisplay(input) {
    display.value+= input;
backgrounddisplay.textContent+= input;

}
function clearDisplay() {
    display.value="";
backgrounddisplay.textContent="";
}
function calculate() {
    
    try{
    display.value=eval(display.value);
    backgrounddisplay.textContent= eval(display.value);
    }
    catch(error){
        display.value="Error :("
        backgrounddisplay.textContent= "Error :(";
    }
};
document.addEventListener("keydown", function(event){
if (event.key === "Backspace") {
    removeFromDisplay();
}
});
function removeFromDisplay() {
    display.value=display.value.slice(0,-1);
    backgrounddisplay.textContent= backgrounddisplay.textContent.slice(0,-1);
}

document.addEventListener("mousemove", (e) =>{
const distanceX = (window.innerWidth/2 - e.clientX)/25;
const distanceY = (window.innerHeight/2 - e.clientY)/25;
calc.style.transform =`rotateX(${distanceY}deg) rotateY(${-distanceX}deg)`
});
  



