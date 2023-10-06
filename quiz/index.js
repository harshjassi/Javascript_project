const quesDB = [
    {
        ques: "Q1 : Kya manna bhen ka laawda hai ?",
        a: "Haa, Thoda sa too hai!! ",
        b: "Tum chutiye ho jo uske jokes suun rahe ho.",
        c: "Koi kuch nai bolega, Dushyant ka dost hai manna ",
        d: "Agar joke sune kar tum hass rahe ho too, tum maha chutiye ho ",
        correctAns: "opt3"
    },
    {
        ques: "Q2 : Kya dushyant ke gaand main danda daalna chaiye ?",
        a: "Mirchii laga ke dalna chahiye",
        b: "Mai to kehta hu jitne ho sab daal do",
        c: "Tel laga ke dalo",
        d: "Yeh bhi koi puchne ki baat hai ",
        correctAns: "opt3",
    },
    {
        ques: "Q3 :Kya Dudi bhai gaddari karte hai ?",
        a: " Gaddari to uske nas nas me hai ",
        b: " Gaddari ke charche to famous he uske ",
        c: "Yeh sab viji ke sangat ka asar hai ",
        d: "All are correct",
        correctAns: "opt4"
    },
    {
        ques: "Q4 : Kya batata chor-uchatti hai ?",
        a: "Usko to lab se ban karne wale hai",
        b: "Teachers mai uska khauf chalta hai",
        c: "Vijay malya ke baad usi ka number ata hai",
        d: "All are correct",
        correctAns: "opt1"
    },
]

const question = document.querySelector('#question');
const opt1 = document.querySelector('#option1');
const opt2 = document.querySelector('#option2');
const opt3 = document.querySelector('#option3');
const opt4 = document.querySelector('#option4');
const next = document.querySelector("#next");
const submit = document.querySelector("#submit");
const option = document.querySelectorAll(".answer");
const result = document.querySelector("#result");

const music = new Audio("soundEffect.mp3");

let questionCount = 0;
let scored = 0;
let quesCheckCount = 0;
submit.style.display = "none";


const loadQuestion = () => {
    question.innerHTML = quesDB[questionCount].ques;
    opt1.innerHTML = quesDB[questionCount].a;
    opt2.innerHTML = quesDB[questionCount].b;
    opt3.innerHTML = quesDB[questionCount].c;
    opt4.innerHTML = quesDB[questionCount].d;
    questionCount++;
}

loadQuestion();

//comparing answer of user
const compareAnswer = () => {
    let answer;
    option.forEach((currOption) => {
        if(currOption.checked){
            answer = currOption.id;
        }
    });
    return answer;
};

const deselectAll = () =>{
    option.forEach((curr) => curr.checked = false)
}

//next question display
next.addEventListener("click", () => {
    if (questionCount < Number(quesDB.length - 1)) {
        music.play();
        let answers = compareAnswer();
        if(answers === quesDB[quesCheckCount].correctAns){
            scored++;
        }
        quesCheckCount++;
        deselectAll();
        loadQuestion();

    }
   else if(questionCount = Number(quesDB.length - 1)) {
        music.play();
        let answers = compareAnswer();
        
        if(answers === quesDB[quesCheckCount].correctAns){
            scored++;
        }
        quesCheckCount++;
        
        deselectAll();
        loadQuestion();
        next.style.display = "none";
        submit.style.display = "block";
    }
});

submit.addEventListener("click", () => {
    music.play();
    let answers = compareAnswer();
    // console.log(answers)
    console.log(quesDB[quesCheckCount].correctAns)
        if(answers === quesDB[quesCheckCount].correctAns){
            scored++;
        }
        // console.log(scored);
    submit.style.display = "none"
    result.classList.remove("resultArea");
    result.innerHTML = `
        <h2> You scored : ${scored}/${quesDB.length} </h2>
        <button id = "playAgain" onclick = "location.reload()">Play Again </button>
    `
})