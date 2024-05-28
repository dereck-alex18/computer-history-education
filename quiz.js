const questionsAndAnswers = [
    {
        options: ["Transistor", "Fita magnetica", "Valvula", "Cartao perfurado", "Linguagem de programação"],
        answer: "Transistor",
        question: "Qual componente revolucionou a computação nos anos 50",
     },
     {
         options: ["C", "JavaScript", "Java", "C#", "C++"],
         answer: "C",
         question: "Qual a unica linguagem que nao tem orientação a objetos",
      },
    
      {
         options: ["Máquina de Anticítera", "Ábaco", "Ossos de Napier", "Máquina de Pascal", "Tear de Jacquard"],
         answer: "Ábaco",
         question: "Qual foi o primeiro instrumento utilizado para realizar cálculos simples?",
     },
     {
         options: ["Charles Babbage", "Ada Lovelace", "Blaise Pascal", "John Napier", "Joseph Marie Jacquard"],
         answer: "Charles Babbage",
         question: "Quem é considerado o idealizador da Máquina Analítica?",
     },
     {
         options: ["Circuitos Integrados", "Microprocessador", "Transistores", "ENIAC", "Z1"],
         answer: "Transistores",
         question: "Qual invenção de 1947 substituiu as volumosas válvulas nos computadores?",
     },
     {
         options: ["Herman Hollerith", "Konrad Zuse", "Joseph Marie Jacquard", "Ada Lovelace", "Charles Babbage"],
         answer: "Ada Lovelace",
         question: "Quem desenvolveu o primeiro algoritmo destinado ao processamento de uma máquina?",
     },
     {
         options: ["Transistores", "ENIAC", "Interface Gráfica", "Microprocessador", "Circuitos Integrados"],
         answer: "Microprocessador",
         question: "Qual tecnologia, criada pela Intel em 1971, permitiu a produção em massa de computadores pessoais?",
     },
     {
         options: ["Transistores", "Circuitos Integrados", "ENIAC", "Máquina Analítica", "Máquina de Pascal"],
         answer: "ENIAC",
         question: "O que marcou o início da era eletrônica na computação em 1946?",
     },
     {
         options: ["Charles Babbage", "Ada Lovelace", "Konrad Zuse", "Herman Hollerith", "Joseph Marie Jacquard"],
         answer: "Konrad Zuse",
         question: "Quem foi o criador do Z1, considerado o primeiro computador binário programável?",
     },
     {
         options: ["Internet", "Computação em Nuvem", "Microprocessador", "Circuitos Integrados", "Interface Gráfica do Usuário"],
         answer: "Interface Gráfica do Usuário",
         question: "Qual avanço tecnológico dos anos 1980 tornou os computadores mais acessíveis e intuitivos?",
     },
     {
         options: ["Inteligência Artificial", "Computação em Nuvem", "Computação Quântica", "Máquina de Anticítera", "Computação Vestível"],
         answer: "Máquina de Anticítera",
         question: "Qual das seguintes opções não faz parte dos avanços contemporâneos na computação?",
     },
     {
         options: ["Ábaco", "Tear de Jacquard", "Interface Cérebro-Máquina", "Máquina de Pascal", "Logaritmos"],
         answer: "Interface Cérebro-Máquina",
         question: "O que é esperado revolucionar nossa interação com a tecnologia no futuro?",
     }

    
];

let questionNumber = 0;
let score = 0;

const quizContainer = document.querySelector(".questionAndOptions");
const sendButton = document.querySelector("#send");
const answerVerification = document.querySelector(".answerVerification");
const answerExplanation = document.querySelector("#answerExplanation");
const nextButton = document.querySelector("#next");
const restartButton = document.querySelector("#restart");

const buildQuestionStructure = (question, options) => {
    let questionStructure = `
        <p class="question">${question}</p>
    `;
    let optionsStructure = ``;

    for (const [i, option] of options.entries()) {
        optionsStructure += `
            <div class="answer">
                <input type="radio" id=question${i} value="${option}" name="answer">
                <label for="question${i}">${option}</label>
            </div>
        `;
    }

    return questionStructure + optionsStructure;
};

const toggleButtonState = (isDisabled) => {
    sendButton.style.opacity = isDisabled ? 0.5 : 1;
    sendButton.disabled = isDisabled;
};

const buildQuiz = () => {
    toggleButtonState(false);
    answerVerification.style.display = "none";
    quizContainer.innerHTML = buildQuestionStructure(questionsAndAnswers[questionNumber].question, questionsAndAnswers[questionNumber].options);
};

const resetQuiz = () => {
    questionNumber = 0;
    score = 0;
    sendButton.style.display = "block";
    restartButton.style.display = "none";
    buildQuiz();
};

buildQuiz();

sendButton.addEventListener("click", () => {
    const currentAnswer = questionsAndAnswers[questionNumber].answer;
    const selectedOption = document.querySelector('input[name="answer"]:checked + label').textContent;

    toggleButtonState(true);

    if (currentAnswer === selectedOption) {
        score++;
        answerVerification.style.display = "block";
        answerExplanation.style.background = "#32cd32";
        answerExplanation.textContent = `That is correct. The answer is ${currentAnswer}.`;
    } else {
        answerVerification.style.display = "block";
        answerExplanation.style.background = "#ED4337";
        answerExplanation.textContent = `That is incorrect. The answer is ${currentAnswer}.`;
    }
});

nextButton.addEventListener("click", () => {
    if (questionNumber < questionsAndAnswers.length - 1) {
        questionNumber++;
        buildQuiz();
    } else {
        answerVerification.style.display = "none";
        sendButton.style.display = "none";
        restartButton.style.display = "block";
        quizContainer.innerHTML = `<p>Quiz finished! Your score was: ${score}/${questionsAndAnswers.length}</p>`;
    }
});

restartButton.addEventListener("click", resetQuiz);
