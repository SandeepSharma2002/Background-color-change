var clicktimes  = 0; 
const generatecolor = () => {
    clicktimes += 1;
    if(clicktimes == 10)
{
    document.getElementById("Colourname").innerText = "Bas kr bhai";

}
else if(clicktimes > 10 && clicktimes < 15){
    document.getElementById("Colourname").innerText = "Nhi Mannega";
}
else if(clicktimes == 15){
    document.getElementById("Colourname").innerText = " Le Kr le ab";
    document.getElementById("btn").style.display = "none";
}
else{
    const RandomNumber = Math.floor(Math.random() * 16777215);
    const recolor = "#" + RandomNumber.toString(16);
    document.getElementById("Colourname").innerText = recolor;
    document.body.style.backgroundColor = recolor;
    document.getElementById("Colourname").style.color = recolor; 
}
    
}
document.querySelector("#btn").addEventListener("click", generatecolor)
generatecolor();
