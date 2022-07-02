const formData = document.querySelector(".quiz-form");
const btn = document.querySelector("#btn-submit");
const output = document.querySelector(".outputRes");

const ans = ["Database Management System" , "All of the above" , "Decentralized" , "Google" , "DML (Data Manipulation Langauge)"];
let checking = () => {
    let index = 0;
    let score = 0;
//FormData return a object of {Key => Value pair}
// Store in it formreults variable

    const formresults = new FormData(formData);

//formresults.values() : access value attribute in formresults

    for(let value of formresults.values()){
        if(value === ans[index]){
            score+=1;
        }
        index+=1;
    }
    output.innerText = `Your Score is : ${score}`;
};

btn.addEventListener("click",checking,false);