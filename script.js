let calculatorInput = document.querySelector("#calculatorInput");
const equals = document.querySelector("#equals");
const buttons = document.querySelectorAll("button");
let firstNum = "";
let secondNum = "";
let operator = "";
var sum = "";
let difference = "";
let product = "";
let quotient = "";
let getSecondNum = false;
const clickedEquals = false; 

buttons.forEach(btn=>{   
    btn.addEventListener("click", ()=>{
        if(btn.classList.contains("number")){
            if(getSecondNum){                                
                calculatorInput.value = (secondNum += btn.textContent);            
                console.log(secondNum);                
            }
            else{                
                calculatorInput.value = (firstNum += btn.textContent);
                console.log(firstNum);                        
            }    
        }
        else if(btn.classList.contains("operator")){            
            if(firstNum !== ""){
                calculatorInput.value = (operator += btn.textContent);
                getSecondNum = true; //to proceed entering second number                
            }
            else if(secondNum !== ""){
                firstNum = Number(calculatorInput.textContent); //stores new numbers                
            }                             
            secondNum = "";      
        }           
        operate(firstNum, operator, secondNum);      
    
        if(btn.classList.contains("equals")){
            if(operator === '+'){        
                calculatorInput.value = (sum = add(firstNum, secondNum));
                calculatorInput.textContent = calculatorInput.value;                   
                console.log(sum);
                secondNum = "";
                operator = "";                        
            }
            else if(operator === '-'){
                calculatorInput.value = (difference = subtract(firstNum, secondNum));
                calculatorInput.textContent = calculatorInput.value;
                operator = "";                                
            }
            else if(operator === '*'){
                calculatorInput.value = (product = multiply(firstNum, secondNum));
                calculatorInput.textContent = calculatorInput.value;
                operator = "";
            }
            else if(operator === '/'){
                calculatorInput.value = (quotient = divide(firstNum, secondNum));
                calculatorInput.textContent = calculatorInput.value;
                operator = "";
            }               
            firstNum = Number(calculatorInput.textContent);
            calculatorInput.textContent = "";      
        }        
    })    
})

const operate = (firstNum, operator, secondNum)=>{
    switch(operator){
        case '+':
            add(firstNum, secondNum);
            break;
        case '-':
            subtract(firstNum, secondNum);
            break;
        case '*':
            multiply(firstNum, secondNum);
            break;
        case '/':
            divide(firstNum, secondNum);
            break;
    }
}

const add = (firstNum, secondNum)=>{
    return Number(firstNum) + Number(secondNum);
}

const subtract = (firstNum, secondNum)=>{
    return Number(firstNum) - Number(secondNum);
}

const multiply = (firstNum, secondNum)=>{
    return Number(firstNum) * Number(secondNum);
}

const divide = (firstNum, secondNum)=>{
    return Number(firstNum) / Number(secondNum);
}



