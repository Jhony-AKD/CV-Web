//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si se encuentra oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Al seleccionar una opcion, se oculta el menu
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creacion de barras identificadas por sus id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let electricidad = document.getElementById("electricidad");
crearBarra(electricidad);
let programacion = document.getElementById("programacion");
crearBarra(programacion);
let electronica = document.getElementById("electronica");
crearBarra(electronica);
let reparacion = document.getElementById("reparacion");
crearBarra(reparacion);
let mecanica = document.getElementById("mecanica");
crearBarra(mecanica);
let diseño = document.getElementById("diseño");
crearBarra(diseño);

let contadores = [-1,-1,-1,-1,-1,-1];

let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalElectricidad = setInterval(function(){
            pintarBarra(electricidad, 16, 0, intervalElectricidad);
        },100);
        const intervalProgramacion = setInterval(function(){
            pintarBarra(programacion, 11, 1, intervalProgramacion);
        },100);
        const intervalElectronica= setInterval(function(){
            pintarBarra(electronica, 11, 2, intervalElectronica);
        },100);
        const intervalReparacion = setInterval(function(){
            pintarBarra(reparacion, 15, 3, intervalReparacion);
        },100);
        const intervalMecanica = setInterval(function(){
            pintarBarra(mecanica, 16, 4, intervalMecanica);
        },100);
        const intervalDiseño = setInterval(function(){
            pintarBarra(diseño, 11, 5, intervalDiseño);
        },100);
    }
}

//llenado de una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#100192";
    }else{
        clearInterval(interval)
    }
}

//deteccion del scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}