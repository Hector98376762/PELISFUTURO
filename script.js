const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(button => {

   button.addEventListener("click", () => {

      const filterValue = button.getAttribute("data-filter");

      // Quitar active de todos
      filterButtons.forEach(btn => btn.classList.remove("active"));

      // Activar el actual
      button.classList.add("active");

      cards.forEach(card => {

         const category = card.getAttribute("data-category");

         if (filterValue === "all" || category === filterValue) {
            card.classList.remove("hide");
         } else {
            card.classList.add("hide");
         }

      });

   });

});



const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// 2. Escuchamos cuando el usuario hace clic en el botón "Iniciar sesión"
loginForm.addEventListener('submit', function(event) {
    
    // Evitamos que la página se recargue (esto es vital en formularios)
    event.preventDefault();

    // 3. Obtenemos los valores que escribió el usuario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 4. LA VALIDACIÓN (Tú decides el usuario y clave aquí)
    if (email === "segurapolancohector@gmail.com" && password === "Hector123456") {
        
        // Si es correcto, lo guardamos en la "mochila" del navegador
        localStorage.setItem("logueado", "true");

        // ¡LO MANDAMOS A LA PÁGINA PRINCIPAL!
        window.location.href = "index.html"; 

    } else {
        // Si se equivoca, mostramos el error en rojo
        errorMessage.innerText = "Correo o contraseña incorrectos. Intenta de nuevo.";
        errorMessage.style.color = "red";
    }
});





function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}

function cerrarSesion() {
    window.location.href = "login.html";
}

// Cerrar el menú si el usuario hace click en un link
document.querySelectorAll('.menu-content a').forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});

// Buscador funcional
document.addEventListener("keyup", (e) => {
    // 1. Solo actuamos si escribimos en el buscador
    if (e.target.id === "inputBuscar") {
        const textoUsuario = e.target.value.toLowerCase();
        
        // 2. Agarramos todas tus cartas
        const todasLasCartas = document.querySelectorAll(".card");

        todasLasCartas.forEach(carta => {
            // 3. Buscamos el H3 que esté ADENTRO de esta carta
            const tituloH3 = carta.querySelector("h3");

            if (tituloH3) {
                const nombrePelicula = tituloH3.innerText.toLowerCase();
                
                // 4. Buscamos el contenedor de la columna para que no queden huecos
                const columna = carta.closest('[class*="col-"]');

                // 5. ¿El nombre coincide con lo que escribimos?
                if (nombrePelicula.includes(textoUsuario)) {
                    // Si coincide, mostramos la columna
                    if (columna) columna.style.setProperty("display", "block", "important");
                } else {
                    // Si no coincide, ocultamos la columna
                    if (columna) columna.style.setProperty("display", "none", "important");
                }
            }
        });
    }
});

// Salir



const video = document.getElementById('videoHero');
const soundBtn = document.getElementById('soundBtn');
const icono = soundBtn.querySelector('i');

soundBtn.addEventListener('click', () => {
    // IMPORTANTE: Esto le dice al navegador que el usuario dio permiso de audio
    if (video.muted) {
        video.muted = false; // Quitamos el silencio
        video.volume = 1.0;  // Subimos al máximo
        
        // Forzamos el play por si el navegador lo pausó al quitar el mute
        video.play().catch(error => {
            console.log("El navegador bloqueó el audio: ", error);
        });

        icono.classList.replace('fa-volume-mute', 'fa-volume-up');
    } else {
        video.muted = true;
        icono.classList.replace('fa-volume-up', 'fa-volume-mute');
    }
});