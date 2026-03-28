// let currentQuestion = 0;
// let totalQuestions = 10;

// function updateProgress() {
//   let percent = (currentQuestion / totalQuestions) * 100;
  
//   document.getElementById("progress").style.width = percent + "%";
//   document.getElementById("progressText").innerText =
//     currentQuestion + " / " + totalQuestions;
// }

// // call this when next question loads
// function nextQuestion() {
//   currentQuestion++;
//   updateProgress();
// }

const menubtn  = document.getElementById("menubtn");
const menuList = document.getElementById("menuList");
const menuBtnRes = document.getElementById("menubtn-res");
const head = document.getElementById("head");

menuBtnRes.addEventListener("click",()=>{
    menuList.style.display ="flex";
    head.style.justifyContent="end";
    menuBtnRes.style.display="none";
})

menubtn.addEventListener("click",()=>{
    menuList.style.display="none";
    menuBtnRes.style.display="block";
    head.style.justifyContent="space-between";

})


const totalCorrect = localStorage.getItem("totalCorrect") || 0;
const highestScore = Number(localStorage.getItem("highestScore")) || 0;

document.getElementById("correctAns").innerText = totalCorrect;
document.getElementById("highestScore").innerText = highestScore;

