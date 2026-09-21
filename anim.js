// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var boton = document.querySelector('.boton');
// audio.autoplay = true
// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: 'Asi como hay distintas flores, hay distintas personas', time: 7 },
  { text: 'Cada una con su brillo, aroma, delizadeza y belleza particular', time: 14 },
  { text: 'Y aun asi de todas las que hay sos la mas especial', time: 21 },
  { text: 'De esta forma el mundo parece un jardin gigante', time: 28 },
  { text: 'Pero ninguna se compara con el brillo de tus ojos... ', time: 33 },
  { text: 'Ni con el encanto de tu sonrisa ', time: 38 },
  { text: 'Sos esa luz que resalta de manera natural, sin buscarlo', time: 42 },
  { text: 'luz brillante y calma casi angelical', time: 47 },
  { text: 'Es primavera, y el sol brilla, pero vos lo haces mucho mas', time: 49 },
  { text: "En tu forma de ser encuentro todo...", time: 56 },
  { text: "Todo lo que vale la pena admirar", time: 63 },
  { text: 'Esta cancion es la que resuena en mi mente cada vez que te pienso', time: 70 },
  { text: 'Es una pregunta que se responde solo cuando uno te ve', time: 77 },
  { text: 'Porque todos quieren estar cerca tuyo? No hay porque... no hay pregunta', time: 84 },
  { text: 'Es porque sos como sos, tan perfecta que asusta', time: 91 },
  // { text: 'En este jardin falta la flor mas bella. Vos', time:  },
  { text: "Feliz primavera preciosa flor del jardin del paraiso", time: 96 },    
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
boton.addEventListener('click',()=>{
  audio.muted = false
  audio.play()
  boton.classList.add('oculto')
  // console.log('clicks ')
  setInterval(updateLyrics, 5000);

  document.querySelector('.titulo').classList.remove('oculto')
  document.querySelector('.flowers').classList.remove('ocultas')
})

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
