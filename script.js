let calculatorInput = document.querySelector("#calculatorInput");
const numButton = document.querySelectorAll("#number");
const operator = document.querySelectorAll(".operators");

numButton.forEach((button)=>{
    button.addEventListener("click", ()=>{
        calculatorInput.value = button.value;
        calculatorInput.textContent = calculatorInput.value;
    })
})

const add = ()=>{

}

const subtract = ()=>{
    
}

const multiply = ()=>{
    
}

const divide = ()=>{
    
}

const operate = ()=>{

}

