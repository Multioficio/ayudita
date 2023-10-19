document.addEventListener("keyup", 
e=>{

  
if (e.target.matches("#buscador")){

      
if (e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".articulo").
forEach(Producto =>{

          
Producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?Producto.classList.remove("filtro")
            :Producto.classList.add("filtro")
      })

  }


})