const scenarios = [
    // Escenario 1
    {
        title: "Escenario 1",
        description: "La empresa 'TecnoSoft' está experimentando un aumento inesperado en la demanda de sus productos debido a un evento tecnológico internacional. Necesitan contratar personal adicional durante cuatro meses para cubrir este pico de trabajo. ¿Qué tipo de contrato deberían utilizar?",
        options: [
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato temporal por circunstancias de la producción", correct: true },
            { text: "Contrato formativo para la obtención de práctica profesional", correct: false },
            { text: "Contrato fijo-discontinuo", correct: false }
        ],
        feedback: "La opción correcta es el Contrato temporal por circunstancias de la producción, adecuado para incrementos ocasionales e imprevisibles de la producción.",
        hint: "Piensa en contratos para necesidades temporales e imprevisibles."
    },
    // Escenario 2
    {
        title: "Escenario 2",
        description: "Una empresa necesita cubrir un puesto debido a una baja por maternidad de una de sus empleadas, por un período de 16 semanas. ¿Qué tipo de contrato es el más adecuado?",
        options: [
            { text: "Contrato de interinidad (sustitución)", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato formativo en alternancia", correct: false },
            { text: "Contrato temporal por obra o servicio", correct: false }
        ],
        feedback: "La opción correcta es el Contrato de interinidad (sustitución), utilizado para sustituir a trabajadores con derecho a reserva de puesto de trabajo.",
        hint: "Considera contratos diseñados para sustituir a trabajadores ausentes."
    },
    // Escenario 3
    {
        title: "Escenario 3",
        description: "Una compañía quiere contratar a un joven recién graduado sin experiencia laboral para formarlo durante un año mientras trabaja. ¿Qué tipo de contrato deberían ofrecerle?",
        options: [
            { text: "Contrato formativo en alternancia", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato a tiempo parcial", correct: false }
        ],
        feedback: "La opción correcta es el Contrato formativo en alternancia, que combina formación y trabajo remunerado para adquirir experiencia profesional.",
        hint: "Busca un contrato que combine formación y empleo para jóvenes sin experiencia."
    },
    // Escenario 4
    {
        title: "Escenario 4",
        description: "La empresa 'Verano Sol' opera hoteles que solo abren durante la temporada de verano. Necesitan contratar personal que trabaje cada año durante estos meses. ¿Qué tipo de contrato es el más adecuado?",
        options: [
            { text: "Contrato fijo-discontinuo", correct: true },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato indefinido ordinario", correct: false },
            { text: "Contrato de obra o servicio", correct: false }
        ],
        feedback: "La opción correcta es el Contrato fijo-discontinuo, ideal para trabajos de naturaleza estacional o actividades que no se repiten en fechas ciertas.",
        hint: "Considera contratos para actividades estacionales que se repiten anualmente."
    },
    // Escenario 5
    {
        title: "Escenario 5",
        description: "Una empresa de construcción contrata a un albañil para un proyecto específico de edificación que durará aproximadamente un año. ¿Qué tipo de contrato deberían utilizar?",
        options: [
            { text: "Contrato temporal estructural", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato por obra o servicio determinado", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "El Contrato temporal estructural es adecuado para proyectos con duración determinada como una campaña específica.",
        hint: "Busca un contrato temporal para proyectos específicos."
    },
    // Escenario 6
    {
        title: "Escenario 6",
        description: "Una empresa necesita reducir la jornada laboral de un empleado por mutuo acuerdo. ¿Qué tipo de contrato o modificación contractual deben realizar?",
        options: [
            { text: "Contrato a tiempo parcial", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato formativo", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "La opción correcta es modificar el contrato a un Contrato a tiempo parcial, ajustando la jornada laboral según lo acordado.",
        hint: "Piensa en contratos que permiten trabajar menos horas al día."
    },
    // Escenario 7
    {
        title: "Escenario 7",
        description: "Una empresa contrata a un trabajador para realizar prácticas profesionales relacionadas con sus estudios durante seis meses. ¿Qué tipo de contrato deben utilizar?",
        options: [
            { text: "Contrato formativo para la obtención de práctica profesional", correct: true },
            { text: "Contrato formativo en alternancia", correct: false },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato indefinido", correct: false }
        ],
        feedback: "El Contrato formativo para la obtención de práctica profesional es adecuado para titulados que buscan adquirir experiencia.",
        hint: "Busca contratos destinados a titulados sin experiencia laboral."
    },
    // Escenario 8
    {
        title: "Escenario 8",
        description: "Una tienda minorista necesita personal adicional durante la campaña de Navidad debido al aumento de ventas. ¿Qué tipo de contrato es más apropiado?",
        options: [
            { text: "Contrato temporal por circunstancias previsibles de la producción", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato fijo-discontinuo", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "El Contrato temporal por circunstancias previsibles es ideal para atender incrementos periódicos y programados de actividad.",
        hint: "Considera contratos para incrementos previsibles en la demanda."
    },
    // Escenario 9
    {
        title: "Escenario 9",
        description: "Una empresa ha contratado a un trabajador con un contrato temporal que ha superado la duración máxima permitida. ¿Qué ocurre con este contrato?",
        options: [
            { text: "Se transforma en contrato indefinido automáticamente", correct: true },
            { text: "Debe renovarse el contrato temporal", correct: false },
            { text: "El trabajador debe ser despedido", correct: false },
            { text: "No ocurre nada, puede continuar temporalmente", correct: false }
        ],
        feedback: "La ley establece que tras cierto tiempo encadenando contratos temporales, el trabajador adquiere la condición de indefinido.",
        hint: "Considera las consecuencias de exceder la duración máxima de un contrato temporal."
    },
    // Escenario 10
    {
        title: "Escenario 10",
        description: "Una empresa desea contratar a un trabajador extranjero no comunitario que necesita permiso de trabajo. ¿Qué tipo de contrato deben utilizar?",
        options: [
            { text: "Contrato indefinido ordinario", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato formativo", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "Se requiere un permiso de trabajo y un Contrato indefinido o de alta dirección para expertos extranjeros.",
        hint: "Considera el tipo de contrato que ofrece mayor estabilidad y cumple con la normativa de extranjería."
    },
    // Escenario 11
    {
        title: "Escenario 11",
        description: "Un restaurante necesita contratar a camareros adicionales para cubrir los fines de semana debido al aumento de clientes en esos días. ¿Qué tipo de contrato es más adecuado?",
        options: [
            { text: "Contrato a tiempo parcial", correct: true },
            { text: "Contrato indefinido a jornada completa", correct: false },
            { text: "Contrato temporal por obra o servicio", correct: false },
            { text: "Contrato fijo-discontinuo", correct: false }
        ],
        feedback: "El Contrato a tiempo parcial permite ajustar la jornada a los días de mayor actividad.",
        hint: "Piensa en contratos que permiten trabajar solo ciertos días o horas."
    },
    // Escenario 12
    {
        title: "Escenario 12",
        description: "Una empresa de eventos contrata a personal para un festival que se realiza una vez al año en fechas determinadas. ¿Qué tipo de contrato deberían utilizar?",
        options: [
            { text: "Contrato fijo-discontinuo", correct: true },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato formativo", correct: false },
            { text: "Contrato indefinido", correct: false }
        ],
        feedback: "El Contrato fijo-discontinuo es ideal para actividades que se repiten en fechas ciertas cada año.",
        hint: "Considera contratos para trabajos que ocurren anualmente en fechas fijas."
    },
    // Escenario 13
    {
        title: "Escenario 13",
        description: "Una empresa desea fomentar el empleo estable y contrata a un trabajador sin límite de tiempo. ¿Qué tipo de contrato deben utilizar?",
        options: [
            { text: "Contrato indefinido ordinario", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato de interinidad", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "El Contrato indefinido ordinario promueve la estabilidad laboral.",
        hint: "Piensa en el contrato que ofrece mayor estabilidad al trabajador."
    },
    // Escenario 14
    {
        title: "Escenario 14",
        description: "Un centro educativo contrata a un profesor para impartir clases durante un curso académico específico. ¿Qué tipo de contrato es más apropiado?",
        options: [
            { text: "Contrato fijo-discontinuo", correct: true },
            { text: "Contrato temporal por obra o servicio", correct: false },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "El Contrato fijo-discontinuo es adecuado para actividades que se repiten cíclicamente en periodos determinados.",
        hint: "Considera contratos para actividades que se repiten cada año en periodos fijos."
    },
    // Escenario 15
    {
        title: "Escenario 15",
        description: "Una empresa necesita sustituir a un empleado que ha solicitado excedencia por cuidado de hijos durante un año. ¿Qué tipo de contrato deben realizar?",
        options: [
            { text: "Contrato de interinidad por sustitución", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "El Contrato de interinidad por sustitución es adecuado para cubrir temporalmente el puesto de un trabajador en excedencia.",
        hint: "Piensa en contratos para sustituir a empleados con excedencia y reserva de puesto."
    },
    // Escenario 16
    {
        title: "Escenario 16",
        description: "Una empresa agrícola requiere trabajadores para la cosecha que se realiza una vez al año sin fecha fija. ¿Qué contrato es más adecuado?",
        options: [
            { text: "Contrato fijo-discontinuo", correct: true },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato a tiempo parcial", correct: false },
            { text: "Contrato indefinido", correct: false }
        ],
        feedback: "El Contrato fijo-discontinuo es adecuado para actividades estacionales con fechas variables.",
        hint: "Considera contratos para actividades estacionales con fechas variables."
    },
    // Escenario 17
    {
        title: "Escenario 17",
        description: "Una empresa contrata a un trabajador para desarrollar un proyecto de investigación cuya duración exacta es incierta pero estimada en dos años. ¿Qué tipo de contrato deberían utilizar?",
        options: [
            { text: "Contrato temporal estructural", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato formativo", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "El Contrato temporal estructural es adecuado para proyectos con duración determinada.",
        hint: "Busca contratos temporales para proyectos específicos de duración estimada."
    },
    // Escenario 18
    {
        title: "Escenario 18",
        description: "Una empresa de tecnología quiere contratar a un estudiante para que trabaje medio tiempo mientras termina sus estudios universitarios. ¿Qué tipo de contrato es apropiado?",
        options: [
            { text: "Contrato formativo en alternancia", correct: true },
            { text: "Contrato a tiempo parcial", correct: false },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato indefinido", correct: false }
        ],
        feedback: "El Contrato formativo en alternancia permite combinar trabajo remunerado con formación académica.",
        hint: "Considera contratos que permiten combinar estudios y trabajo."
    },
    // Escenario 19
    {
        title: "Escenario 19",
        description: "Una empresa necesita cubrir un puesto vacante definitivamente, pero quiere establecer un periodo de prueba de seis meses. ¿Qué contrato deben utilizar?",
        options: [
            { text: "Contrato indefinido ordinario con periodo de prueba", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato de interinidad", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "El Contrato indefinido con periodo de prueba permite evaluar al trabajador durante un tiempo determinado.",
        hint: "Piensa en contratos estables que permiten un periodo de prueba."
    },
    // Escenario 20
    {
        title: "Escenario 20",
        description: "Una empresa ha detectado fraude en la contratación temporal, utilizando contratos temporales en puestos que deberían ser indefinidos. ¿Qué consecuencias legales puede enfrentar?",
        options: [
            { text: "Transformación de los contratos en indefinidos y posibles sanciones", correct: true },
            { text: "Despido de los trabajadores temporales sin consecuencias", correct: false },
            { text: "No ocurre nada mientras los contratos estén vigentes", correct: false },
            { text: "La empresa puede renovar los contratos temporales indefinidamente", correct: false }
        ],
        feedback: "El uso indebido de contratos temporales puede resultar en su conversión a indefinidos y sanciones para la empresa.",
        hint: "Considera las consecuencias legales del uso indebido de contratos temporales."
    },
    // Escenarios 21 al 40 (proporcionados en la respuesta anterior)
    // (Por razones de espacio, no se incluyen aquí los escenarios 21 al 40, pero deben ser incluidos en tu código)
];
    
// Variables globales
let currentScenario = 0;
let score = 0;
let timer;
let timeLeft = 30;
let mode = 'practica';

function startGame(selectedMode) {
    mode = selectedMode;
    document.getElementById('mode-selection').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    shuffle(scenarios);
    loadScenario(currentScenario);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadScenario(index) {
    const scenario = scenarios[index];
    document.getElementById('scenario-title').innerText = scenario.title;
    document.getElementById('scenario-description').innerText = scenario.description;

    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';

    scenario.options.forEach((option, i) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = option.text;
        button.onclick = () => selectOption(option.correct, scenario.feedback);
        li.appendChild(button);
        optionsList.appendChild(li);
    });

    document.getElementById('feedback').innerText = '';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('hint-button').disabled = false;
    document.getElementById('hint-button').style.display = mode === 'practica' ? 'inline-block' : 'none';

    if (mode === 'examen') {
        startTimer();
    } else {
        document.getElementById('timer').style.display = 'none';
    }
}

function startTimer() {
    timeLeft = 30;
    document.getElementById('timer').innerText = 'Tiempo restante: ' + timeLeft + 's';
    document.getElementById('timer').style.display = 'block';
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').innerText = 'Tiempo restante: ' + timeLeft + 's';
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('feedback').innerText = 'Tiempo agotado.';
            document.getElementById('next-button').style.display = 'block';
            disableOptions();
        }
    }, 1000);
}

function selectOption(isCorrect, feedback) {
    if (mode === 'examen') {
        clearInterval(timer);
    }

    if (isCorrect) {
        score++;
        document.getElementById('feedback').innerText = '¡Correcto! ' + feedback;
        document.getElementById('feedback').classList.add('correct-answer');
        document.getElementById('correct-sound').play();
    } else {
        document.getElementById('feedback').innerText = 'Incorrecto. ' + feedback;
        document.getElementById('feedback').classList.add('incorrect-answer');
        document.getElementById('incorrect-sound').play();
    }
    document.getElementById('score').innerText = 'Puntuación: ' + score;
    document.getElementById('next-button').style.display = 'block';

    disableOptions();
}

function disableOptions() {
    const buttons = document.querySelectorAll('#options-list button');
    buttons.forEach(button => button.disabled = true);
}

function nextScenario() {
    currentScenario++;
    if (currentScenario < scenarios.length) {
        document.getElementById('feedback').classList.remove('correct-answer', 'incorrect-answer');
        loadScenario(currentScenario);
    } else {
        document.getElementById('game-container').style.display = 'none';
        document.getElementById('end-game').style.display = 'block';
        document.getElementById('final-score').innerText = score + '/' + scenarios.length;
        showLeaderboard();
    }
}

function saveScore() {
    const name = document.getElementById('player-name').value;
    if (name) {
        const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        leaderboard.push({ name: name, score: score });
        leaderboard.sort((a, b) => b.score - a.score);
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        showLeaderboard();
        document.getElementById('player-name').value = '';
    }
}

function showLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const leaderboardElement = document.getElementById('leaderboard');
    leaderboardElement.innerHTML = '';
    leaderboard.forEach(entry => {
        const li = document.createElement('li');
        li.innerText = `${entry.name}: ${entry.score}`;
        leaderboardElement.appendChild(li);
    });
}

function showHint() {
    const scenario = scenarios[currentScenario];
    if (scenario.hint) {
        document.getElementById('feedback').innerText = 'Pista: ' + scenario.hint;
        document.getElementById('hint-button').disabled = true;
    }
}

