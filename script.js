function cambiarContenido() {
    const contenedor = document.querySelector(".container");
    const titulo = document.querySelector(".container h1");

    const titulos = [
        "Aprendiendo Git 🚀",
        "Trabajando con ramas 🌿",
        "Haciendo commits 💾",
        "Dominando JavaScript 🔥"
    ];

    const colores = ["lightblue", "lightgreen", "lightcoral", "khaki", "plum"];

    titulo.textContent = titulos[Math.floor(Math.random() * titulos.length)];
    contenedor.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
}