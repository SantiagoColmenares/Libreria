import { Libro } from "../Models/Libro.js";
import { Categorias } from "../database/categoria.js";
import { Editorial } from "../database/editoriales.js";
import { Idioma } from "../database/idioma.js";
class GestorLibros extends HTMLElement{
   constructor(){
    super();
    this.render();
    this.fillCategorySelect();

    this.saveData();
   }
   render(){
      this.innerHTML=`
      <div class="card">
      <div class="card-header">
      Libros <span class="badge bg-secondary" id="codEquipo"></span>
      </div>
      <div class="card-body">
      <form id = "frmData">
          <div class="row g-3">
              <div class="col-3">
                  <label for="isbn" class="form-label">Isbn</label>
                  <input type="text" class="form-control" id="isbn">
              </div>
          <div class="col-4">
              <label for="nombreLibro" class="form-label">Nombre Libro</label>
              <input type="text" class="form-control" id="nombreLibro">
          </div>
          <div class="col-2">
              <label for="fechaPu" class="form-label">Fecha de Publicacion</label>
              <input type="date" class="form-control" id="fechaPu"> 
          </div>
          <div class="col-3">
              <label for="autor" class="form-label">Autor</label>
              <input type="text" class="form-control" id="autor">                  
          </div>
          </div>
          <div class="row g-3">
          <div class="col-4">
              <label for="editorial" class="form-label">Editorial</label>
              <select class="form-select" id="editorial">
                  <option selected>Seleccione una editorial</option>
                  </select>
          </div>
          <div class="col-4">
              <label for="numeroPaginas" class="form-label">Numero de paginas</label>
              <input type="number" class="form-control" id="numeroPaginas">                  
          </div>
          </div>
          <div class="row g-3">
              <div class="col-4">
                  <label for="categoria" class="form-label">Categoria</label>
                  <select class="form-select" id="categoria">
                  <option selected>Seleccione una categoria</option>

                  </select>
              </div>
              <div class="col-4">
                  <label for="presentacion" class="form-label">Presentacion</label>
                  <select class="form-select" id="presentacion">
                  <option selected>Seleccione una presentacion</option>
                  </select>
              </div>
              <div class="col-4">
                  <label for="idioma" class="form-label">Idioma</label>
                  <select class="form-select" id="idioma">
                  <option selected>Seleccione el idioma deseado</option>

                  </select>
              </div>
          </div>
          <div class="row g-3">
              <div class="col-6">
                  <label for="codigo" class="form-label">Codigo</label>
                  <input type="text" class="form-control" id="codigo"> 
              </div>
              <div class="col-4">
                  <label for="disponibilidad" class="form-label">Disponibilidad</label>
                  <input type="text" class="form-control" id="disponibilidad"> 
              </div>
              
              <div class="col-4">
                  <label for="precio" class="form-label">Precio</label>
                  <input type="number" class="form-control" id="precio"> 
              </div>
              <div class="col-4">
                  <label for="sizeLibros" class="form-label">Tamaño</label>
                  <input type="text" class="form-control" id="sizeLibros"> 
              </div>
              <div class="col-4">
                  <label for="edicion" class="form-label">Edicion</label>
                  <input type="text" class="form-control" id="edicion"> 
              </div>
              
          </div>
          <div class="row g-3">
              <div class="col-12">
                  <label for="detalle" class="form-label">Detalle</label>
                  <textarea class="form-control" id="detalle" rows="3"></textarea>
              </div>
  
              
          </div>
      </form>              
      <a href="#" class="btn btn-primary mt-3" id="guardarData">Guardar datos</a>
      </div>
  </div> 
      `
   }

   clearSelect(v_Select){
      const selectData = document.querySelector(v_Select) ;
      const options = selectData.querySelectorAll('option');
      options.forEach(element =>{
          selectData.removeChild(element);
      })
  }

   fillCategorySelect(){
      this.clearSelect('#categoria');
      const selectData = document.querySelector('#categoria') ;
      const itemStart = document.createElement('option');
      itemStart.innerHTML = 'Seleccione una categoria';
      itemStart.selected;
      selectData.appendChild(itemStart);
  
      Categorias.forEach(data =>{
          let dataItem =JSON.parse(JSON.stringify(data));
          const item = document.createElement('option');
          item.value = dataItem.id;
          item.innerHTML = dataItem.categoria;
          selectData.appendChild(item);
      })
  }



  saveData = () => {
    document.querySelector('#guardarData').addEventListener('click',(e)=>{
        const libreria = document.querySelector('#codLibros');
        let frmLibros = document.forms['frmData'];
        let isbn = frmLibros['isbn']
        let categoria = frmLibros['categoria']
        let autor = frmLibros['autor']
        let titulo = frmLibros['titulo']
        let editorial = frmLibros['editorial']
        let edicion = frmLibros['edicion']
        let precio = frmLibros['precio']
        let tipoPresentacion = frmLibros['tipoPresentacion']
        let cantidadEjemplares = frmLibros['cantidadEjemplares']
        let sizeBook = frmLibros['sizeLibros']
        let detalle = frmLibros['detalle']
        let numeroPaginas = frmLibros['numeroPaginas']
        let idioma = frmLibros['idioma']
        let estado = frmLibros['estado']
        let codigo = frmLibros['codigo']
        let libro = new Libro(isbn.value,categoria.value,autor.value,titulo.value,editorial.value,edicion.value, precio.value,tipoPresentacion.value,cantidadEjemplares.value,sizeBook.value,detalle.value,numeroPaginas.value,idioma.value,estado.value,codigo.value)
    })

  }
}
customElements.define('gestor-libros',GestorLibros);
