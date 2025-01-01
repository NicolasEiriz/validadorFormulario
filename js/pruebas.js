function probarValidarNombre() {
  console.assert(
    validarNombre('') === 'El campo nombre no puede estar vacío', 'ValidarNombre no validó que el campo esté vacío'
  )

  console.assert(
    validarNombre('Nicolas1212') === 'El campo nombre debe contener sólo letras', 'ValidarNombre no validó que el campo contenga sólo letras'
  )

  console.assert(
    validarNombre('asdfghjklasdfghjklasdfghjklasdfgsjsksjahagahajsjshahahshajajshsahhasas') === 'El campo nombre no puede superar los 50 carácteres', 'validarNombre no validó que el campo tenga menos de 50 carácteres'
  )

  console.assert(
    validarNombre('Nicolas') === '', 'ValidarNombre no aceptó un campo válido'
  )
}

probarValidarNombre()


