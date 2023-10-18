/* Librerias */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Archivos de proyecto*/
import './css/style.css'
import { comprarProducto,
        eliminarProducto, 
        leerLocalStorage, 
        leerLocalStorageCompra, 
        procesarPedido, 
        vaciarCarrito } from './src/carrito';

/* Modo claro/oscuro */
const modoSwitch = document.getElementById('modoSwitch');
const body = document.querySelector('body');

// Obtener el modo guardado del almacenamiento local
const modoGuardado = localStorage.getItem('modo');

// Establecer el modo predeterminado si no se encuentra en el almacenamiento local
const modoPredeterminado = modoGuardado || 'oscuro';

// Función para aplicar los estilos del modo actual
function aplicarEstilos(modo) {
    if (modo === 'oscuro') {
        body.setAttribute('data-bs-theme', 'dark');
    } else {
        body.setAttribute('data-bs-theme', 'light');
    }
}


// Aplicar el modo guardado o predeterminado al cuerpo de la página y al interruptor
aplicarEstilos(modoPredeterminado);
modoSwitch.checked = modoPredeterminado === 'oscuro';

// Manejar el cambio de modo
modoSwitch.addEventListener('change', () => {
    const modoSeleccionado = modoSwitch.checked ? 'oscuro' : 'claro';
    aplicarEstilos(modoSeleccionado);
    localStorage.setItem('modo', modoSeleccionado);
});

// Disparar el evento change al cargar la página para aplicar los estilos
modoSwitch.dispatchEvent(new Event('change'));



/* User */

document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtiene los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validación de coincidencia de contraseñas
    if (password !== confirmPassword) {
        document.getElementById("passwordMismatchError").style.display = "block";
        document.getElementById("formError").style.display = "block";
        return; // Detiene el proceso si las contraseñas no coinciden
    } else {
        document.getElementById("passwordMismatchError").style.display = "none";
    }

    // Puedes agregar más validaciones aquí según tus necesidades
    // ...

    // Si todo está bien, muestra el mensaje de éxito
    document.querySelector(".alert-success").style.display = "block";
    document.getElementById("formError").style.display = "none";
});


/* Monedas */
const tasasDeCambio = {
    eur: 0.013, // Tasa de cambio para Euros
    usd: 0.015, // Tasa de cambio para Dólares
    brl: 0.080 // Tasa de cambio para Reales Brasileños
};

const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        const codigoMoneda = item.getAttribute('data-codigo-moneda');
        // Resto del código para obtener tasas de cambio y realizar conversiones
    });
});

/* Pagina Contacto */

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        event.preventDefault();
        alert('Por favor, completa todos los campos.');
    }
});



/* Carrito */

const productos = document.getElementById('lista-productos')
//console.log(productos)
const carrito = document.getElementById('carrito')
// console.log(carrito)


cargarEventos()

function cargarEventos() {

    const ruta = String(location.href)
    console.log(ruta)
    
    if ( !ruta.includes('carrito.html') ) {
        esIndex()
    } else {
        console.log('Estoy en carrito')
        // Voy a leer el localStorage
        document.addEventListener('DOMContentLoaded', leerLocalStorageCompra()
        )

    }

}

function esIndex() {
    console.log('No estoy en carrito!')
    const vaciarCarritoBtn = carrito.querySelector('#vaciar-carrito')
    const procesarPedidoBtn = carrito.querySelector('#procesar-pedido')
    console.log(vaciarCarritoBtn, procesarPedidoBtn)

    // Se ejecuta cuando presiono sobre el botón comprar
    productos.addEventListener('click', (e) => comprarProducto(e))

    // Al cargar el documento se muestra lo almacenado en el LS
    document.addEventListener('DOMContentLoaded', leerLocalStorage())

    //Cuando se elimina un producto del carrito
    carrito.addEventListener('click', e => eliminarProducto(e))

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', e => vaciarCarrito(e))

    // Enviar pedido a otra página
    procesarPedidoBtn.addEventListener('click', e => procesarPedido(e))
}

