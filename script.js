const calculatorInput = document.querySelector("#calculatorInput");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const equals = document.querySelector("#equals");
const dot = document.querySelector("#dot");
const buttons = document.querySelectorAll("button");
let firstNum = "", operator = "", secondNum = "", expression = "";
let getSecondNum = false, getErase = true;

buttons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        //Number buttons              
        if(btn.classList.contains("number")) {                                                                        
            if(getSecondNum){                                 
                secondNum += btn.textContent;                                
                calculatorInput.value = Number(secondNum);                                                                            
            }
            else if(!getSecondNum){                         
                if(firstNum === Number(calculatorInput.value)) firstNum = "";
                firstNum += btn.textContent;
                // calculatorInput.value += firstNum;
                if(firstNum !== "+" && firstNum !== "-" && firstNum !== "*" && firstNum !== "/") calculatorInput.value = Number(firstNum);
                else calculatorInput.value = "";                                                         
            }                                                               
        }           
        //Operators
        else if(btn.classList.contains("operator")){               
            if(secondNum !== ""){
                if(operator === '+') firstNum = calculatorInput.value = Number(firstNum) + Number(secondNum);
                else if(operator === '-') firstNum = calculatorInput.value = Number(firstNum) - Number(secondNum);
                else if(operator === '-') firstNum = calculatorInput.value = Number(firstNum) * Number(secondNum);
                else if(operator === '-') firstNum = calculatorInput.value = Number(firstNum) / Number(secondNum);    
                calculatorInput.value = firstNum;
                calculatorInput.value += operator;                
                secondNum = "";                                
                console.log(calculatorInput.value);
            }
            else if(firstNum !== ""){                
                operator = btn.textContent;
                getSecondNum = true;                
                calculatorInput.value += operator;            
            }                                       
            if(btn.textContent === "%"){
                calculatorInput.value = firstNum / 100;
                getSecondNum = false;
                firstNum = "";
            }                                                                                                                                
        }        
        operate(firstNum, operator, secondNum); //Passing arguments         
        console.log("first num: ", firstNum, "second num: ", secondNum);
    })    
})

clear.addEventListener("click", ()=>{
    firstNum = "", secondNum = "", calculatorInput.value = "", getSecondNum = false;                    
})

backspace.addEventListener("click", ()=>{    
    if(!getErase){
        calculatorInput.value = calculatorInput.value.slice(0, -1);
        firstNum = calculatorInput.value;
    }    
    if(calculatorInput.value !== "") firstNum = "", secondNum = "", operator = "", getSecondNum = "", calculatorInput.value = "";
})

equals.addEventListener("click", ()=>{
    if(operator === '+') calculatorInput.value = add(firstNum, secondNum);
    else if(operator === '-') calculatorInput.value = subtract(firstNum, secondNum);
    else if(operator === '*') calculatorInput.value = multiply(firstNum, secondNum);
    else if(operator === '/') calculatorInput.value = divide(firstNum, secondNum);
    firstNum = Number(calculatorInput.value);                                  
    secondNum = "", operator = "";                                            
    getSecondNum = false;
    getErase = false;
    if(getErase){
        calculatorInput.value = calculatorInput.value.slice(0, -1);
        firstNum = calculatorInput.value;
    }    
})

const operate = (firstNum, operator, secondNum)=>{
    equals.addEventListener("click", ()=>{
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
    })    
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