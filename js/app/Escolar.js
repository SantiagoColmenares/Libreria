import { Libro } from "./Libro.js";
    export class Escolar extends Libro{
        constructor(categoria,isbn,autor,titulo,editorial,edicion,precio,tipoPresentacion,cantidadEjemplares,sizeBook,detalle,noPaginas,codigo,idioma,estado,asignatura,grado){
            super(categoria,isbn,autor,titulo,editorial,edicion,precio,tipoPresentacion,cantidadEjemplares,sizeBook,detalle,noPaginas,codigo,idioma,estado);
            this._asignatura = asignatura;
            this._grado = grado;
        }
        get asignatura(){
            return this._asignatura;
        }
        set asignatura(_asignatura){
            this._asignatura = asignatura;
        }
        get grado(){
            return this._grado;
        }
        set grado(_grado){
            this._grado = grado;
        }
    }