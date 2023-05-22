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


const apiKey = 'live_PPDQpqrD4G5a9XEqgo8Hgm3QXy6ZrNfgMT65FeCSuZwq83EJxEofcuSdOHYyxhKq';

// Obtener la lista de razas de Gatos
fetch(`https://api.thecatapi.com/v1/breeds?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const breedSelect = document.getElementById('breed-select');

        data.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);
        });

        // Escuchar el evento de cambio en el select
        breedSelect.addEventListener('change', () => {
            const selectedBreedId = breedSelect.value;

            // Obtener la información de la raza seleccionada
            const selectedBreed = data.find(breed => breed.id === selectedBreedId);

            // Mostrar la imagen y la información de la raza
            document.getElementById('breed-image').src = selectedBreed.image.url;
            document.getElementById('breed-info').innerHTML = `
      <cite>${selectedBreed.name}</cite><br>
      <a href="${selectedBreed.wikipedia_url}" target="_blank">Ver más en Wikipedia</a>
    `;
        });
    })
    .catch(error => {
        console.error('Error al obtener la lista de razas:', error);
    });

const apiKey2 = 'live_Szu01Q4IU366sLI81Sl1wPUnHSCACTaPi3l11iBPRKDwOzXNvOz0ElgHAqATN3Tw';

// Obtener la lista de razas de Perros
fetch(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey2}`)
    .then(response => response.json())
    .then(data => {
        const breedSelect = document.getElementById('breed-p-select');

        data.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);
        });

        // Escuchar el evento de cambio en el select
        breedSelect.addEventListener('change', () => {
            const selectedBreedId = breedSelect.value;

            // Obtener la información de la raza seleccionada
            const selectedBreed = data.find(breed => breed.id === selectedBreedId);

            // Obtener la URL de la imagen de la raza
            fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${selectedBreedId}&api_key=${apiKey}`)
                .then(response => response.json())
                .then(images => {
                    if (images.length > 0) {
                        const imageUrl = images[0].url;

                        // Mostrar la imagen de la raza
                        document.getElementById('breed-p-image').src = imageUrl;
                    }
                })
                .catch(error => {
                    console.error('Error al obtener la imagen de la raza:', error);
                });
            // Mostrar la información de la raza
            document.getElementById('breed-p-info').innerHTML = `
      <cite>${selectedBreed.name}</cite><br>
      <a href="${selectedBreed.wikipedia_url}" target="_blank">Ver más en Wikipedia</a>
    `;
        });
    })
    .catch(error => {
        console.error('Error al obtener la lista de razas:', error);
    });