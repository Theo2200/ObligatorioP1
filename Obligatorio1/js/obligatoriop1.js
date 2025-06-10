window.addEventListener("load", inicio);

function inicio(){
    document.getElementById("botonAgregar").addEventListener("click", nuevoContacto);
}

/* crea un corredor nuevo con los datos de pantalla , faltan cambiar pila de cosas*/
function nuevoCorredor(){
    if (document.getElementById("formCorredores").reportValidity()){
        let nombre = document.getElementById("idNombre").value;
        let apellido = document.getElementById("idApellido").value;
        let edad = parseInt(document.getElementById("idEdad").value);
        let telefono = document.getElementById("idTelefono").value;
        if (telefono.length>0 && agenda.existeTelefono(telefono)){
            alert("El telefono está repetido");
        }
        else {
            let contacto = new Contacto(nombre, apellido, edad, telefono);
            agenda.agregarContacto(contacto);
            cargarCombo();
            document.getElementById("formContactos").reset();
        }
    }
}

/* Carga el combo con todos los contactos */
function cargarCombo(){
    let combo = document.getElementById("idcombo");
    combo.innerHTML = "";
    let datos = agenda.darCarreras();
    for (let i=0; i<datos.length; i++){
        let nodo = document.createElement("");
        let nodoTexto = document.createTextNode(datos[i]);
        nodo.appendChild(nodoTexto);
        combo.appendChild(nodo);
    }
}