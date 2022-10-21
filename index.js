const buttons = document.querySelectorAll('button');
const input = document.querySelector('#visor')
let result;
let operacao;

buttons.forEach(button => button.addEventListener('click', ()=>{    
    switch(button.value){
        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '.':
            alteraNumVisor(button.value);
            break;
        case '+': case '-': case '*': case '/': 
            result = parseFloat(input.value);
            operador = button.value;
            zeraVisor();
            break;
        case 'c':
            zeraVisor();
            result = 0;
            operador = '';
        case '=':
            imprimeResultado();
            break;
    }
}))

function alteraNumVisor(num){
    if(input.value == '0' && num != '0'){
        input.value = num;
    }else if(input.value != '0')
        input.value += num;
}

function zeraVisor(){
    input.value = '0';
}

function imprimeResultado(){
    switch(operador){
        case '+':
            result += parseFloat(input.value);
            input.value = result;
            break;
        case '-':
            result -= parseFloat(input.value);
            input.value = result;
            break;
        case '*':
            result *= parseFloat(input.value);
            input.value = result;
            break;
        case '/':
            result /= parseFloat(input.value);
            input.value = result;
            break;
    }
}