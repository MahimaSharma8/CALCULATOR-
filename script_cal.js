
function appendToDisplay(value) 
{
    document.getElementById('display').value += value;
}

function clearDisplay() 
{
    document.getElementById('display').value = '';
    document.getElementById("prompts").innerHTML=""; 
}
function result(value)
{
    const txt =  document.getElementById("prompts")
    txt.innerHTML=value;
    txt.animate([
        { opacity: 1 },
        { opacity: 0 }
    ],
    {
        fill: "forwards",
        easing: "steps(10, end)",
        duration: 1500,
    }
    );   
}
function calculate() 
{
    var display = document.getElementById('display');
    try
    {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
    result(display.value)
}
function powerCal()
{
    document.getElementById("prompts").innerHTML="PLEASE ENTER VALUE OF Y";
    let x =0;
    let y= 0;
    let val = 0;
    var display = document.getElementById('display');
    x = display.value;
    y = prompt('Y =');
    display.value =(Math.pow(x,y)).toString();
    result(display.value) 
}
function sqrtCal()
{
    let x =0;
    x = display.value;
    display.value = (Math.round((Math.pow(x,0.5))*100)/100).toString();
    result(display.value)
}
function prctgCal()
{
    let x=0;
    x = display.value;
    display.value = x/100;
    result(display.value)
}
const night=document.getElementById("night");
night.onclick = function()
{
  document.body.classList.toggle("dark_colors");
}
function cooljs()
{
    const btn = document.getElementById("math");
    const other = document.getElementById("justWHY");
    btn.style.display="NONE";

    other.style.width = "auto";
    other.style.height = "auto";
}