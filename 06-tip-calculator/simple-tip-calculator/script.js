const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const numPeopleInput = document.getElementById("numPeople");
const calculateButton = document.getElementById("calculateButton");
const totalTipDisplay = document.getElementById("totalTip");
const tipPerPersonDisplay = document.getElementById("tipPerPerson");

calculateButton.addEventListener("click", ()=>{
    calculateTp()
});

function calculateTp() {
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);
    const numPeople = parseInt(numPeopleInput.value);

    // Validation: Check if any input is invalid
    if (
        Number.isNaN(billAmount) ||
        Number.isNaN(tipPercentage) ||
        Number.isNaN(numPeople) ||
        billAmount <= 0 || 
        tipPercentage < 0 || 
        numPeople <= 0
    ) {
        alert("Please enter valid values for all fields.");
        return; // Stop execution if inputs are invalid
    }

    // Correct Calculation
    const totalTip = (billAmount * tipPercentage) / 100;
    const tipPerPerson = totalTip / numPeople;

    // Display Results
    totalTipDisplay.textContent = `Total Tip: $${totalTip.toFixed(2)}`;
    tipPerPersonDisplay.textContent = `Tip for each member: $${tipPerPerson.toFixed(2)}`;
}
