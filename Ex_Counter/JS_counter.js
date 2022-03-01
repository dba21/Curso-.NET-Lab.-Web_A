function add_F(){
    var value = parseInt(document.getElementById("my_p").textContent);
    value = value + 1;
    document.getElementById("my_p").textContent = value;
}

function decrease_F(){
    var valueD = parseInt(document.getElementById("my_p").textContent);
    valueD = valueD - 1;
    document.getElementById("my_p").textContent = valueD;
}

function reset_F(){
    document.getElementById("my_p").innerHTML="0"
}

if(add_F > 0){
    document.getElementById("my_p").style.color = green;
}
else if(decrease_F < 0){
    document.getElementById("my_p").style.color = red;
}
else{
    document.getElementById("my_p").style.color = white;
}