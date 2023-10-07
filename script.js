const btnNext = document.getElementById("btnNext");
let CorrectAnswer = 0;
const introForm = document.querySelector(".intro");
const form1 = document.querySelector(".quiz1");
const form2 = document.querySelector(".quiz2");
const form3 = document.querySelector(".quiz3");
const form4 = document.querySelector(".quiz4");
const form5 = document.querySelector(".quiz5");
const form6 = document.querySelector(".quiz6");
const form7 = document.querySelector(".quiz7");
const form8 = document.querySelector(".quiz8");
const form9 = document.querySelector(".quiz9");
const form10 = document.querySelector(".quiz10");
const form11 = document.querySelector(".quiz11");

const form12 = document.querySelector(".container");

const btnQuiz1 = document.querySelectorAll(".btn1");
const btnQuiz2 = document.querySelectorAll(".btn2");
const btnQuiz3 = document.querySelectorAll(".btn3");
const btnQuiz4 = document.querySelectorAll(".btn4");
const btnQuiz5 = document.querySelectorAll(".btn5");
const btnQuiz6 = document.querySelectorAll(".btn6");
const btnQuiz7 = document.querySelectorAll(".btn7");
const btnQuiz8 = document.querySelectorAll(".btn8");
const btnQuiz9 = document.querySelectorAll(".btn9");
const btnQuiz10 = document.querySelectorAll(".btn10");


// Result 
const questionOne = document.getElementById("questionOne");
const questionTwo = document.getElementById("questionTwo");
const questionThree = document.getElementById("questionThree");
const questionFour = document.getElementById("questionFour");
const questionFive = document.getElementById("questionFive");
const questionSix = document.getElementById("questionSix");
const questionSeven = document.getElementById("questionSeven");
const questionEight = document.getElementById("questionEight");
const questionNine = document.getElementById("questionNine");
const questionTen = document.getElementById("questionTen");

const result = document.getElementById("totalResult");
const result1 = document.getElementById("totalResult1");



btnNext.addEventListener("click", () => {
  form1.classList.remove("quiz1")
  introForm.style.display = "none"
})



btnQuiz1.forEach((ans1) => {
  ans1.addEventListener("click", () =>{
    if(ans1.innerHTML === "B"){
      CorrectAnswer++;
      questionOne.innerHTML = ans1.innerHTML
      form2.classList.remove("quiz2")
      form1.style.display = "none"
    }else{
      questionOne.innerHTML = ans1.innerHTML
      form2.classList.remove("quiz2")
      form1.style.display = "none"
    }
  })
})

btnQuiz2.forEach((ans2) => {
  ans2.addEventListener("click", () =>{
    if(ans2.innerHTML === "C"){
      CorrectAnswer++;
      questionTwo.innerHTML = ans2.innerHTML
      form3.classList.remove("quiz3")
      form2.style.display = "none"
    }else{
      questionTwo.innerHTML = ans2.innerHTML
      form3.classList.remove("quiz3")
      form2.style.display = "none"
    }
  })
})

btnQuiz3.forEach((ans3) => {
  ans3.addEventListener("click", () =>{
    if(ans3.innerHTML === "B"){
      CorrectAnswer++;
      questionThree.innerHTML = ans3.innerHTML
      form4.classList.remove("quiz4")
      form3.style.display = "none"
    }else{
      questionThree.innerHTML = ans3.innerHTML
      form4.classList.remove("quiz4")
      form3.style.display = "none"
    }
  })
})

btnQuiz4.forEach((ans4) => {
  ans4.addEventListener("click", () =>{
    if(ans4.innerHTML === "A"){
      CorrectAnswer++;
      questionFour.innerHTML = ans4.innerHTML
      form5.classList.remove("quiz5")
      form4.style.display = "none"
    }else{
      questionFour.innerHTML = ans4.innerHTML
      form5.classList.remove("quiz5")
      form4.style.display = "none"
    }
  })
})

btnQuiz5.forEach((ans5) => {
  ans5.addEventListener("click", () =>{
    if(ans5.innerHTML === "B"){
      CorrectAnswer++;
      questionFive.innerHTML = ans5.innerHTML
      form6.classList.remove("quiz6")
      form5.style.display = "none"
    }else{
      questionFive.innerHTML = ans5.innerHTML
      form6.classList.remove("quiz6")
      form5.style.display = "none"
    }
  })
})

btnQuiz6.forEach((ans6) => {
  ans6.addEventListener("click", () =>{
    if(ans6.innerHTML === "A"){
      CorrectAnswer++;
      questionSix.innerHTML = ans6.innerHTML
      form7.classList.remove("quiz7")
      form6.style.display = "none"
    }else{
      questionSix.innerHTML = ans6.innerHTML
      form7.classList.remove("quiz7")
      form6.style.display = "none"
    }
  })
})


btnQuiz7.forEach((ans7) => {
  ans7.addEventListener("click", () =>{
    if(ans7.innerHTML === "C"){
      CorrectAnswer++;
      questionSeven.innerHTML = ans7.innerHTML
      form8.classList.remove("quiz8")
      form7.style.display = "none"
    }else{
      questionSeven.innerHTML = ans7.innerHTML
      form8.classList.remove("quiz8")
      form7.style.display = "none"
    }
  })
})

btnQuiz8.forEach((ans8) => {
  ans8.addEventListener("click", () =>{
    if(ans8.innerHTML === "A"){
      CorrectAnswer++;
      questionEight.innerHTML = ans8.innerHTML
      form9.classList.remove("quiz9")
      form8.style.display = "none"
    }else{
      questionEight.innerHTML = ans8.innerHTML
      form9.classList.remove("quiz9")
      form8.style.display = "none"
    }
  })
})


btnQuiz9.forEach((ans9) => {
  ans9.addEventListener("click", () =>{
    if(ans9.innerHTML === "B"){
      CorrectAnswer++;
      questionNine.innerHTML = ans9.innerHTML
      form10.classList.remove("quiz10")
      form9.style.display = "none"
    }else{
      form10.classList.remove("quiz10")
      form9.style.display = "none"
      questionNine.innerHTML = ans9.innerHTML
    }
  })
})

const totalQuestions = 10;

btnQuiz10.forEach((ans10) => {
  ans10.addEventListener("click", () => {
    if (ans10.innerHTML === "B") {
      CorrectAnswer++;
      

      questionTen.innerHTML = ans10.innerHTML;
      form11.classList.remove("quiz11");
      form10.style.display = "none";
      form12.style.display = "none";

    } else {

      questionTen.innerHTML = ans10.innerHTML;
      form11.classList.remove("quiz11");
      form10.style.display = "none";
      form12.style.display = "none";
    }
    const percent = Math.round((CorrectAnswer / totalQuestions) * 100)
    result.innerHTML = CorrectAnswer;
    result1.innerHTML = percent;

  });
});














