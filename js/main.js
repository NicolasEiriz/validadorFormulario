// Objetivos: Hacer una validación en el formulario para los campos NOMBRES, CIUDAD y DESCRIPCIÓN regalo. 

// Si el usuario no completa correctamente dichos campos se deberá cambiar los bordes de los respectivos inputs en color rojo y además mostrar cual es el error para que el usuario tenga dicha información.

// Conceptos utilizados: manipulación del DOM, Expresiones Regulares, manipulación de estilos, validación del lado del cliente, pruebas unitarias para comprobar que las funciones estén correctas.

const $form = document.formulario


$form.button.onclick = validarFormulario

function validarFormulario(event){

  const nombre = $form.nombre.value
  const ciudad = $form.ciudad.value
  const descripcionRegalo = $form['descripcion-regalo'].value

  const errores = {
    nombre: validarNombre(nombre),
    ciudad: validarCiudad(ciudad),
    'descripcion-regalo': validarDescripcionRegalo(descripcionRegalo)
  }
  
  const formularioCorrecto = manejarErrores(errores) === 0

  if(formularioCorrecto){
    $form.className = 'oculto'
    document.querySelector('#exito').className = ''
    setTimeout(()=>{
      window.location.href = '/wishlist.html'
    },5000)
    
  }
  
  event.preventDefault()
}

// Validaciones

function validarNombre(nombre){

  if(nombre.length === 0){
    return 'El campo nombre no puede estar vacío'
  }

  if(/^[a-zñ]+$/i.test(nombre) === false){
    return 'El campo nombre debe contener sólo letras'
  }

  if(nombre.length >= 50){
    return 'El campo nombre no puede superar los 50 carácteres'
  }

  return ''

}

function validarCiudad(ciudad){
  if(ciudad.length === 0){
    return 'El campo ciudad no puede estar vacío'
  }
  if(ciudad.length > 30){
    return 'El campo ciudad no puede superar los 30 carácteres'
  }

  if(/^[a-z]+( [a-z]+)?$/i.test(ciudad) === false){
    return 'El campo ciudad debe contener sólo letras'
  }


  return ''
}

function validarDescripcionRegalo(descripcionRegalo){
 
  if(descripcionRegalo.length ===  0){
    return 'El campo descripción no puede estar vacío'
  }

  if(descripcionRegalo.length >= 50){
    return 'El campo descripción no puede superar los 50 carácteres'
  }

  return ''
}


// Detectar si hay un error y de ser así mostrarlo al usuario

function manejarErrores(errores){
  const erroresKeys = Object.keys(errores)
  const listadoErrores = document.querySelector('#errores')
  listadoErrores.textContent = ''
  let cantidadErrores = 0

  erroresKeys.forEach(campoError => {
    const descripcionError = errores[campoError]

    if(descripcionError){
      $form[campoError].className = 'error'
      const listaError = document.createElement('li')
      listaError.innerText = descripcionError
      listadoErrores.appendChild(listaError)
      cantidadErrores++;
    }
    else{
      $form[campoError].className = ''

    }
  });

  return cantidadErrores
}
