//validacion de los campos del formulario
$(document).ready(function() {
    $('#formulario-contrato').validate({
      rules: {
        nombre: {
          required: true
        },
        tipo: {
          required: true
        },
        presupuesto: {
          required: true,
          number: true
        },
        tiempo: {
          required: true,
          number: true
        },
        Funcionalidades: {
          required: true
        },
        Integración: {
          required: true
        },
        diseño: {
          required: true
        },
        plataforma: {
          required: true
        },
        requisito:{
          required: true
        }
      },
      messages: {
        nombre: {
          required: 'Por favor, ingrese el nombre de su empresa'
        },
        tipo: {
          required: 'Por favor, ingrese el tipo de aplicación que desea desarrollar'
        },
        presupuesto: {
          required: 'Por favor, ingrese su presupuesto',
          number: 'Por favor, ingrese un número válido'
        },
        tiempo: {
          required: 'Por favor, ingrese el plazo de tiempo que tiene para el desarrollo de la aplicación',
          number: 'Por favor, ingrese un número válido'
        },
        Funcionalidades: {
          required: 'Por favor, ingrese las funcionalidades que desea incluir en la aplicación'
        },
        Integración: {
          required: 'Por favor, ingrese si desea que la aplicación tenga algún tipo de integración con otras plataformas o servicios'
        },
        diseño: {
          required: 'Por favor, ingrese su diseño preferido para la aplicación'
        },
        plataforma: {
          required: 'Por favor, ingrese si desea que la aplicación esté disponible en una plataforma específica'
        },
        requisito:{
          required: 'Por favor, ingrese si desea que la aplicación tenga algún tipo de requisito con otras plataformas o servicios'
        }
      },
      submitHandler: function(form) {
        // Obtener los valores de los campos del formulario
  var nombre = $('#nombre').val();
  var tipo = $('#tipo').val();
  var presupuesto = $('#presupuesto').val();
  var tiempo = $('#tiempo').val();
  var funcionalidades = $('#funcionalidades').val();
  var integracion = $('#Integración').val();
  var diseño = $('#diseño').val();
  var plataforma = $('#plataforma').val();
  var requisitos = $('#requisito').val();
  
  // Crear el mensaje de resumen
  var resumen = '\nRESUMEN: \nTipo de aplicación que desea encargar: ' + tipo + '\n';
  resumen += 'Tiempo disponible para desarrollar la app: ' + tiempo + '\n';
  resumen += 'La integración que necesita es: ' + integracion + '\n';
  resumen += 'Diseño preferido: ' + diseño + '\n';
  resumen += 'Plataforma precisa la app: ' + plataforma + '\n';
  resumen += 'Requisitos adicionales: ' + requisitos;
  
  alert(resumen);

  // Enviar el formulario
  form.submit();;

}
});
});
//funcion para ocultar los paso 2 y 3
$(document).ready(function() {
  $('.form-section').hide(); // oculta todas las secciones al cargar la página
  $('.current').show();     // muestra la sección actual
  $('button[data-target]').click(function() {
    var target = $(this).data('target');
    $('.form-section').hide();
    $(target).show();
  });
});
//funcion del PDF
/*$(document).ready(function() {
  $('#generarPDF').click(function() {
      generatePDF();
  });
});*/
function generatePDF() {
  // Obtener valores del formulario
  var nombre = $('#nombre').val();
  var tipo = $('#tipo').val();
  var presupuesto = $('#presupuesto').val();
  var tiempo = $('#tiempo').val();
  var funcionalidades = $('#funcionalidades').val();
  var integracion = $('#Integración').val();
  var diseno = $('#diseño').val();
  var plataforma = $('#plataforma').val();
  var requisitos = $('#requisito').val();

  // Crear contenido para el PDF
  var contenido = 'Nombre de la empresa: ' + nombre + '\n' +
                  'Tipo de aplicación que desea desarrollar: ' + tipo + '\n' +
                  'Presupuesto para el desarrollo de la aplicación: ' + presupuesto + '\n' +
                  'Plazo de tiempo para el desarrollo de la aplicación: ' + tiempo + '\n' +
                  'Funcionalidades: ' + funcionalidades + '\n' +
                  'Integración con otras plataformas o servicios: ' + integracion + '\n' +
                  'Diseño preferido para la aplicación: ' + diseno + '\n' +
                  'Plataforma específica (iOS, Android, etc.): ' + plataforma + '\n' +
                  'Requisitos adicionales para la plataforma de la aplicación: ' + requisitos;

  // Crear PDF
  var doc = new jsPDF();
  doc.text(contenido, 10, 10);
  doc.save('formulario_contrato.pdf');
}