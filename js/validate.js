//Función para que onsubmit="return validateForm()" y novalidate funcione:
// function validateForm(){
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//
//     //Validar campos no estén vacíos
//     if(username.trim() === "" || password.trim() === ""){
//         alert("Por favor, introduce todos los campos");
//         return false;
//     }
//
//     //Ejemplo de validación adicional: longitud mínima de la contraseña
//     if(password.length < 8){
//         alert("La contraseña debe contener al menos 8 caracteres");
//         return false;
//     }
//
//     //Si todas las validaciones son correctas enviamos el formulario
//     return true;
// }


//En JS existen las funciones de flecha, que no tienen nombre, por lo que siempre se van a ejecutar cuando llegue a ella
window.onload = ()=>{
    'use strict'; //Se ejecuta de forma estricta

    //Traemos todos los elementos del formulario (lo llamamos por clase). Los mete en un array
    let forms = document.querySelectorAll('.needs-validation');
    //Vamos a recorrer los elementos del array resultante con el formulario
    Array.from(forms).forEach(form=>{
        //Creamos el evento de escucha para el botón submit
        form.addEventListener('submit', event=>{
            if(!form.checkValidity()){ //Función nativa que verifica si es correcto (VA ASOCIADA AL REQUIRED QUE TENEMOS EN LOS INPUTS,
                                       // SI NO PONEMOS REQUIRED ÉSTA FUNCIÓN NO FUNCIONA)
                event.preventDefault(); // Para la ejecución del formulario
                event.stopPropagation(); //Hace que no se ejecute el action
            }
        }, false) //False significa que se ejecuta está función en el momento que pulamos click
    })
}