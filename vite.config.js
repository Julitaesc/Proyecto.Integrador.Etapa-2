import { resolve } from "path"

// console.log(resolve("pages")) //

export default {
    server: {
        port: "2222",
    },
    css: {
        devSourcemap: true,
},

build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
            carrito: resolve("pages/carrito.html"),
            contacto: resolve("pages/contacto.html"),
            nosotros: resolve("pages/nosotros.html"),
            inicio: resolve("index.html")
}
}
}
};