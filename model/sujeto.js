class Sujeto {
    constructor(nombre, tipo, direccion, fechaDescarga, culpabilidad, urlFoto, comentarios) {
        this.id = Date.now();
        this.nombre = nombre;
        this.tipo = tipo;
        this.direccion = direccion;
        this.fechaDescarga = fechaDescarga;
        this.culpabilidad = culpabilidad;
        this.urlFoto = urlFoto;
        this.comentarios = comentarios;
    }

}


