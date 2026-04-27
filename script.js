// --- ARCHIVO: script.js ---
// Motor principal del certamen. No requiere modificaciones futuras.

let indicePreguntaActual = 0;
let puntaje = 0;

// Enlaces con el HTML
const preguntaTexto = document.getElementById("pregunta-texto");
const opcionesContainer = document.getElementById("opciones-container");
const btnSiguiente = document.getElementById("btn-siguiente");
const progresoTexto = document.getElementById("progreso-texto");
const barraProgreso = document.getElementById("barra-progreso");
const resultadoFinal = document.getElementById("resultado-final");
const mainSection = document.querySelector("main");

function cargarPregunta() {
    const preguntaActual = preguntas[indicePreguntaActual];
    
    // 1. Actualizar textos de la cabecera
    preguntaTexto.innerText = `${indicePreguntaActual + 1}. ${preguntaActual.pregunta}`;
    progresoTexto.innerText = `Pregunta ${indicePreguntaActual + 1} de ${preguntas.length}`;
    
    // 2. Animar barra de progreso
    const porcentajeProgreso = (indicePreguntaActual / preguntas.length) * 100;
    barraProgreso.style.width = `${porcentajeProgreso}%`;
    
    // 3. Limpiar estado anterior
    opcionesContainer.innerHTML = "";
    btnSiguiente.style.display = "none";

    // 4. Generar botones de opciones dinámicamente
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

    // Congelar opciones para evitar clics múltiples
    botones.forEach(btn => btn.classList.add("deshabilitado"));

    // Lógica visual de evaluación
    if (indiceSeleccionado === preguntaActual.respuestaCorrecta) {
        botonClickeado.classList.add("correcta");
        puntaje++;
    } else {
        botonClickeado.classList.add("incorrecta");
        // Mostrar al usuario cuál era la verdadera respuesta correcta
        botones[preguntaActual.respuestaCorrecta].classList.add("correcta");
    }

    // Permitir avanzar
    btnSiguiente.style.display = "block";
}

function siguientePregunta() {
    indicePreguntaActual++;
    
    if (indicePreguntaActual < preguntas.length) {
        cargarPregunta();
    } else {
        mostrarResultados();
    }
}

function mostrarResultados() {
    // Ocultar sección de preguntas y mostrar resultados
    mainSection.style.display = "none";
    resultadoFinal.style.display = "block";
    
    // Llenar barra de progreso al 100%
    barraProgreso.style.width = "100%";
    progresoTexto.innerText = "¡Certamen Completado!";

    // Cálculo estadístico
    const porcentaje = Math.round((puntaje / preguntas.length) * 100);
    
    resultadoFinal.innerHTML = `
        <h2>Resultados Finales</h2>
        <p style="font-size: 1.5em; margin: 20px 0;">Puntaje obtenido: <strong>${puntaje} / ${preguntas.length}</strong></p>
        <p style="margin-bottom: 25px;">Rendimiento total: <strong>${porcentaje}%</strong></p>
        <button id="btn-siguiente" style="display:block" onclick="location.reload()">Volver a intentar</button>
    `;
}

// Iniciar aplicación
cargarPregunta();
