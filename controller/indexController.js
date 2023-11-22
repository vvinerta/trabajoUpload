function ocultarContenido() {
    var imagenContenedor = document.getElementById("imagenContenedor");
    var contenedorListado = document.getElementById("contenedorListado");

    if (imagenContenedor.style.display === "none") {
        imagenContenedor.style.display = "block";
        contenedorListado.style.display = "none";
    } else {
        imagenContenedor.style.display = "none";
        contenedorListado.style.display = "block";
    }
}

function crearVistaLista(listaSospechosos){

}