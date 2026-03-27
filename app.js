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
const aftermenubtn = document.getElementById("menubtn-after");
const menuListAfter = document.getElementById("after-menu-hide");

menubtn.addEventListener("click",()=>{
    menuList.style.display ="none";
    menuListAfter.style.display="block";
})

aftermenubtn.addEventListener("click",()=>{
    menuListAfter.style.display="none";
    menuList.style.display="flex";

})
