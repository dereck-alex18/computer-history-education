const questionsAndAnswers = 
    [
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
            options: ["Transistor", "Fita magnetica", "Valvula", "Cartao perfurado", "Linguagem de programação"],
            answer: "Transistor",
            question: "Qual componente revolucionou a computação nos anos 50",
         },

    ];
let questionNumber = 0;
let score = 0;

const quizContainer = document.querySelector(".questionAndOptions");
const sendButton = document.querySelector("#send");
const answerVerification = document.querySelector(".answerVerification");
const answerExplanation = document.querySelector("#answerExplanation");
const nextButton = document.querySelector("#next");

const buildQuestionStructure = (question, options) => {
    let questionStructure = 
    `
    <p class="question">${question}</p>
    `;
    let optionsStructure = ``; 

    for(const option of options){
        optionsStructure +=
        `
        <div class="answers">
            <input type="radio" value=${option} name="answer">
            <label for="question1">${option}</label>
        </div>
        `
    };
    
    const quizStructure = questionStructure + optionsStructure;
   
    return quizStructure;
};


const buildQuiz = () => {
    answerVerification.style.display = "none"
    quizContainer.innerHTML = buildQuestionStructure(questionsAndAnswers[questionNumber].question, questionsAndAnswers[questionNumber].options)
};

buildQuiz();


sendButton.addEventListener("click", () => {
    const currentAnswer = questionsAndAnswers[questionNumber].answer;
    const selectedOption = document.querySelector('input[name="answer"]:checked + label').textContent; 
    
    if(currentAnswer === selectedOption){
        score++;
        answerVerification.style.display = "block"
        answerExplanation.textContent = `That is correct. The answer is ${currentAnswer}`
    } else{
        answerVerification.style.display = "block"
        answerExplanation.textContent = `That is incorrect. The answer is ${currentAnswer}`
    }
    
    
});

nextButton.addEventListener("click", () => {
    if(questionNumber < questionsAndAnswers.length - 1){
        questionNumber++;
        buildQuiz();
    } else{
        answerVerification.style.display = "none"
        quizContainer.innerHTML = `<p>Quiz finished! Your score was: ${score}/${questionsAndAnswers.length}</p>`
    }
});


