
const listaProductos = document.querySelector('#lista-carrito tbody')

export function comprarProducto(e) {
    e.preventDefault()
    //console.dir(e.target)
    if (e.target.classList.contains('agregar-carrito') ) {
    const producto = e.target.parentElement.parentElement

    console.log(producto);
    leerDatosProducto(producto)
    }
}

//Leer datos del producto
function leerDatosProducto(producto) {
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h5').textContent,
        precio: producto.querySelector('.precio').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
//console.log(infoProducto);

let productosLS
productosLS = obtenerProductosLocalStorage()

productosLS.forEach(function(productosLS) {
    if(productosLS.id === infoProducto.id) {
    productosLS = productosLS.id;
    }
})

if (productosLS === infoProducto.id) {
    console.warning('El producto ya está en el carrito (LocalStorage)')
    } else {
        insertarCarrito(infoProducto)
    }
}

function obtenerProductosLocalStorage() {
let productosLS

if ( localStorage.getItem('productos') === null ) {
    productosLS = []
}
    else {
    productosLS = JSON.parse(localStorage.getItem('productos'))
    }
    return productosLS
}

//Muestra el producto seleccionado en carrito
function insertarCarrito(producto) {
    const row = document.createElement('tr')

    row.innerHTML = `
    <td>
        <img src="${producto.imagen}" alt="${producto.titulo}" width="100">
    </td>
    <td>${producto.titulo}</td>
    <td>${producto.precio}</td>
    <td>
        <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
    </td>
    `
    
listaProductos.appendChild(row)
}