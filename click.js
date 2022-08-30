function keyPressed(e) {
    // console.log(e.key);
    if(e.key === e.key.toUpperCase()) {
        document.getElementById(e.key.toLowerCase()).style.transform = "translateZ(2px)";
        document.getElementById(e.key.toLowerCase()).style.color = "white";
        
        setTimeout(function() {
            document.getElementById(e.key.toLowerCase()).style.transform = "";
            document.getElementById(e.key.toLowerCase()).style.color = "";
        }, 75);
    }
    else {
        document.getElementById(e.key).style.transform = "translateZ(2px)";
        document.getElementById(e.key).style.color = "white";

        setTimeout(function() {
            document.getElementById(e.key).style.transform = "";
            document.getElementById(e.key).style.color = "";
        }, 75);
    }
}

document.addEventListener('keydown', keyPressed);

var zoom = 1
function zoomIn() {
    zoom += 0.1;
    document.getElementById("keyboard").style.transform = "scale(" + zoom + ")";
}

function zoomOut() {
    zoom -= 0.1;
    if(zoom < 1) {
        zoom = 1;
    }
    document.getElementById("keyboard").style.transform = "scale(" + zoom + ")";
}

function reset() {
    zoom = 1;
    document.getElementById("keyboard").style.transform = "scale(" + zoom + ")";
}

function zoomWheel(e) {
    if(e.deltaY > 0) {
        zoomOut();
    }
    else {
        zoomIn();
    }
}

document.addEventListener('wheel', zoomWheel);

var rotationX = 0;
var rotationY = 0;
function rotate(e) {
    if(e.key === "ArrowUp") {
        rotationX += 1;
        rotationY += 0;
        document.getElementById("set").style.transform = "rotateX(" + rotationX + "deg)" + "rotateY(" + rotationY + "deg)";
    }
    if(e.key === "ArrowDown") {
        rotationX-= 1;
        rotationY += 0;
        document.getElementById("set").style.transform = "rotateX(" + rotationX + "deg)" + "rotateY(" + rotationY + "deg)";
    }
    
    if(e.key === "ArrowLeft") {
        rotationY -= 1;
        rotationX += 0;
        document.getElementById("set").style.transform = "rotateY(" + rotationY + "deg)" + "rotateX(" + rotationX + "deg)";
    }

    if(e.key === "ArrowRight") {
        rotationY += 1;
        rotationX += 0;
        document.getElementById("set").style.transform = "rotateY(" + rotationY + "deg)" + "rotateX(" + rotationX + "deg)";
    }
}

document.addEventListener('keydown', rotate);