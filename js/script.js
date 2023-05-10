
const carrousel_interno =   document.querySelector('.carrousel_interno')
const punto =               document.querySelectorAll('.punto')

punto.forEach( (cadaPunto, i ) => {
    punto[i].addEventListener('click',()=>{

        let posicion = i
        let operacion = posicion * -16.6

        carrousel_interno.style.transform = `translateX(${ operacion }%)`

        punto.forEach( ( cadaPunto , i) =>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
});