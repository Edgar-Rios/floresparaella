// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
audio.autoplay = true
// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: 'Tus ojitos son las joyas mas lindas', time: 7 },
  { text: 'Sos la musica que suena en el aire cuando las flores comienzan a bailar', time: 14 },
  { text: 'Tus ojos brillan como sol en cielo despejado', time: 21 },
  { text: 'Si las flores son lindas, vos superas la naturaleza', time: 28 },
  { text: 'Hoy celebro tu esfuerzo como estudiante y la belleza de la primavera que llevas con vos', time: 35 },
  { text: 'Cada flor que veo me recuerda a vos', time: 42 },
  { text: 'Es primavera, y el sol brilla, pero vos lo haces mucho mas', time: 49 },
  { text: "Hoy abriste los ojos y el sol guardo su pincel", time: 56 },
  { text: "Es que pintas el paisaje mejor que el", time: 63 },
  { text: 'Como el sol con las flores, sos el sol que ilumina mis dias', time: 70 },
  { text: 'Tu amor es el brote que florecio en mi marchitado corazon', time: 77 },
  { text: 'Cada día que pasa mi amor por vos florece mas', time: 84 },
  { text: 'La distancia no puede marchitar el amor que siento por vos', time: 91 },
  // { text: 'En este jardin falta la flor mas bella. Vos', time:  },
  { text: 'Te pido perdon bebu. Como la primavera renace quiero que nuestro amor florezca de nuevo', time: 98 },
  { text: "ailoviu turra rolinga gotica😁.", time: 105 },
    
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    // var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    var opacity = 1
    console.log(opacity)

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    // lyrics.style.opacity = 0;
    lyrics.classList.add('ocultar')
    // lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 5000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 5000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 150000);
