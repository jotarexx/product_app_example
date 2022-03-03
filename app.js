
//metodo constructor: se ejecuta apenas creamos un objeto utilizando la clase Product

class Product{ // como van a lucir los productos internamente en la aplicacion
  constructor (name, price, year){
  this.name = name;   // de este producto, su nombre va a ser asignado del nom que le paso al constructor 
  this.price = price;  // este prod, su precio sera asignado del precio que le paso al constructor
  this.year = year;   // este prod, su año sera asignado del año que le paso al constructor
  }
}

class UI { //User interfase, interactua con HTML, la interf es la que va a acceder al HTML para laterarlo
  addProduct(product) { // recibe un parametro que es un producto
    const productList =  document.getElementById ('product-list')  // intereactuamos con el documento y accedemos a laparte del documento que se encarga de mostrar productos (product-list) y lo guardamos en una CONSTANTE
    const element = document.createElement('div')  //creamos un elemento html y se lo doy al div (const document...) para que lo muestre en pantalla
    // creamos un div y a este le agregamos dentro el producto y luego se lo damos a ProductList (es el produc-list de html) y se verá en pantalla
    // inserto un element al elemento html 
    element.innerHTML = `  
      <div class="card text-center mb-4">  
        <div class="card-body">
          <strong>Product Name</strong>: ${product.name} 
          <strong>Product Price</strong>: ${product.price} 
          <strong>Product Year</strong>: ${product.year}
          <a href="#" class="btn btn-danger" name="delete">Delete</a>
        </div> 
      </div>
    ` ;
    // le indicamos que elemento va a ir dentro del product-list(de html)
    //del producto solo quiero mostrar el nombre, del precio solo el precio, etc
    productList.appendChild(element); // a productList le agregamos un elemento HIJO appendchild
  }

  resetForm(){ //quiero obtener un elemento por id : product-form y luego, quiero llamar al metodo reset, asi resetea el formulario
    document.getElementById('product-form').reset(); // resetea formulario

  }

  deleteProduct(){

  }

  showMessage(){

  }
}

//DOM EVENT: cuando un usuario da click en un boton/ cuando escribe/refresca pagina

     //ADDEVENTLISTENER:se encanga de capturar muchos eventos del formulario /quiero capturar el evento SUBMIT y cuando lo capture quiero ejecutar (FUNCTION) una alerta de ENVIANDO FORMULARIO
document.getElementById('product-form') //quiero OBTENER el ID llamado Product-form (este id esta en html )
  .addEventListener('submit', function(e) { // e: evento en Consola
    const name= document.getElementById('name').value; //quiero el elemento llamado Name y obtener su VALOR
    const price= document.getElementById('price').value; 
    const year= document.getElementById('year').value ;

    const product = new Product (name,price, year); //lo guardo en una const y crea un nuevo objeto unico,  
    //formando parte del objeto (class) Producto (creando en la Class arriba)
    //todos los datos almacenados en la consola los guarda en una CONSTANTE

   const ui = new UI (); // creo una nueva instancia sobre la clase de arriba, luego me da un objeto con los metodos en verde (add product/ delete prod / show message) y le doy el producto creado previamente para que lo muestre en pantalla 
    ui.addProduct(product)
    ui.resetForm(); // resetea el formulario

    e.preventDefault(); // e (evento) quiero cancelar su comportamiento por defecto(reiniciar informacion en consola cuando refrescamos) , llamando al metodo PreventDefault
});


//elemento de eliminar: dentro del product-list quiero capturar tu evento tu evento de click, cuando lo hagas quiero mostar una alerta que diga Eliminando
document.getElementById('product-list').addEventListener('click', function(e){
  console.log(e.target) // que CAPTURE (target) el elemento que hago click
});


 

//    https://www.youtube.com/watch?v=nqre9kKFRpc 
// 46:00
