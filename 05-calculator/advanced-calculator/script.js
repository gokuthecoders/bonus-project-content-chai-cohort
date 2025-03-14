const inputDisplay = document.getElementById("input-display");
const buttons = document.querySelectorAll("button");
const resultDisplay = document.getElementById('result-display')

const clearInput = document.getElementById('clear-input')
const cleanBackInput = document.getElementById('backspace')

const remainderOperator = document.querySelector('.remainder-operator');
const notice = document.getElementById('remainer');

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;
    const lastChar = inputDisplay.innerText.slice(-1);

    if (inputDisplay.innerText === "" && ['+', '*', '/', '%', 'X', 'x'].includes(value)) return;
    
    if (inputDisplay.innerText === "" && isNaN(value)) return;

    if (isNaN(lastChar) && isNaN(value)) return;

    if(value == 'x' || value == 'X') return;

    inputDisplay.innerText += value;

    resultDisplay.innerText = `= ${eval(inputDisplay.innerText)}`
    inputDisplay.scrollLeft = inputDisplay.scrollWidth;
    inputDisplay.scrollTop = inputDisplay.scrollHeight;
  });
});


clearInput.addEventListener('click', ()=>{
    inputDisplay.innerText = ''
    resultDisplay.innerText = '='
})

cleanBackInput.addEventListener('click', ()=>{
    const newInputDisplay = inputDisplay.innerText.slice(0, -1)
    inputDisplay.innerText =  newInputDisplay
    if(eval(newInputDisplay) == undefined){
        resultDisplay.innerText = `= `
    }else{
        resultDisplay.innerText = `= ${eval(newInputDisplay)}`
    }
})

remainderOperator.addEventListener('click', ()=>{
    notice.innerText = '* % operator for get remainder b/w two operators'
    notice.style.backgroundColor = '#ebd048';
    setTimeout(()=>{
        notice.innerHTML = `&nbsp;`
        notice.style.backgroundColor = '';
    }, 1500)
})