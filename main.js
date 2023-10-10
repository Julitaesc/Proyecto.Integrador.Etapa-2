/* Librerias */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Archivos de proyecto*/
import './css/style.css'

/* Modo claro/oscuro */
const modoSwitch = document.getElementById('modoSwitch');
const body = document.querySelector('body');

// Obtener el modo guardado del almacenamiento local
const modoGuardado = localStorage.getItem('modo');

// Establecer el modo predeterminado si no se encuentra en el almacenamiento local
const modoPredeterminado = modoGuardado || 'claro';

// Aplicar el modo guardado o predeterminado al cuerpo de la página y al interruptor
body.setAttribute('data-bs-theme', modoPredeterminado);
modoSwitch.checked = modoPredeterminado === 'oscuro';

modoSwitch.addEventListener('change', () => {
    if (modoSwitch.checked) {
        // Modo oscuro
        body.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('modo', 'oscuro');
    } else {
        // Modo claro
        body.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('modo', 'claro');
    }
});


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










