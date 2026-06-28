const display=document.getElementById("numberdisplay");
function appendToDisplay(input) {
    display.value+= input;
    display.textContent += input;
display.scrollLeft = numberdisplay.scrollWidth;
}
function clearDisplay() {
    display.value="";
}
function calculate() {
    
    try{
    display.value=eval(display.value);
    }
    catch(error){
        display.value="Error :("
    }
}
    
display.textContent += digit;
display.scrollLeft = numberdisplay.scrollWidth;