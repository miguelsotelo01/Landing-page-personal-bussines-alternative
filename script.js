document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    var tag = document.getElementById("text");
    var html = document.getElementById("text").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 170;

    function typeWriter() {
        if (i <= txt.length) {
            document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
});
  //funcion de la api
  function mostrarNombres(data, status) {
    // creamos un  Objeto con los enlaces a las imágenes de los usuarios
    const imagenes = {
      "Leanne Graham": "https://scontent.fros9-2.fna.fbcdn.net/v/t1.6435-9/51942445_1669431103202161_142616102755631104_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGLcQNFY8rlkB4-a0WliHuOt2CE5HYPZjm3YITkdg9mOaqJFrMVWkj9657GGcEiOSB_F5vLlMpneIjOh7KgpSwn&_nc_ohc=G7EEG-BHg3IAX_Ejo10&_nc_oc=AQk-EaQxwWdO3Toq-36iqmCMuaqrmyN3qLVrnXRi6nLJzUlJuRlaAKkmsucbtxMpXRM&_nc_ht=scontent.fros9-2.fna&oh=00_AfD9qMA5Ec4pfou85bFoFTtibXGnJ_MfhSFRrwvwSCgFmg&oe=64618FA7",
      "Ervin Howell": "https://firebasestorage.googleapis.com/v0/b/frontend-argentina-programa.appspot.com/o/WhatsApp%20Image%202023-04-15%20at%207.19.55%20PM.jpeg?alt=media&token=1a3393bf-c5a6-4364-b332-3145847556a1",
      "Clementine Bauch": "https://firebasestorage.googleapis.com/v0/b/frontend-argentina-programa.appspot.com/o/roberta.jpg?alt=media&token=982c9218-96f4-4c0d-8107-1bc3993aacbf"
    };
  //declaramos la variable personas y con slice seleccionamos los primero 3 index y con map tomamos los users
    let personas = data.slice(0, 3).map(user => {
      // Obtenemos la imagen correspondiente al usuario
      const imagen = imagenes[user.name] || ""; //asignamos a la variable imagen el valor de imagenes o sino un string vacio como predeterminado
      //retornamos el html a crear, con template string a las zonas que se va a tomar la informacion de la api
      return `
        <div class="persona d-flex flex-column text-center justify-content-center align-items-center">
          <div class="persona__imagen" style="background-image: url('${imagen}')"></div>
          <span class="persona__nombre">${user.name}</span>
          <span class="persona__funcion">${user.company.catchPhrase}</span>
        </div>
      `;
    });
  //reemplazamos el contenido del html con la variable personas.
    $("#users").html(personas);
  }
  
  //llamamos a la api
  function llamarApi(){
    $.get("https://jsonplaceholder.typicode.com/users", mostrarNombres);
  }
  //el api estara funcionando al empezar la pagina.
  llamarApi();
  
  
  