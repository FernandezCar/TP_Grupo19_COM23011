window.addEventListener('load', function () {
    var imageContainer = document.getElementById('imageContainer');
    var images = [
        'imagenes/carrousel/carrousel-01.jpg',
        'imagenes/carrousel/carrousel-02.jpg',
        'imagenes/carrousel/carrousel-03.jpg',
        'imagenes/carrousel/carrousel-04.jpg',
        'imagenes/carrousel/carrousel-05.jpg',
        'imagenes/carrousel/carrousel-06.jpg',
        'imagenes/carrousel/carrousel-07.jpg'
    ];
    var currentIndex = 0;
    var duration = 3000; // Duración de cada imagen (3 segundos)

    function showNextImage() {
        // Calcula el índice de la siguiente imagen
        currentIndex = (currentIndex + 1) % images.length;

        // Establece la imagen como fondo del contenedor
        imageContainer.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    // Cambia automáticamente las imágenes cada cierto tiempo
    setInterval(showNextImage, duration);

    // Muestra la primera imagen al cargar la página
    imageContainer.style.backgroundImage = `url('${images[currentIndex]}')`;
});