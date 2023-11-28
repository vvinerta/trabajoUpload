const txtNombre = document.getElementById("txtNombre");
const txtDireccion = document.getElementById("txtDireccion");
const selTipo = document.getElementById("selTipo");
const selCulpabilidad = document.getElementById("selCulpabilidad");
const txtFecha = document.getElementById("txtFecha");
const txtComentario = document.getElementById("txtComentario");
const txtUrlFoto = document.getElementById("txtUrlFoto");
const btnGuardar = document.getElementById("btnGuardar");

selTipo.addEventListener('change',function(){
    if(selTipo.value == "cargado"){
        txtFecha.disabled = false;
    }else{
        txtFecha.disabled = true;
        txtFecha.value = "";
    }
});


function fechaMaximaHoy(){
    var today = new Date().toISOString().split('T')[0];

    document.getElementById('txtFecha').setAttribute('max', today);
}
fechaMaximaHoy();


function anadirSujeto(){

    let arrayDatos = cargarDatosLocalStorage();
    let arrayExisten = [];
    let add = false;

    arrayDatos.forEach(sujeto => {
       arrayExisten.push(sujeto.nombre); 
    });

    const nombre = txtNombre.value;
    const direccion = txtDireccion.value;
    const tipo = selTipo.value;
    const fechaDescarga = txtFecha.value; 
    const culpabilidad = selCulpabilidad.value;
    const urlFoto = txtUrlFoto.value;
    const comentarios = txtComentario.value;

    arrayExisten.forEach(nom =>{
        if(nom == nombre){
            alert("Ese nombre "+nombre+" ya existe en el registro");
            add = false;
            return;
        }else{
            add = true;
        }
    });
    if(add == true){
        if(tipo == "cargado" && fechaDescarga == ""){
            alert("Si esta cargado debe de indicar la fecha de cuando fue la carga");
        }else{
            const sujetoNuevo = new Sujeto(nombre, tipo, direccion, fechaDescarga, culpabilidad, urlFoto, comentarios);
            arrayDatos.push(sujetoNuevo);
            console.log(arrayDatos);
            anadirDatosLocalStorage(arrayDatos);
            alert("Sujeto registrado en la base de datos.");
            location.reload();
            ocultarFormulario();
        }
    }
}

function cargarSujeto(objeto,index){

    mostrarFormulario();
    txtNombre.disabled = true;

    btnGuardar.onclick = function(){
        modificarSujeto(index);
    }
    txtNombre.value = objeto.nombre;
    txtDireccion.value = objeto.direccion;
    selTipo.value = objeto.tipo;
    selCulpabilidad.value = objeto.culpabilidad;
    txtFecha.value = objeto.fechaDescarga;
    txtComentario.value = objeto.comentarios;
    txtUrlFoto.value = objeto.urlFoto;

    txtNombre.disabled = true;

}

function modificarSujeto(index){

    let arrayDatos = cargarDatosLocalStorage();

    const nombre = txtNombre.value;
    const direccion = txtDireccion.value;
    const tipo = selTipo.value;
    const fechaDescarga = txtFecha.value; 
    const culpabilidad = selCulpabilidad.value;
    const urlFoto = txtUrlFoto.value;
    const comentarios = txtComentario.value;

    if(tipo == "cargado" && fechaDescarga == ""){
        alert("Si esta cargado debe de indicar la fecha de cuando fue la carga");
    }else{
        const sujetoNuevo = new Sujeto(nombre, tipo, direccion, fechaDescarga, culpabilidad, urlFoto, comentarios);
        arrayDatos[index] = sujetoNuevo;
        console.log(arrayDatos);
        anadirDatosLocalStorage(arrayDatos);
        alert("Sujeto modificado en la base de datos.");
        txtNombre.disabled = false;
        btnGuardar.addEventListener('click',anadirSujeto);
        location.reload();
        ocultarFormulario();
    }

}


