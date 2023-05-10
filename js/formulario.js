const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
    nombre:     /^[A-Za-zÀ-ÿ\s]{1,20}$/,
    apellido:   /^[A-Za-zÀ-ÿ\s]{1,20}$/,
    edad:       /^[0-9]{1,2}$/,
    correo:     /^[A-Za-z0-9_.+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z]+$/,
    comentario: /^.{1,50}$/
}

const campos ={
    nombre:     false,
    apellido:   false,
    edad:       false,
    correo:     false
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre')
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido')
        break;
        case "edad":
            validarCampo(expresiones.edad, e.target, 'edad')
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo')
        break;
        case "comentario":
            validarCampo(expresiones.comentario, e.target, 'comentario')
        break;
    }
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`form_${campo}`).classList.remove('form__grupo-incorrecto');
        document.getElementById(`form_${campo}`).classList.add('form__grupo-correcto');
        document.querySelector(`#form_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#form_${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#form_${campo} .form__input-error`).classList.remove('form__input-error-activo')
        campos[campo] = true;
    } else {
        document.getElementById(`form_${campo}`).classList.add('form__grupo-incorrecto');
        document.getElementById(`form_${campo}`).classList.remove('form__grupo-correcto');
        document.querySelector(`#form_${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#form_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#form_${campo} .form__input-error`).classList.add('form__input-error-activo')
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //COMPLETAR con el envio de datos
    const terminos = document.getElementById('terminos');
    if(campos.nombre && campos.apellido && campos.correo && campos.edad && terminos.checked){
        
        //COMPLETAR con el envio de datos

        formulario.reset();
        document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('form__mensaje-exito').classList.remove('form__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.form__grupo-correcto').forEach((icono) => {
            icono.classList.remove('form__grupo-correcto');
        })

        document.getElementById('form__mensaje').classList.remove('form__mensaje-activo');
    } else {
        document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
    }
})