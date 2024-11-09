let calc = document.createElement("div");
let h1 = document.createElement("h1");
let P = document.createElement("p");
h1.id = "title";
P.id = "description";

let dispScreen = document.createElement("input");
let buttonsContainer = document.createElement("div");
buttonsContainer.className = "buttons"
dispScreen.type = "text";
dispScreen.id = "result";

h1.innerHTML = "Calculator";
P.innerHTML = "Basic calculator designed to practice and improve the developing skill."

let data = ['C','<-','.','*','7','8','9','/','4','5','6','-','1','2','3','+','0','00','='];

//Calculator Overall div
calc.style.backgroundColor = "#8073731a";
calc.style.width = "500px";
calc.style.height = "500px";
calc.style.margin = "5% 25% 25%";
calc.style.border = "1px solid #8080803b";
calc.style.boxShadow = "1px 0px 3px 0px";


calc.appendChild(dispScreen);
calc.appendChild(buttonsContainer);


//appending the value to display screen
let appendToDisplay = (val) => {
    dispScreen.value =dispScreen.value+''+val;
}

//function to clear display
let clearDisplay = () => {
    dispScreen.value = "";
}

//function to calculate
let calculate = () =>{
    dispScreen.value = eval(dispScreen.value)
}


//handling click operation using mouse
let handleClick = (value)=>{
    if(value == "C")
        clearDisplay();
    else if(value == "<-"){
        currValue = dispScreen.value;
        let length = currValue.length;
        dispScreen.value = currValue.slice(0,[length-1]);
    }
    else if(value == "=")
        calculate()
    else
        appendToDisplay(value);
}

//create buttons
data.forEach(item =>{
    let button = document.createElement("button");
   button.textContent = item;
   buttonsContainer.appendChild(button);
   button.onclick = function(){handleClick(item)};

   switch(item){
        case '0':
        button.id = '0';
        console.log(item)
        break;
        case '1':
        button.id = '1';
        break;
        case '2':
        button.id = '2';
        break;
        case '3':
        button.id = '3';
        break;
        case '4':
        button.id = '4';
        break;
        case '5':
        button.id = '5';
        break;
        case '6':
        button.id = '6';
        break;
        case '7':
        button.id = '7';
        break;
        case '8':
        button.id = '8';
        break;
        case '9':
        button.id = '9';
        break;
        case '+':
        button.id = 'add';
        break;
        // console.log("addit")
        case '-':
        button.id = 'subtract';
        break;
        case '=':
        button.id = 'equal';
        break;
        case 'C':
        button.id = 'clear';
        break;

   }

   if(item=='=')
        button.id = "equal"
    if(item=='C')
        button.id = "clear"
})

window.addEventListener('keydown',(e)=>{
    let keyVal = e.key;
    let currValue = dispScreen.value;

    if('0123456789+-*/'.includes(keyVal))
        appendToDisplay(keyVal)
    else if((keyVal == "Shift" && keyVal == "="))
        appendToDisplay("+")
    else if((keyVal == "Shift" && keyVal == "8"))
        appendToDisplay("*")
    else if(keyVal == "Enter" || keyVal == "=")
        calculate()
    else if(keyVal == 'Backspace')
        dispScreen.value = currValue.slice(0,[length-1]);
    else if(keyVal == 'Escape')
        clearDisplay()
    else if((keyVal.charCodeAt() >= "65") && (keyVal.charCodeAt() <= "122") && (keyVal != "Shift"))
        alert("Numbers only allowed")
})




document.body.append(h1,P,calc);