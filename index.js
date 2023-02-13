import jsonEs from "./traduccion/es/index.json" assert {type: 'json'};
import jsonEn from "./traduccion/en/index.json" assert {type: 'json'};

let traducir = () => {
    let idioma = document.getElementById("languageButton").value;
    let jsonPath = jsonEs;

    if (idioma=="es") {
        jsonPath = jsonEs;
    } else {
        jsonPath = jsonEn;
    }

    document.getElementById("cabecera-DNI").innerHTML = jsonPath.cabecera.DNI;
    document.getElementById("cabecera-fechaDeNacimiento").innerHTML = jsonPath.cabecera.fechaDeNacimiento;
    document.getElementById("cabecera-lugarDeResidencia").innerHTML = jsonPath.cabecera.lugarDeResidencia;
    document.getElementById("acordeonUno-titulo").innerHTML = jsonPath.acordeonUno.titulo;
    document.getElementById("acordeonUno-correoElectronico").innerHTML = jsonPath.acordeonUno.correoElectronico;
    document.getElementById("acordeonUno-telefonoCelular").innerHTML = jsonPath.acordeonUno.telefonoCelular;
    document.getElementById("acordeonDos-titulo").innerHTML = jsonPath.acordeonDos.titulo;
    document.getElementById("acordeonDos-empresaUno").innerHTML = jsonPath.acordeonDos.empresaUno;
    document.getElementById("acordeonDos-empresaDos").innerHTML = jsonPath.acordeonDos.empresaDos;
    document.getElementById("acordeonTres-titulo").innerHTML = jsonPath.acordeonTres.titulo;
    document.getElementById("acordeonTres-escuelaUno").innerHTML = jsonPath.acordeonTres.escuelaUno;
    document.getElementById("acordeonTres-escuelaDos").innerHTML = jsonPath.acordeonTres.escuelaDos;
    document.getElementById("acordeonCuatro-titulo").innerHTML = jsonPath.acordeonCuatro.titulo;
    document.getElementById("acordeonCuatro-conocimientoUno").innerHTML = jsonPath.acordeonCuatro.conocimientoUno;
    document.getElementById("acordeonCuatro-conocimientoDos").innerHTML = jsonPath.acordeonCuatro.conocimientoDos;
    document.getElementById("acordeonCuatro-conocimientoTres").innerHTML = jsonPath.acordeonCuatro.conocimientoTres;
    document.getElementById("acordeonCinco-titulo").innerHTML = jsonPath.acordeonCinco.titulo;
    document.getElementById("acordeonCinco-pasatiempo").innerHTML = jsonPath.acordeonCinco.pasatiempo;
    document.getElementById("pies-firma").innerHTML = jsonPath.pies.firma;
};

document.addEventListener("DOMContentLoaded", function(event) {
    //código a ejecutar cuando el DOM está listo para recibir acciones
    traducir(); 


});

document.getElementById("languageButton").addEventListener("change", function(event) {
    traducir();
});