
class Product{ 
  constructor (name, price, year){
  this.name = name;   
  this.price = price; 
  this.year = year;   
  }
}

class UI { 
  addProduct(product) { 
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
