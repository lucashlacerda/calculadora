const buttons = document.querySelectorAll('button');
const input = document.querySelector('#visor')
let result;
let operador = '';

buttons.forEach(button => button.addEventListener('click', ()=>{    
    trataNumeros(button.value);
    console.log(result);
}))

document.body.addEventListener('keydown', (e)=>{
    trataNumeros(e.key);
    console.log(e.key)
})

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

function trataNumeros(tecla){
    switch(tecla){
        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '.':
            alteraNumVisor(tecla);
            break;
        case '+': case '-': case '*': case '/': 
           if(operador == ''){
            result = parseFloat(input.value);
            operador = tecla;
            zeraVisor();
           }
            break;
        case 'c': case 'Delete':
            zeraVisor();
            result = 0;
            operador = '';
        case '=': case 'Enter':
            imprimeResultado();
            break;
    }
}