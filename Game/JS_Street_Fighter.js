function pName1(){
    let player = prompt("Player, enter your name.");
    if (player != null){
        document.getElementById("p1").innerHTML = player;
    }
}

function pName2(){
    let player = prompt("Player, enter your name.");
    if (player != null){
        document.getElementById("p2").innerHTML = player;
    }
}

function hit1(){
    var value = document.getElementById("myHealth2").clientWidth;
    var at = document.getElementById("myHealth2").style.width = value -10;
    
    if(at >= 330){
        document.getElementById("myHealth2").style.backgroundColor = "green";
        //document.getElementById("boneco").src= "Image/dhalsim-street-fighter.png"
    }
    else if (at <= 330 && at >= 120){
        document.getElementById("myHealth2").style.backgroundColor = "yellow";
    }
    else if(at >=0){
        document.getElementById("myHealth2").style.backgroundColor = "red";
    }
    else {
        alert("Player 1 Win!")
    }
}

function hitS1(){
    var value = document.getElementById("myHealth2").clientWidth;
    var at = document.getElementById("myHealth2").style.width = value -30;
    
    if(at >= 330){
        document.getElementById("myHealth2").style.backgroundColor = "green";
        //document.getElementById("boneco").src= "Image/dhalsim-street-fighter.png"
    }
    else if (at <= 330 && at >= 120){
        document.getElementById("myHealth2").style.backgroundColor = "yellow";
    }
    else if(at >= 0){
        document.getElementById("myHealth2").style.backgroundColor = "red";
    }
    else{
        alert("Player 1 Win!")
    }
}

function hit2(){
    var value = document.getElementById("myHealth1").clientWidth;
    var at = document.getElementById("myHealth1").style.width = value -10;

    if(at >= 330){
        document.getElementById("myHealth1").style.backgroundColor = "green";
    }
    else if (at <= 330 && at >= 120){
        document.getElementById("myHealth1").style.backgroundColor = "yellow";
    }
    else if(at >=0){
        document.getElementById("myHealth1").style.backgroundColor = "red";
    }
    else{
        alert("Player 2 Win!")
    }
}

function hitS2(){
    var value = document.getElementById("myHealth1").clientWidth;
    var at = document.getElementById("myHealth1").style.width = value -30;
    
    if(at >= 330){
        document.getElementById("myHealth1").style.backgroundColor = "green";
        //document.getElementById("boneco").src= "Image/dhalsim-street-fighter.png"
    }
    else if (at <= 330 && at >= 120){
        document.getElementById("myHealth1").style.backgroundColor = "yellow";
    }
    else if(at >= 0){
        document.getElementById("myHealth1").style.backgroundColor = "red";
    }
    else{
        alert("Player 2 Win!")
    }
}

function heal1(){
    var value = document.getElementById("myHealth1").clientWidth;
    var he = document.getElementById("myHealth1").style.width = value +20;

    if(he < 330 && he >= 270){
        document.getElementById("myHealth1").style.backgroundColor = "green";
    }
    else if (he >= 120 && he <= 270){
        document.getElementById("myHealth1").style.backgroundColor = "yellow";
    }
    else if(he >=0 && he <= 120){
        document.getElementById("myHealth1").style.backgroundColor = "red";
    }
    else if(he >= 330){
        document.getElementById("myHealth1").style.width = 330;
    }
}

function heal2(){
    var value = document.getElementById("myHealth2").clientWidth;
    var he = document.getElementById("myHealth2").style.width = value +20;

    if(he < 330 && he >= 270){
        document.getElementById("myHealth2").style.backgroundColor = "green";
    }
    else if (he >= 120 && he <= 270){
        document.getElementById("myHealth2").style.backgroundColor = "yellow";
    }
    else if(he >=0 && he <= 120){
        document.getElementById("myHealth2").style.backgroundColor = "red";
    }
    else if(he >= 330){
        document.getElementById("myHealth2").style.width = 330;
    }
}