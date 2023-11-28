const idLocalStorage = "sujetos";

function cargarInicioLocalStorage(){

    const datosLocalStorage = localStorage.getItem(idLocalStorage);

    if(datosLocalStorage == null){
        const sujetoNuevo = new Sujeto(
            "David Choak",
            "cargado",
            "C/Alaun 8",
            "2015-11-23", 
            "delincuente",
            "https://www.postavy.cz/foto/david-choak-foto.jpg",
            "Él fue un influyente multimillonario que fue cargado a Lakeview, y vive en el mismo piso que Nathan Brown."
        );
    const arraySujetos = [];

    arraySujetos.push(sujetoNuevo);

    localStorage.setItem(idLocalStorage,JSON.stringify(arraySujetos));

    }
}

cargarInicioLocalStorage();

function cargarDatosLocalStorage(){

    const datosLocalStorage = localStorage.getItem(idLocalStorage);

    if (datosLocalStorage !== null) {

        const arraySujetos = JSON.parse(datosLocalStorage);
        
        return arraySujetos;
    }

    return [];
}

function anadirDatosLocalStorage(arraySujetos){
    localStorage.setItem(idLocalStorage,JSON.stringify(arraySujetos));
}
