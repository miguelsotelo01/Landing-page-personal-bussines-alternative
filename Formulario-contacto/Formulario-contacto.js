$(document).ready(function() {
  // Este evento se ejecuta cuando el documento HTML se ha cargado completamente
  // Se utiliza para evitar que el código se ejecute antes de que la página esté completamente cargada
    $('#formulario').validate({
      // Selecciona el formulario con el id "formulario" y lo valida utilizando el plugin jQuery Validate
      rules: {
        // Define las reglas de validación para cada campo del formulario
        nombre: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        asunto: {
          required: true,
          minlength: 10
        },
        mensaje: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        // Define los mensajes de error que se mostrarán si algún campo no cumple con las reglas de validación
        nombre: {
          required: "Por favor ingrese su nombre",
          minlength: "El nombre debe tener al menos 3 caracteres"
        },
        email: {
          required: "Por favor ingrese su correo electrónico",
          email: "Por favor ingrese un correo electrónico válido"
        },
        asunto: {
          required: "Por favor ingrese su asunto",
          minlength: "El asunto debe tener al menos 10 caracteres"
        },
        mensaje: {
          required: "Por favor ingrese su mensaje",
          minlength: "El mensaje debe tener al menos 10 caracteres"
        }
      },
      submitHandler: function(form) {
        // Este evento se ejecuta cuando el formulario se envía correctamente
      // Obtiene los valores de los campos del formulario y los guarda en variables
        var name = $("#nombre").val();
        var email = $("#email").val();
        var asunto = $("#asunto").val();
        var message = $("#mensaje").val();
        
        // Muestra los valores del formulario en una alerta
        alert("Nombre: " + name + "\nEmail: " + email + "asunto: "+ asunto +"\nMensaje: " + message);
  
  
              // Envía el formulario utilizando el método submit() y muestra un mensaje de éxito en una alerta
        form.submit();
        alert('Formulario enviado');
      }
    });
  });
  
  $(document).ready(function() {
      // Este evento se ejecuta cuando el documento HTML se ha cargado completamente
    $('#generarPDF').click(function() {
       // Este evento se ejecuta cuando el botón con el id "generarPDF" es clickeado
    // Crea un nuevo objeto jsPDF para generar el archivo PDF
      var doc = new jsPDF();
          // Obtiene los valores de los campos del formulario y los guarda en variables
      var nombre = $('#nombre').val();
      var email = $('#email').val();
      var asunto = $('#asunto').val();
      var mensaje = $('#mensaje').val();
      // Crea una cadena de texto con los valores del formulario
      var text = `Nombre: ${nombre}\nEmail: ${email}\n Asunto: ${asunto}\nMensaje: ${mensaje}`;
          // Agrega el texto al archivo PDF y lo guarda con el nombre "formulario.pdf"
      doc.text(text, 10, 10);
      doc.save('formulario.pdf');
    });
  });