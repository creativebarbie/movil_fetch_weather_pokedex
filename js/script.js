// =========================================
// ELEMENTOS
// =========================================

const homeScreen =
    document.getElementById("homeScreen");

const weatherScreen =
    document.getElementById("weatherScreen");

const pokemonScreen =
    document.getElementById("pokemonScreen");


const weatherButton =
    document.getElementById("weatherButton");

const pokemonButton =
    document.getElementById("pokemonButton");


const weatherBack =
    document.getElementById("weatherBack");

const pokemonBack =
    document.getElementById("pokemonBack");


// =========================================
// CAMBIAR DE PANTALLA
// =========================================

function mostrarPantalla(pantalla) {

    document
        .querySelectorAll(".app-screen")
        .forEach(function(screen) {

            screen.classList.remove("active");

        });


    homeScreen.classList.remove("active");


    pantalla.classList.add("active");

}


// =========================================
// VOLVER AL HOME
// =========================================

function volverHome() {

    document
        .querySelectorAll(".app-screen")
        .forEach(function(screen) {

            screen.classList.remove("active");

        });


    homeScreen.classList.add("active");

}


// =========================================
// WEATHER
// =========================================

weatherButton.addEventListener(
    "click",
    function() {

        mostrarPantalla(weatherScreen);

    }
);


weatherBack.addEventListener(
    "click",
    function() {

        volverHome();

    }
);


// =========================================
// POKÉDEX
// =========================================

pokemonButton.addEventListener(
    "click",
    function() {

        mostrarPantalla(pokemonScreen);

    }
);


pokemonBack.addEventListener(
    "click",
    function() {

        volverHome();

    }
);


// =========================================
// HORA
// =========================================

function actualizarHora() {

    const ahora = new Date();


    const horas =
        String(ahora.getHours())
        .padStart(2, "0");


    const minutos =
        String(ahora.getMinutes())
        .padStart(2, "0");


    document.getElementById("hora").textContent =
        `${horas}:${minutos}`;

}


// =========================================
// FECHA
// =========================================

function actualizarFecha() {

    const ahora = new Date();


    const opciones = {

        weekday: "long",

        day: "numeric",

        month: "long"

    };


    let fecha =
        ahora.toLocaleDateString(
            "es-ES",
            opciones
        );


    fecha =
        fecha.charAt(0).toUpperCase()
        + fecha.slice(1);


    document.getElementById("fecha").textContent =
        fecha;

}


// =========================================
// INICIALIZAR FECHA Y HORA
// =========================================

actualizarHora();

actualizarFecha();


// Actualizar la hora cada minuto

setInterval(
    actualizarHora,
    60000
);


// =========================================
// GLITTER
// =========================================

const sparkles =
    document.querySelector(".sparkles");


function crearSparkle() {

    const sparkle =
        document.createElement("span");


    sparkle.classList.add("sparkle");


    sparkle.style.left =
        Math.random() * 100 + "%";


    sparkle.style.top =
        Math.random() * 100 + "%";


    const size =
        Math.random() * 4 + 2;


    sparkle.style.width =
        size + "px";


    sparkle.style.height =
        size + "px";


    sparkle.style.animationDuration =
        Math.random() * 3 + 3 + "s";


    sparkle.style.animationDelay =
        Math.random() * 3 + "s";


    sparkles.appendChild(sparkle);


    setTimeout(
        function() {

            sparkle.remove();

        },
        7000
    );

}


// Crear glitter continuamente

for (let i = 0; i < 35; i++) {

    crearSparkle();

}


setInterval(
    crearSparkle,
    500
);

// =========================================
// FONDOS CAMBIANTES DEL TELÉFONO
// =========================================

const screen =
    document.querySelector(".screen");


const fondos = [

    "theme-pink",

    "theme-cotton",

    "theme-lavender",

    "theme-blue",

    "theme-sunset"

];


let fondoActual = 0;


// Fondo inicial

screen.classList.add(
    fondos[fondoActual]
);


// Cambiar fondo cada 10 segundos

setInterval(function() {

    screen.classList.remove(
        fondos[fondoActual]
    );


    fondoActual =
        (fondoActual + 1)
        % fondos.length;


    screen.classList.add(
        fondos[fondoActual]
    );

}, 10000);

// =========================================================
// 🌈 RAINBOW WEATHER
// =========================================================

