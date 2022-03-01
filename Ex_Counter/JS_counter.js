function add_F(){
    var value = parseInt(document.getElementById("my_p").textContent);
    value = value + 1;
    document.getElementById("my_p").textContent = value
    if(value > "0"){
        document.getElementById("my_p").style.color= "#02df14";
    }
    else if(value == "0"){
        document.getElementById("my_p").style.color = "#FFFFFF";
    }
}

function decrease_F(){
    var valueD = parseInt(document.getElementById("my_p").textContent);
    valueD = valueD - 1;
    document.getElementById("my_p").textContent = valueD
    if(valueD < "0"){
        document.getElementById("my_p").style.color= "#df0202";
    }
    else if(valueD == "0"){
        document.getElementById("my_p").style.color = "#FFFFFF";
    }
}

function reset_F(){
    document.getElementById("my_p").innerHTML="0"
    document.getElementById("my_p").style.color = "#FFFFFF";
}
