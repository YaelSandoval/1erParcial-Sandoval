const secciones = document.querySelectorAll(".aparecer");

window.addEventListener("scroll", () => {

    secciones.forEach(seccion => {

        const posicion = seccion.getBoundingClientRect().top;

        if(posicion < window.innerHeight - 100){
            seccion.classList.add("visible");
        }

    });

});

