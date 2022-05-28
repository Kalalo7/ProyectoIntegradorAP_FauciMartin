export class usuario{
    id?: number;
    nombre: String;
    apellido: String;
    titulo: String;
    descripcion: String;
    fotoperfil: String;

    constructor(nombre: String,apellido: String,titulo: String,descripcion: String,fotoperfil: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fotoperfil = fotoperfil;
    }


}