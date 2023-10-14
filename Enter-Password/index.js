const imagen = document.getElementById("eye");
    const imagenOriginalSrc = imagen.src;
    const nuevaImagenSrc = "./img/eye.svg"; // Ruta de la nueva imagen

    let imagenCambiada = false;

    imagen.addEventListener("click", () => {
        if (imagenCambiada) {
            imagen.src = imagenOriginalSrc; // Restaurar la imagen original
        } else {
            imagen.src = nuevaImagenSrc; // Cambiar a la nueva imagen
        }

        imagenCambiada = !imagenCambiada; // Cambiar el estado de la imagen
    });