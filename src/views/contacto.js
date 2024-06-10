document.getElementById('correo').addEventListener('click', function() {
    var correoText = document.getElementById('correo').querySelector('strong').innerText;
    navigator.clipboard.writeText(correoText).then(function() {
        document.getElementById('mensaje-copiado').style.display = 'block';
        setTimeout(function() {
            document.getElementById('mensaje-copiado').style.display = 'none';
        }, 2000); // Ocultar el mensaje después de 2 segundos
    }, function(err) {
        console.error('No se pudo copiar el correo: ', err);
    });
});


 // Obtener referencia al formulario y a los campos del formulario
 const formulario = document.getElementById('formulario');
 const campoNombre = document.getElementById('nombre');
 const campoEmail = document.getElementById('email');
 const campoMensaje = document.getElementById('mensaje');

 // Agregar un evento 'submit' al formulario
 formulario.addEventListener('submit', function(event) {
     // Evitar que el formulario se envíe automáticamente
     event.preventDefault();
     
     // Enviar el formulario manualmente
     fetch(formulario.getAttribute('action'), {
         method: 'POST',
         body: new FormData(formulario),
         headers: {
             'Accept': 'application/json'
         }
     }).then(function(response) {
         // Limpiar los campos del formulario
         campoNombre.value = '';
         campoEmail.value = '';
         campoMensaje.value = '';
         // Notificar al usuario que el formulario se ha enviado
         alert('¡Formulario enviado con éxito!');
     }).catch(function(error) {
         console.error(error);
         // Notificar al usuario si ocurre un error
         alert('Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
     });
 });