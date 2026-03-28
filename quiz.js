const quizzes = {

    html: [
        { question: "HTML ka full form?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool", "None"], answer: "Hyper Text Markup Language" },
        { question: "<h1> kya hai?", options: ["Paragraph", "Heading", "Image", "Link"], answer: "Heading" },
        { question: "<a> tag ka use?", options: ["Image", "Link", "Table", "Text"], answer: "Link" },
        { question: "<img> kis liye?", options: ["Text", "Image", "Video", "Audio"], answer: "Image" },
        { question: "<br> kya karta hai?", options: ["Break line", "Bold", "Italic", "Link"], answer: "Break line" },
        { question: "HTML file extension?", options: [".html", ".js", ".css", ".java"], answer: ".html" },
        { question: "<ul> kya hai?", options: ["Ordered list", "Unordered list", "Table", "Form"], answer: "Unordered list" },
        { question: "<ol> kya hai?", options: ["Ordered list", "Unordered", "Heading", "None"], answer: "Ordered list" },
        { question: "<p> kya hai?", options: ["Paragraph", "Link", "Image", "None"], answer: "Paragraph" },
        { question: "Comment ka syntax?", options: ["//", "<!-- -->", "/* */", "#"], answer: "<!-- -->" }
    ],

    css: [
        { question: "CSS ka full form?", options: ["Cascading Style Sheets", "Color Style", "Creative Style", "None"], answer: "Cascading Style Sheets" },
        { question: "CSS ka use?", options: ["Structure", "Style", "Logic", "Database"], answer: "Style" },
        { question: "color change ka property?", options: ["font", "color", "bg", "style"], answer: "color" },
        { question: "background color?", options: ["bg-color", "background-color", "color-bg", "None"], answer: "background-color" },
        { question: "Flexbox ka property?", options: ["display:flex", "flex:1", "align", "None"], answer: "display:flex" },
        { question: "center align?", options: ["align-items:center", "text:center", "both", "None"], answer: "align-items:center" },
        { question: "margin kya hai?", options: ["spacing outside", "inside", "border", "None"], answer: "spacing outside" },
        { question: "padding kya hai?", options: ["outside", "inside", "border", "None"], answer: "inside" },
        { question: "position fixed?", options: ["scroll", "fixed", "relative", "None"], answer: "fixed" },
        { question: "z-index?", options: ["layer", "size", "color", "None"], answer: "layer" }
    ],

    js: [
        { question: "JS ka full form?", options: ["JavaScript", "JavaStyle", "JScript", "None"], answer: "JavaScript" },
        { question: "JS ka use?", options: ["Logic", "Style", "Structure", "None"], answer: "Logic" },
        { question: "variable kaise banate?", options: ["var", "let", "const", "all"], answer: "all" },
        { question: "console output?", options: ["print", "console.log", "echo", "None"], answer: "console.log" },
        { question: "function kya hai?", options: ["block of code", "variable", "loop", "None"], answer: "block of code" },
        { question: "array kya hai?", options: ["collection", "single", "loop", "None"], answer: "collection" },
        { question: "if statement?", options: ["condition", "loop", "array", "None"], answer: "condition" },
        { question: "loop ka use?", options: ["repeat", "condition", "array", "None"], answer: "repeat" },
        { question: "DOM kya hai?", options: ["Document Object Model", "Data Object", "None", "All"], answer: "Document Object Model" },
        { question: "event kya hai?", options: ["action", "variable", "loop", "None"], answer: "action" }
    ],

    c: [
        { question: "C language creator?", options: ["Dennis Ritchie", "James", "Bjarne", "None"], answer: "Dennis Ritchie" },
        { question: "C ka extension?", options: [".c", ".cpp", ".java", ".js"], answer: ".c" },
        { question: "printf ka use?", options: ["input", "output", "loop", "None"], answer: "output" },
        { question: "scanf ka use?", options: ["input", "output", "loop", "None"], answer: "input" },
        { question: "int kya hai?", options: ["datatype", "loop", "function", "None"], answer: "datatype" },
        { question: "main function?", options: ["start", "end", "loop", "None"], answer: "start" },
        { question: "loop example?", options: ["for", "if", "int", "None"], answer: "for" },
        { question: "array kya hai?", options: ["collection", "loop", "condition", "None"], answer: "collection" },
        { question: "return ka use?", options: ["value return", "loop", "input", "None"], answer: "value return" },
        { question: "header file?", options: ["#include", "import", "define", "None"], answer: "#include" }
    ],

    cpp: [
        { question: "C++ creator?", options: ["Bjarne Stroustrup", "Dennis", "James", "None"], answer: "Bjarne Stroustrup" },
        { question: "OOP concept?", options: ["class", "loop", "if", "None"], answer: "class" },
        { question: "inheritance kya hai?", options: ["reuse", "loop", "array", "None"], answer: "reuse" },
        { question: "polymorphism?", options: ["many forms", "loop", "array", "None"], answer: "many forms" },
        { question: "encapsulation?", options: ["data hide", "loop", "array", "None"], answer: "data hide" },
        { question: "constructor?", options: ["init object", "loop", "array", "None"], answer: "init object" },
        { question: "destructor?", options: ["destroy object", "loop", "array", "None"], answer: "destroy object" },
        { question: "cout?", options: ["output", "input", "loop", "None"], answer: "output" },
        { question: "cin?", options: ["input", "output", "loop", "None"], answer: "input" },
        { question: "class kya hai?", options: ["blueprint", "loop", "array", "None"], answer: "blueprint" }
    ],

    java: [
        { question: "Java creator?", options: ["James Gosling", "Dennis", "Bjarne", "None"], answer: "James Gosling" },
        { question: "Java platform?", options: ["JVM", "CPU", "RAM", "None"], answer: "JVM" },
        { question: "OOP language?", options: ["Java", "C", "HTML", "None"], answer: "Java" },
        { question: "class kya hai?", options: ["blueprint", "loop", "array", "None"], answer: "blueprint" },
        { question: "object kya hai?", options: ["instance", "loop", "array", "None"], answer: "instance" },
        { question: "main method?", options: ["entry point", "loop", "array", "None"], answer: "entry point" },
        { question: "inheritance?", options: ["reuse", "loop", "array", "None"], answer: "reuse" },
        { question: "polymorphism?", options: ["many forms", "loop", "array", "None"], answer: "many forms" },
        { question: "exception?", options: ["error", "loop", "array", "None"], answer: "error" },
        { question: "package?", options: ["group", "loop", "array", "None"], answer: "group" }
    ],

    coa: [
        { question: "COA ka full form?", options: ["Computer Organization and Architecture", "Computer Org", "None", "All"], answer: "Computer Organization and Architecture" },
        { question: "CPU kya hai?", options: ["processor", "memory", "input", "None"], answer: "processor" },
        { question: "ALU ka kaam?", options: ["calculation", "storage", "input", "None"], answer: "calculation" },
        { question: "Register kya hai?", options: ["small memory", "big memory", "input", "None"], answer: "small memory" },
        { question: "RAM kya hai?", options: ["temporary", "permanent", "input", "None"], answer: "temporary" },
        { question: "ROM kya hai?", options: ["permanent", "temporary", "input", "None"], answer: "permanent" },
        { question: "Cache kya hai?", options: ["fast memory", "slow", "input", "None"], answer: "fast memory" },
        { question: "Bus kya hai?", options: ["data path", "memory", "cpu", "None"], answer: "data path" },
        { question: "Clock speed?", options: ["speed", "memory", "input", "None"], answer: "speed" },
        { question: "Instruction cycle?", options: ["fetch-execute", "store", "input", "None"], answer: "fetch-execute" }

    ]

};

