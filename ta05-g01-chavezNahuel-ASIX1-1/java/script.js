// 1. Mensaje al cargar la página
window.addEventListener("load", function () {
    alert("Nahuel and Eitan");
});

// 2. Cambiar color del header al hacer clic
document.querySelector("header").addEventListener("click", function () {
    this.style.backgroundColor = "#9333ea";
});

// 3. Mostrar / ocultar imagen del footer
const imgAnonimo = document.querySelector(".imganonimo img");

imgAnonimo.addEventListener("click", function () {
    if (this.style.display === "none") {
        this.style.display = "block";
    } else {
        this.style.display = "none";
    }
});

