const txtNom = document.getElementById("txtNombre");
const txtDir = document.getElementById("txtDireccion");
const selTip = document.getElementById("selTipo");
const selCul = document.getElementById("selCulpabilidad");
const txtFec = document.getElementById("txtFecha");
const txtCom = document.getElementById("txtComentario");
const txtUrl = document.getElementById("txtUrlFoto");
function resetearFormulario(){
    txtNom.value = "",
    txtDir.value = "";
    selTip.value = "";
    selCul.value = "";
    txtFec.value = "";
    txtCom.value = "";
    txtUrl.value = "";
}


function ocultarContenido() {
    var imagenContenedor = document.getElementById("imagenContenedor");
    var contenedorListado = document.getElementById("contenedorListado");
    var contenedorFormulario = document.getElementById("contenedorFormulario");
    var txtNombre = document.getElementById("txtNombre");
    txtNombre.disabled = false;
    resetearFormulario();

    if (imagenContenedor.style.display === "none") {
        imagenContenedor.style.display = "block";
        contenedorListado.style.display = "none";
        contenedorFormulario.style.display = "none";
    } else {
        imagenContenedor.style.display = "none";
        contenedorListado.style.display = "block";
        contenedorFormulario.style.display = "none";
    }
}

function crearVistaLista(listaSospechosos){

    console.log(listaSospechosos);

    const contenedorListado = document.getElementById('contenedorListado')
    listaSospechosos.forEach(function(objeto, index) {
        const divCard = document.createElement('div');
        divCard.className = "card";
        const divImagen = document.createElement('div');
        divImagen.className = "divImagen";
        divImagen.addEventListener("click",function(){
            cargarSujeto(objeto, index);
        }); 
        const img = document.createElement('img');
        img.src = objeto.urlFoto;
        img.addEventListener('error',()=>{img.src='../assets/fotoDesconocido.jpg'});
        if(objeto.tipo == "cargado"){
            img.style.border = "3px solid green"; 
        }else{
            img.style.border = "3px solid red";
        }
        const divDatos = document.createElement('div');
        divDatos.className = "divDatos";
        const pnombre = document.createElement('p');
        pnombre.textContent = objeto.nombre;
        if(objeto.culpabilidad == "posiblecooperador"){
            pnombre.style.color = "green";
        }
        if(objeto.culpabilidad == "cooperador"){
            pnombre.style.color = "orange";
        }
        if(objeto.culpabilidad == "delincuente"){
            pnombre.style.color = "red";
        }
        const pdireccion = document.createElement('p');
        pdireccion.textContent = objeto.direccion;

        divImagen.appendChild(img);

        divDatos.appendChild(pnombre);
        divDatos.appendChild(pdireccion);

        divCard.appendChild(divImagen);
        divCard.appendChild(divDatos);

        contenedorListado.appendChild(divCard);
        
    });
}

const arrayDatos = cargarDatosLocalStorage();

console.log("datos de localStorage",arrayDatos);

crearVistaLista(arrayDatos);

function mostrarFormulario(){
    txtNom.disabled = false;
    var imagenContenedor = document.getElementById("imagenContenedor");
    var contenedorListado = document.getElementById("contenedorListado");
    var contenedorFormulario = document.getElementById("contenedorFormulario");


        contenedorFormulario.style.display = "block";
        contenedorListado.style.display = "none";
        imagenContenedor.style.display = "none";
    
}

function ocultarFormulario(){
    var imagenContenedor = document.getElementById("imagenContenedor");
    var contenedorListado = document.getElementById("contenedorListado");
    var contenedorFormulario = document.getElementById("contenedorFormulario");

    imagenContenedor.style.display = "none";
    contenedorListado.style.display = "block";
    contenedorFormulario.style.display = "none";

}