const params = new URLSearchParams(window.location.search);
const quizName = params.get("quiz");

const questions = quizzes[quizName];

if (!questions) {
    document.body.innerHTML = "<h2>Quiz not found ❌</h2>";
    throw new Error("Invalid quiz");
}

let current = 0;
let score = 0;
let userAnswers = new Array(questions.length);

function loadQuestion() {
    const q = questions[current];

    document.getElementById("question").innerText = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;

        btn.onclick = () => {
            userAnswers[current] = option;

            document.querySelectorAll("#options button").forEach(b => {
                b.style.backgroundColor = "#fff";
                b.style.color = "#2D2A43";
            });

            btn.style.backgroundColor = "#2D2A43";
            btn.style.color = "#fff";
        };

        optionsDiv.appendChild(btn);

    });
}

function nextQuestion() {
    if (current < questions.length - 1) {
        current++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (current < questions.length) {
        current--;
        loadQuestion();
    }
}

function submitQuiz() {
    score = 0;

    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].answer) {
            score++;
        }
    }

    let totalCorrect = Number(localStorage.getItem("totalCorrect")) || 0;
    totalCorrect += score;
    localStorage.setItem("totalCorrect", totalCorrect);

    let highestScore = Number(localStorage.getItem("highestScore")) || 0;

    if (score > highestScore) {
        highestScore = score;
        localStorage.setItem("highestScore", highestScore);
    }

    document.body.innerHTML = `
    <div style = "display:flex; flex-direction : column; gap:15px; ">
    <h1>Your Score: ${score} / ${questions.length}</h1>
    <h2>Total Correct: ${score}</h2>
    <h2>Highest Score: ${highestScore}</h2>
    <a href="index.html" style="border: 1px solid black; height:40px; padding: 10px; border-radius: 10px; width: 130px; font-weight: bold;">Go Home</a>
    </div>
  `;
}

loadQuestion();

