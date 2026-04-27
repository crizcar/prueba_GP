const preguntas = [
    {
        pregunta: "¿Cuál de las siguientes expresiones, debiera ser el punto de partida de la gestión estratégica de RRHH?",
        opciones: [
            "Búsqueda de la Cultura", 
            "Definición de la Estrategia", 
            "Definición de la Visión", 
            "Respuesta al Propósito de la empresa", 
            "Declaración de la Misión" // Opción 4 - Basado en el modelo de planeación estratégica.
        ],
        respuestaCorrecta: 4 
    },
    {
        pregunta: "¿Cuándo se puede decir que una empresa tiene un Modelo de Gestión de RRHH?",
        opciones: [
            "Cuando cada uno de sus procesos se realiza con excelencia y con los mejores resultados.",
            "Cuando realiza los procesos de RRHH asociados al trabajador.",
            "Cuando define en un esquema conceptual, cuál será la estrategia de RRHH para estrategia del negocio.", // Opción 2 - "Sobre la base de algún concepto" (C1 2021).
            "Cuando tiene todo documentado en procedimientos que definen el que hacer",
            "Cuando define una estrategia para alcanzar los mejores resultados de las personas."
        ],
        respuestaCorrecta: 2
    },
    {
        pregunta: "Según lo revisado en Clases, cual aseveración NO es correcta.",
        opciones: [
            "Las funciones Operativas, son aquellas que no se pueden dejar de realizar",
            "Las funciones tácticas, están de apoyo a las operativas y pensadas en mediano plazo", // Opción 1 - Aseveración FALSA. Las tácticas traducen la estrategia, no apoyan a la operación.
            "Las funciones estratégicas, son las que hacen crecer al negocio.",
            "Las funciones transaccionales de RRHH, son las que están documentadas en un procedimiento"
        ],
        respuestaCorrecta: 3
    },
    {
        pregunta: "Si en la empresa existen problemas por que las decisiones que se toman en el área de RRHH dependen del criterio del funcionario o de su experiencia lo que causa problemas y decidimos comenzar a documentar todo para disponer de procedimientos y así mejorar la gestión, ¿esta sería una función?",
        opciones: [
            "Estratégica",
            "Transaccional",
            "Táctica",
            "Operativa"
        ],
        respuestaCorrecta: 3 
    },
    {
        pregunta: "En relación a los Puestos de trabajo, cual NO es un argumento para realizar un análisis de los puestos de trabajo de la empresa:",
        opciones: [
            "Cuando hay reducciones y reestructuraciones por crisis.",
            "Cuando hay fusiones de empresas y duplicación de puestos de trabajo.",
            "Cuando se crea desde cero una organización.",
            "Cuando hay cambios tecnológicos en la organización.",
            "Cuando se jubilan las personas y tenemos que llenar esos puestos."
        ],
        respuestaCorrecta: 4
    },
    {
        pregunta: "¿Cuál de estas No es un área de gestión de RRHH?",
        opciones: [
            "Eficiencia Operacional de los operadores",
            "Cultura Organizacional",
            "Responsabilidad Social Empresarial",
            "Comunicación Interna"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿A qué se refiere el término Gestión de la Diversidad?",
        opciones: [
            "Administrar diversos ambientes de trabajo",
            "Gestionar las diferentes tipos de personas",
            "Administrar los distintos estilos de liderazgo",
            "Gestionar diversos tipos de recursos"
        ],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Por qué la empresa debe gestionar la diversidad?",
        opciones: [
            "Porque es una buena manera de mejorar su imagen",
            "Porque podrá aumentar el valor de sus acciones",
            "Porque genera valor al negocio",
            "Porque es un requisito legal"
        ],
        respuestaCorrecta: 2
    },
    {
        pregunta: "Como empresa quiero definir pilares estratégicos para la gestión de la diversidad, cual NO seria uno de ellos:",
        opciones: [
            "Potenciar presencia de mujeres en puestos de liderazgo",
            "Desarrollar a proveedores de la ciudad donde está la empresa.",
            "Eliminar todo tipo de sesgo al momento de contratar en la empresa.",
            "Aumentar la representación de minorías en la organización.",
            "Foco en la Autenticidad, para que cada uno aporte valor desde su identidad"
        ],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Qué aspecto NO es una característica de la Ley de Protección al empleo de la mujer?",
        opciones: [
            "Pre y post natal para cuidar al hijo o hija",
            "Prohibición de hacer horas extra y turno de noche.",
            "Fuero maternal durante el embarazo y hasta 1 año después del postnatal",
            "Tiempo para el amamantamiento hasta los 3 años", // FALSA. En Chile es hasta los 2 años.
            "Licencia médica por enfermedad del hijo o hija"
        ],
        respuestaCorrecta: 3
    },
    {
        pregunta: "A su Juicio que mejor frase destaca la realidad de la Ley de Igualdad Salarial:",
        opciones: [
            "Ha tenido una lenta implementación pero muy efectiva.",
            "Ha tenido un impacto pero poco difundido.",
            "Ha sido de bajo impacto ya que presenta bajo nivel de denuncias.",
            "No se ha implementado aun, y se espera se haga este año.",
            "Muy efectiva porque ha logrado eliminar la brecha salarial."
        ],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cuál de las siguientes legislaciones, no está enfocada a potenciar los aspectos de diversidad o empleabilidad?",
        opciones: [
            "La ley de inmigración que permite y protege a la fuerza laboral migrante",
            "La ley Zamudio, que sanciona y castiga todo tipo de discriminación",
            "La ley de derechos humanos, que protege a todos los trabajadores", // No existe como ley laboral específica
            "Los Derechos fundamentales, consagrados en la constitución en protección a las personas.",
            "La ley de Inclusión labora, que obliga a contratar el 1% de personas discapacitadas"
        ],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cuál de los siguientes NO es un factor de entorno externo que afecte a la gestión de personas en una organización?",
        opciones: [
            "accionistas",
            "clientes",
            "misión", // Factor interno
            "competencia"
        ],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Qué término se refiere a empleados potenciales ubicados dentro de un área geográfica específica?",
        opciones: [
            "sindicato",
            "mercado laboral",
            "población en edad de trabajar"
        ],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál de las siguientes es una declaración FALSA sobre factores ambientales externos?",
        opciones: [
            "Los accionistas influyen en las decisiones gerenciales en una corporación.",
            "Los sindicatos negocian con la gerencia en nombre de los empleados individuales.",
            "La satisfacción del cliente juega un papel en las decisiones de recursos humanos.",
            "El mercado laboral rara vez cambia porque la población permanece relativamente estable." // Falso, el mercado cambia constantemente.
        ],
        respuestaCorrecta: 3
    },
    {
        pregunta: "¿Cuál ha sido el resultado del aumento de la esperanza de vida de la población?",
        opciones: [
            "tasa decreciente de empleados inmigrantes",
            "edad media decreciente de la fuerza laboral",
            "menos diversidad en la fuerza de trabajo",
            "edad promedio creciente de la fuerza laboral"
        ],
        respuestaCorrecta: 3
    },
    {
        pregunta: "Crear un ambiente de trabajo de apoyo en el que todas las personas puedan ser efectivas es una característica de:",
        opciones: [
            "gestión de la diversidad",
            "gestión del impacto adverso",
            "acción afirmativa",
            "directrices de trabajo socialmente responsable"
        ],
        respuestaCorrecta: 0 
    },
    {
        pregunta: "Con respecto a la ética, muchas empresas tienen un código de ética. ¿Cuál de los siguientes es MENOS probable que se incluya en los códigos?",
        opciones: [
            "evaluación del desempeño",
            "normas de conducta",
            "reglas sobre regalos aceptables",
            "contabilidad social"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "Los estándares mínimos de comportamiento ético en una empresa se basan en _________, mientras que los estándares más altos se establecen por _________.",
        opciones: [
            "compañeros de trabajo; declaraciones de misión",
            "políticas corporativas; recursos humanos",
            "cultura organizacional; leyes",
            "leyes; liderazgo corporativo"
        ],
        respuestaCorrecta: 3
    },
    {
        pregunta: "¿Cuál de las siguientes opciones sería MENOS probable que sea una fuente de orientación ética?",
        opciones: [
            "libros sagrados",
            "amigos",
            "pruebas",
            "leyes"
        ],
        respuestaCorrecta: 2
    },
    {
        pregunta: "Vision Technologies quiere ganar la confianza de empleados y clientes mediante el desarrollo de una fuerte cultura ética. ¿Cuál de los siguientes métodos sería la mejor manera para que el departamento de recursos humanos logre este objetivo?",
        opciones: [
            "hacer que los empleados firmen contratos de ética",
            "proporcionar capacitación ética a los empleados",
            "publicar el código de ética en la sala de descanso",
            "colocar el código de ética en la intranet de la empresa"
        ],
        respuestaCorrecta: 1
    },
    {
        pregunta: "Según el código de ética de Walmart, Edward, un empleado del departamento de ventas, no puede aceptar obsequios de proveedores porque tales acciones serían un...",
        opciones: [
            "incumplimiento regulatorio",
            "conflicto de intereses",
            "doble estándar"
        ],
        respuestaCorrecta: 1
    },
    {
        pregunta: "Angie, gerente de recursos humanos, ha recibido la tarea de fortalecer la cultura ética en su empresa. ¿Cuál de las siguientes actividades sería más beneficiosa?",
        opciones: [
            "publicar carteles del código de ética en los pasillos",
            "escribir un memorando sobre ética a los altos ejecutivos",
            "discutir la ética durante las evaluaciones de desempeño",
            "enviar el código de ética por correo electrónico a todos los empleados"
        ],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Qué método de reclutamiento externo está diseñado principalmente para estudiantes?",
        opciones: [
            "publicidad por radio",
            "agencias de empleo",
            "referencias de empleados",
            "pasantías o prácticas"
        ],
        respuestaCorrecta: 3
    },
    {
        pregunta: "Si una organización tiene la reputación de ser un buen lugar para trabajar, probablemente...",
        opciones: [
            "patrocina eventos locales",
            "participa en el reclutamiento universitario",
            "hace casas abiertas",
            "recibe postulaciones de trabajo no solicitadas"
        ],
        respuestaCorrecta: 3 
    },
    {
        pregunta: "Es muy probable que las empresas utilicen reclutamiento interno con mayor frecuencia debido a que la política...",
        opciones: [
            "disminuye la necesidad de desarrollo de los empleados",
            "mejora la motivación de los empleados",
            "facilita el proceso de repatriación",
            "cumple los requisitos legales"
        ],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál de los siguientes es el beneficio MENOS probable de usar referencias de empleados para identificar candidatos para el trabajo?",
        opciones: [
            "menor rotación de empleados",
            "mejor oportunidad de diversidad", // Las referencias tienden a traer perfiles idénticos a los actuales.
            "menores costos de reclutamiento",
            "mejor oportunidad de ajuste organizacional"
        ],
        respuestaCorrecta: 1
    },
    {
        pregunta: "Durante una entrevista de trabajo, se le pide a Sara que describa un momento en que fue responsable de motivar a otros. ¿Cuál de las siguientes opciones describe más probablemente este tipo de entrevista?",
        opciones: [
            "entrevista de panel",
            "entrevista grupal",
            "entrevista de estrés",
            "entrevista conductual" // Evaluaciones por incidentes/competencias previas.
        ],
        respuestaCorrecta: 3
    },
    {
        pregunta: "¿Qué término se refiere a las validaciones de aquellos que conocen al solicitante que proporcionan información adicional sobre la información proporcionada por el solicitante?",
        opciones: [
            "verificación de referencias",
            "revisión de antecedentes",
            "pruebas de polígrafo",
            "referencias de empleadores"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Qué término se refiere al número de candidatos calificados reclutados para un trabajo en particular?",
        opciones: [
            "grupo de trabajo",
            "reserva de candidatos",
            "mercado de solicitantes",
            "mercado laboral"
        ],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál de los siguientes puede servir como sustituto de ciertas herramientas de selección y como un método para determinar la idoneidad de un empleado?",
        opciones: [
            "verificación de referencia",
            "entrevista de estrés",
            "razón de selección",
            "período de prueba"
        ],
        respuestaCorrecta: 3
    },
    {
        pregunta: "Carlos, un gerente de recursos humanos, ha revisado las solicitudes y hojas de vida de cinco candidatos para un puesto de analista de datos en su empresa. ¿Cuál de los siguientes es el próximo paso más probable que dará Carlos en el proceso de selección?",
        opciones: [
            "verificar las referencias de los solicitantes",
            "tomar pruebas de selección a los candidatos", // Inmediato paso posterior a la criba curricular.
            "que los solicitantes tomen exámenes físicos",
            "entrevistar a solicitantes para informar especificaciones del contrato"
        ],
        respuestaCorrecta: 1
    },
    {
        pregunta: "Clara recibió 500 solicitudes para vacantes en el departamento de producción. Para determinar si un solicitante está calificado, probablemente comparará la información provista en cada solicitud con una...",
        opciones: [
            "evaluación física",
            "carta geográfica para revisar cercanía de los postulantes",
            "prueba de conocimiento del trabajo",
            "descripción de puesto"
        ],
        respuestaCorrecta: 3 
    },
    {
        pregunta: "¿Cuál de los siguientes se relaciona más estrechamente con las condiciones en las que se realiza una prueba de selección?",
        opciones: [
            "normas",
            "objetividad",
            "fiabilidad",
            "estandarización"
        ],
        respuestaCorrecta: 3
    }
];
