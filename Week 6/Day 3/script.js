//- Quiz Application 

const que1 = "Square of 4";
const ans1 = 16;
const que2 = "What is the capital of India"
const ans2 = "New Delhi";
const que3 = "Which is the largest planet in out Solar System";
const ans3 = "jupiter";
const que4 = "Cuber of 5"
const ans4 = 125
const que5 = ""
const ans5 = "";


let initialSocre = 0;

//-Ques-1
let userAns1 = Number(prompt(que1));
if (userAns1 ===  ans1) {
    score++;
}

//-Ques-2
let userAns2 = Number(prompt(que2));
if (userAns2 === ans2) {
    score++
} 

//-Ques-3
let userAns3 = Number(prompt(que3));
    if (userAns3 === ans3) {
        score++
    }

//-Ques-4
let userAns4 = Number(prompt(que4))
    if (userAns4 === ans4){
        score++
    }

//-Ques-5
let userAns5 = Number(prompt(que5))
    if (userAns5 === ans5){
        score++
    }


const totalQues = 3;
const percentage = (score / totalQues) * 100;
 

