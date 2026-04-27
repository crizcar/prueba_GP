// --- ARCHIVO: script.js ---
// Motor con persistencia de datos (localStorage)

// 1. Intentar recuperar datos guardados al cargar la página
// Si no hay nada, empezamos en 0
let indicePreguntaActual = parseInt(localStorage.getItem('indiceGuardado')) || 0;
let puntaje = parseInt(localStorage.getItem('puntajeGuardado')) || 0;

// Enlaces con el HTML
const preguntaTexto = document.getElementById("pregunta-texto");
const opcionesContainer = document.getElementById("opciones-container");
const btnSiguiente = document.getElementById("btn-siguiente");
const progresoTexto = document.getElementById("progreso-texto");
const barraProgreso = document.getElementById("barra-progreso");
const resultadoFinal = document.getElementById("resultado-final");
const mainSection = document.querySelector("main");

function cargarPregunta() {
    // Verificar si ya terminamos según el índice guardado
    if (indicePreguntaActual >= preguntas.length) {
        mostrarResultados();
        return;
    }

    const preguntaActual = preguntas[indicePreguntaActual];
    
    preguntaTexto.innerText = `${indicePreguntaActual + 1}. ${preguntaActual.pregunta}`;
    progresoTexto.innerText = `Pregunta ${indicePreguntaActual + 1} de ${preguntas.length}`;
    
    const porcentajeProgreso = (indicePreguntaActual / preguntas.length) * 100;
    barraProgreso.style.width = `${porcentajeProgreso}%`;
    
    opcionesContainer.innerHTML = "";
    btnSiguiente.style.display = "none";

    preguntaActual.opciones.forEach((opcion, index) => {
        const boton = document.createElement("button");
        boton.innerText = opcion;
        boton.classList.add("opcion");
        boton.onclick = () => evaluarRespuesta(index, boton);
        opcionesContainer.appendChild(boton);
    });
}

function evaluarRespuesta(indiceSeleccionado, botonClickeado) {
    const preguntaActual = preguntas[indicePreguntaActual];
    const botones = opcionesContainer.querySelectorAll(".opcion");

    botones.forEach(btn => btn.classList.add("deshabilitado"));

    if (indiceSeleccionado === preguntaActual.respuestaCorrecta) {
        botonClickeado.classList.add("correcta");
        puntaje++;
        // Guardar puntaje actualizado inmediatamente
        localStorage.setItem('puntajeGuardado', puntaje);
    } else {
        botonClickeado.classList.add("incorrecta");
        // Protección contra error de índice (el bug que tenías antes)
        if (botones[preguntaActual.respuestaCorrecta]) {
            botones[preguntaActual.respuestaCorrecta].classList.add("correcta");
        }
    }

    btnSiguiente.style.display = "block";
}

function siguientePregunta() {
    indicePreguntaActual++;
    
    // GUARDAR PROGRESO: Guardamos el nuevo índice en la memoria del navegador
    localStorage.setItem('indiceGuardado', indicePreguntaActual);
    
    if (indicePreguntaActual < preguntas.length) {
        cargarPregunta();
    } else {
        mostrarResultados();
    }
}

function mostrarResultados() {
    mainSection.style.display = "none";
    resultadoFinal.style.display = "block";
    barraProgreso.style.width = "100%";
    progresoTexto.innerText = "¡Certamen Completado!";

    const porcentaje = Math.round((puntaje / preguntas.length) * 100);
    
    resultadoFinal.innerHTML = `
        <h2>Resultados Finales</h2>
        <p style="font-size: 1.5em; margin: 20px 0;">Puntaje obtenido: <strong>${puntaje} / ${preguntas.length}</strong></p>
        <p style="margin-bottom: 25px;">Rendimiento total: <strong>${porcentaje}%</strong></p>
        <button id="btn-reiniciar" style="display:block; margin: 0 auto;" onclick="reiniciarTodo()">Empezar de cero</button>
    `;
}

// Función para borrar la memoria y volver a empezar
function reiniciarTodo() {
    localStorage.removeItem('indiceGuardado');
    localStorage.removeItem('puntajeGuardado');
    location.reload();
}

// Iniciar aplicación
cargarPregunta();
