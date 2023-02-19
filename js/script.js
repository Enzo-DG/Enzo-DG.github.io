document.addEventListener('DOMContentLoaded', function(event) {

    // función para mostrar y ocultar el menú
    document.getElementById('menu').addEventListener('click', function () {
        document.getElementById('menu').classList.toggle('fa-times');
        document.getElementsByTagName('header')[0].classList.toggle('toggle')
    });

    // se descargan los datos aleatorios generados por la API y se almacenan en variables
    fetch('https://randomuser.me/api/?inc=name,location,email,phone,cell,picture,nat')
        .then(response => response.json())
        .then(persona => {
            let datos = persona.results[0];
            let fotoperfil = datos.picture.large;
            let nombre = datos.name.first+' '+datos.name.last;
            let edad = numeroAleatorio(20,35); // con una función se genera una edad aleatoria entre 20 y 35
            let pais = datos.location.country;
            let email = datos.email;
            let telefono = datos.phone;
            let direccion = datos.location.street.number+' '+datos.location.street.name+', '+datos.location.city+', '+datos.location.state;

            // se completa la información de los elementos HTML con las variables anteriores
            document.getElementById('fotoperfil').src = fotoperfil;
            document.getElementsByClassName('nombre')[0].innerHTML = nombre;
            document.getElementById('nombre').innerHTML = nombre;
            document.getElementById('personal').innerHTML = '<span>nombre:</span> '+nombre;
            document.getElementById('edad').innerHTML = '<span>edad:</span> '+edad;
            document.getElementById('pais').innerHTML = '<span>país:</span> '+pais;
            document.getElementById('email').innerHTML = '<i class="fas fa-envelope"></i>'+email;
            document.getElementById('telefono').innerHTML = '<i class="fas fa-phone"></i>'+telefono;
            document.getElementById('direccion').innerHTML = '<i class="fas fa-map-marker-alt"></i>'+direccion;

            // estos elementos HTML son completados con números aleatorios mediante una función
            document.getElementById('exp').innerHTML = numeroAleatorio(2,5);
            document.getElementById('clientes').innerHTML = numeroAleatorio(20,80);
            let clientes = document.getElementById('clientes').textContent;
            document.getElementById('proyectos').innerHTML = numeroAleatorio(parseInt(clientes),130);
            document.getElementById('premios').innerHTML = numeroAleatorio(2,10);
        });

    window.onscroll = function () {
        // se oculta el menú si se realiza algún desplazamiento
        document.getElementById('menu').classList.remove('fa-times');
        document.getElementsByTagName('header')[0].classList.remove('toggle');
        
        // si el scroll es mayor a 0, se muestra el elemento "arriba", el cual contiene una imagen
        if (document.documentElement.scrollTop > 0) {
         document.getElementById('arriba').style.display = 'block';        
        } else {
         document.getElementById('arriba').style.display = 'none';        
        } 
    }

    // función para crear números enteros aleatorios
    function numeroAleatorio(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

});