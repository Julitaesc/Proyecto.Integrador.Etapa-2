/* Librerias */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

/* Archivos de proyecto*/
import './css/style.css'

/* Modo claro/oscuro */
const modoToggle = document.getElementById('modo-toggle');
const body = document.body;

modoToggle.addEventListener('change', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
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










