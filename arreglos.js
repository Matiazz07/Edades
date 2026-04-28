let edadesIzquierda = [];
let edadesDerecha = [];

function agregarEdad() {
    let txtEdad = document.getElementById("edad").value;
    let txtEdadEntera = parseInt(txtEdad);
    edadesIzquierda.push(txtEdadEntera);
    edadesDerecha.push(txtEdadEntera);
    mostrarEdadesIzquierda();
    mostrarEdadesDerecha();
    return;
}

function mostrarEdadesIzquierda() {
    let html = "";
    for (let i = 0; i < edadesIzquierda.length; i++) {
        html += "<tr>";
        html += "<td>" + edadesIzquierda[i] + "</td>";
        html += "<td><button class='btn-eliminar' onclick='eliminarIzquierda(" + i + ")'>Eliminar</button></td>";
        html += "<td><button class='btn-mover' onclick='moverIzquierda(" + i + ")'>Mover</button></td>";
        html += "</tr>";
    }
    document.getElementById("tablaIzquierda").innerHTML = html;
}

function eliminarIzquierda(posicion) {
    edadesIzquierda.splice(posicion, 1);
    mostrarEdadesIzquierda();
}

function moverIzquierda(posicion) {
    let edad = edadesIzquierda.splice(posicion, 1);
    edadesDerecha.push(edad[0]);
    mostrarEdadesIzquierda();
    mostrarEdadesDerecha();
}

function mostrarEdadesDerecha() {
    let html = "";
    for (let i = 0; i < edadesDerecha.length; i++) {
        html += "<tr>";
        html += "<td><button class='btn-mover' onclick='moverDerecha(" + i + ")'>Mover</button></td>";
        html += "<td>" + edadesDerecha[i] + "</td>";
        html += "<td><button class='btn-eliminar' onclick='eliminarDerecha(" + i + ")'>Eliminar</button></td>";
        html += "</tr>";
    }
    document.getElementById("tablaDerecha").innerHTML = html;
}

function eliminarDerecha(posicion) {
    edadesDerecha.splice(posicion, 1);
    mostrarEdadesDerecha();
}

function moverDerecha(posicion) {
    let edad = edadesDerecha.splice(posicion, 1);
    edadesIzquierda.push(edad[0]);
    mostrarEdadesIzquierda();
    mostrarEdadesDerecha();
}