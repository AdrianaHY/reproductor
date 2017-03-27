var cancion = document.getElementById("cancion");

function playAudio(){
  cancion.play();
}

function pauseAudio(){
  cancion.pause();
}

function stopAudio(){
  cancion.load();
}
function subirVolumen(){
  cancion.volume+=0.1;
}
function bajarVolumen(){
  cancion.volume-=0.1;
}
function adelantar(){
  cancion.currentTime+=15;
}
function atrasar(){
  cancion.currentTime-=15;
}

cancion.ontimeupdate = function() {
var rango = document.getElementById("rango")
rango.value = cancion.currentTime;
};
