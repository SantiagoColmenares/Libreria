export class Libro{
    constructor(categoria,isbn,autor,titulo,editorial,edicion,precio,tipoPresentacion,cantidadEjemplares,sizeBook,detalle,noPaginas,codigo,idioma,estado){
        this._categoria = categoria;
        this._isbn = isbn;
        this._autor = autor;
        this._titulo = titulo;
        this._editorial = editorial;
        this._edicion = edicion;
        this._precio = precio;
        this._tipoPresentacion = tipoPresentacion;
        this._cantidadEjemplares = cantidadEjemplares;
        this._sizeBook = sizeBook;
        this._detalle = detalle;
        this._noPaginas = noPaginas;
        this._codigo = codigo;
        this._idioma = idioma;
        this._estado = estado;
    }
    get categoria(){
        return this._categoria
    }
    set categoria(_categoria){
        this.categoria = _categoria
    }
    get isbn(){
        return this._isbn
    }
    set isbn(_isbn){
        this.isbn = _isbn
    }
    get autor(){
        return this._autor
    }
    set autor(_autor){
        this.autor = _autor
    }
    get titulo(){
        return this._titulo
    }
    set titulo(_titulo){
        this.titulo = _titulo
    }
    get editorial(){
        return this._editorial
    }
    set editorial(_editorial){
        this.editorial = _editorial
    }
    get edicion(){
        return this._edicion
    }
    set edicion(_edicion){
        this.edicion = _edicion
    }
    get precio(){
        return this._precio
    }
    set precio(_precio){
        this.precio = _precio
    }
    get tipoPresentacion(){
        return this._tipoPresentacion
    }
    set tipoPresentacion(_tipoPresentacion){
        this.tipoPresentacion = _tipoPresentacion
    }
    get cantidadEjemplares(){
        return this._cantidadEjemplares
    }
    set cantidadEjemplares(_cantidadEjemplares){
        this.cantidadEjemplares = _cantidadEjemplares
    }
    get sizeBook(){
        return this._sizeBook
    }
    set sizeBook(_sizeBook){
        this.sizeBook = _sizeBook
    }
    get detalle(){
        return this._detalle
    }
    set detalle(_detalle){
        this.detalle = _detalle
    }
    get noPaginas(){
        return this._noPaginas
    }
    set noPaginas(_noPaginas){
        this.noPaginas = _noPaginas
    }
    get codigo(){
        return this._codigo
    }
    set codigo(_codigo){
        this.codigo = _codigo
    }
    get idioma(){
        return this._idioma
    }
    set idioma(_idioma){
        this.idioma = _idioma
    }
    get estado(){
        return this._estado
    }
    set estado(_estado){
        this.estado = _estado
    }

}