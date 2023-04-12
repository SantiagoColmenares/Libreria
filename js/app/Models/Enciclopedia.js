import { Libro } from "./Libro.js";
export class Enciclopedia extends Libro {
    constructor(categoria, isbn, autor, titulo, editorial, edicion, precio, tipoPresentacion, cantidadEjemplares, sizeBook, detalle, noPaginas, codigo, idioma, estado, areaConocimiento, volumen, noTomos) {
        super(categoria, isbn, autor, titulo, editorial, edicion, precio, tipoPresentacion, cantidadEjemplares, sizeBook, detalle, noPaginas, codigo, idioma, estado);
        this._areaConocimiento = areaConocimiento;
        this._volumen = volumen;
        this._noTomos = noTomos;
    }
    get areaConocimiento() {
        return this._areaConocimiento;
    }
    set areaConocimiento(_areaConocimiento) {
        this._areaConocimiento = areaConocimiento;
    }
    get volumen() {
        return this._volumen;
    }
    set volumen(_volumen) {
        this._volumen = volumen;
    }
    get noTomos() {
        return this._noTomos;
    }
    set noTomos(_noTomos) {
        this._noTomos = noTomos;
    }
}