function obtenerTiempo() {

    // Tu API KEY actual del proyecto Weather
    const API_KEY = "91e502c2e64b0b1e5b936670146cf8e1";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&lang=es&appid=${API_KEY}`;

    fetch(url)

        .then(function(response) {

            if (!response.ok) {
                throw new Error("No se pudo obtener el tiempo");
            }

            return response.json();
        })

        .then(function(data) {

            // CIUDAD
            document.getElementById("ciudad").textContent =
                data.name;


            // TEMPERATURA
            document.getElementById("temperatura").textContent =
                Math.round(data.main.temp) + "°";


            // DESCRIPCIÓN
            document.getElementById("descripcion").textContent =
                data.weather[0].description;


            // HUMEDAD
            document.getElementById("humedad").textContent =
                "Humedad: " + data.main.humidity + "%";


            // TIPO DE CLIMA
            const clima = data.weather[0].main;


            // ICONO
            let iconoTiempo;


            if (clima === "Clear") {

                iconoTiempo = "☀️";

            } else if (clima === "Clouds") {

                iconoTiempo = "☁️";

            } else if (clima === "Rain") {

                iconoTiempo = "🌧️";

            } else if (clima === "Thunderstorm") {

                iconoTiempo = "⛈️";

            } else if (clima === "Snow") {

                iconoTiempo = "❄️";

            } else if (clima === "Drizzle") {

                iconoTiempo = "🌦️";

            } else if (
                clima === "Mist" ||
                clima === "Fog" ||
                clima === "Haze"
            ) {

                iconoTiempo = "🌫️";

            } else {

                iconoTiempo = "🌤️";
            }


            document.getElementById("iconoTiempo").textContent =
                iconoTiempo;


            // SALUDO
            const ahora = new Date();
            const hora = ahora.getHours();

            let saludo;

            if (hora >= 6 && hora < 12) {

                saludo = "Buenos días";

            } else if (hora >= 12 && hora < 20) {

                saludo = "Buenas tardes";

            } else {

                saludo = "Buenas noches";
            }


            document.getElementById("saludo").textContent =
                `${saludo}, Barbie ✨`;


            // FRASE
            let frase;


            if (clima === "Clear") {

                frase =
                    "Hoy el sol salió para recordarte que también puedes brillar. ✨";

            } else if (clima === "Clouds") {

                frase =
                    "Aunque el cielo esté gris, tú puedes ponerle color al día. 🌈";

            } else if (clima === "Rain") {

                frase =
                    "Los días de lluvia también hacen crecer cosas bonitas. 🌱";

            } else if (clima === "Thunderstorm") {

                frase =
                    "Después de la tormenta siempre vuelve la calma. 💜";

            } else if (clima === "Snow") {

                frase =
                    "Ve despacio, disfruta el momento y deja que el día te sorprenda. ❄️";

            } else if (clima === "Drizzle") {

                frase =
                    "Incluso los días grises tienen algo bonito que ofrecer. 🌧️";

            } else {

                frase =
                    "Hoy es un buen día para seguir avanzando. ✨";
            }


            document.getElementById("frase").textContent =
                frase;

        })

        .catch(function(error) {

            console.error(
                "Error al obtener el tiempo:",
                error
            );

        });
}


// =========================================================
// CARGAR WEATHER CUANDO SE ABRE
// =========================================================

weatherButton.addEventListener("click", function() {

    mostrarPantalla(weatherScreen);

    obtenerTiempo();

});


// =========================================================
// 🔴 POKÉDEX — POKEAPI
// =========================================================

function obtenerPokemonAleatorio() {

    const numeroPokemon =
        Math.floor(Math.random() * 1025) + 1;


    const url =
        `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`;


    fetch(url)

        .then(function(response) {

            if (!response.ok) {

                throw new Error(
                    "No se pudo obtener el Pokémon"
                );

            }

            return response.json();

        })

        .then(function(data) {

            console.log("Pokémon recibido:", data);


            // Imagen frontal
            document.getElementById("pokemonImage").src =
                data.sprites.front_default;


            // Texto alternativo
            document.getElementById("pokemonImage").alt =
                data.name;


            // Nombre
            document.getElementById("pokemonName").textContent =
                data.name;


            // Número
            document.getElementById("pokemonNumber").textContent =
                "#" + String(data.id).padStart(3, "0");

        })

        .catch(function(error) {

            console.error(
                "Error al obtener Pokémon:",
                error
            );

        });
}

// =========================================================
// ABRIR POKÉDEX
// =========================================================

pokemonButton.addEventListener("click", function() {

    mostrarPantalla(pokemonScreen);

    obtenerPokemonAleatorio();

});

document
    .getElementById("randomPokemonButton")
    .addEventListener("click", function() {

        obtenerPokemonAleatorio();

    });

    pokemonBack.addEventListener("click", function() {
    volverHome();
});