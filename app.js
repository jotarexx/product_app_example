
class Product{ // como van a lucir los productos internamente en la aplicacion
  constructor (name, price, year){
  this.name = name;   // de este producto, su nombre va a ser asignado del nom que le paso al constructor 
  this.price = price;  // este prod, su precio sera asignado del precio que le paso al constructor
  this.year = year;   // este prod, su año sera asignado del año que le paso al constructor
  }
}

class UI { //User interfase, interactua con HTML, la interf es la que va a acceder al HTML para laterarlo
  addProduct(product) { // recibe un parametro que es un producto
    const productList =  document.getElementById ('product-list')
    const element = document.createElement('div')  
    
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

document.getElementById('product-form') //quiero OBTENER el ID llamado Product-form (este id esta en html )
  .addEventListener('submit', function(e) { // e: evento en Consola
    const name= document.getElementById('name').value; //quiero el elemento llamado Name y obtener su VALOR
    const price= document.getElementById('price').value; 
    const year= document.getElementById('year').value ;

    const product = new Product (name,price, year); //lo guardo en una const y crea un nuevo objeto unico,  
   
   const ui = new UI ();
    ui.addProduct(product)
    ui.resetForm(); 

    e.preventDefault(); 
});


document.getElementById('product-list').addEventListener('click', function(e){
  console.log(e.target) // que CAPTURE (target) el elemento que hago click
});
