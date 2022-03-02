function hit1(){
    var value = document.getElementById("myHealth2").clientWidth;
    var at = document.getElementById("myHealth2").style.width = value -10;
    

    if(at >= 320){
        document.getElementById("myHealth2").style.backgroundColor = "green";
        //document.getElementById("boneco").src= "Image/dhalsim-street-fighter.png"
    }
    else if (at <= 320 && at >= 130){
        document.getElementById("myHealth2").style.backgroundColor = "yellow";
    }
    else if(at >=0){
        document.getElementById("myHealth2").style.backgroundColor = "red";
    }
    else{
        alert("GAME OVER")
    }
}

function hit2(){
    var value = document.getElementById("myHealth1").clientWidth;
    var at = document.getElementById("myHealth1").style.width = value -10;

    if(at >= 320){
        document.getElementById("myHealth1").style.backgroundColor = "green";
    }
    else if (at <= 320 && at >= 130){
        document.getElementById("myHealth1").style.backgroundColor = "yellow";
    }
    else if(at >=0){
        document.getElementById("myHealth1").style.backgroundColor = "red";
    }
    else{
        alert("GAME OVER")
    }
}