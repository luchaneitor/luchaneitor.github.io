onload = () =>{
        document.body.classList.remove("container");
};

var miAudio = document.getElementById('LATINMAFIA');

// Función para iniciar la reproducción al hacer clic en cualquier lugar de la pantalla
function iniciarReproduccion() {
if (miAudio.paused) {
        miAudio.play();
        } else {
                miAudio.pause();
        }
}
// Agregar un evento de clic al documento que llama a la función
document.addEventListener('click', iniciarReproduccion);
