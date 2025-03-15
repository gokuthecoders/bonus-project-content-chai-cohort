const billAmountInput = document.getElementById("billAmount")
const tipInput = document.getElementById("inputTip")
const numberOfPeopleInput = document.getElementById("numberOfPeople")

const totalAmountDisplay = document.getElementById("totalAmount")
const eachAmountDisplay = document.getElementById("eachAmount")

const submitButton = document.getElementById("submit")
const resetButton = document.getElementById("resetButton")

const tipButtons = document.querySelectorAll(".customer-tip")


let tipPercent ;
let currentButton ;
tipButtons.forEach((value, index)=>{
    console.log(index, value);
    value.addEventListener("click", ()=>{
        tipPercent = parseInt(value.innerText)
        value.style.backgroundColor = "#9FE8DF"
        currentButton = value;
        if(currentButton !== value){
            value.style.backgroundColor = ""
        }
        tipInput.value = 0
    })
})

tipInput.addEventListener('change', (event)=>{
    tipPercent  = parseInt(event.target.value)
    console.log(tipPercent, typeof tipPercent);
})

submitButton.addEventListener("click", () => {
    const billAmountValue = parseFloat(billAmountInput.value); 
    const tipPercentValue = parseFloat(tipInput.value); 
    const numberOfPeople = parseInt(numberOfPeopleInput.value); 

    if(
        Number.isNaN(billAmountValue)||
        Number.isNaN(tipPercentValue)||
        Number.isNaN(numberOfPeople) || 
        Number.isNaN(tipPercent)
    ) {
        alert("Please enter valid value for all fields")
    }

    const totalTip = (billAmountValue * (tipPercent / 100)).toFixed(2);
    const tipPerPerson = (totalTip / numberOfPeople).toFixed(2);
    console.log({tipPerPerson, totalTip});

    totalAmountDisplay.innerText = `$ ${totalTip}`;
    eachAmountDisplay.innerText = `$ ${tipPerPerson}`;
    
});

resetButton.addEventListener("click", ()=>{
    window.location.reload()
})



















































