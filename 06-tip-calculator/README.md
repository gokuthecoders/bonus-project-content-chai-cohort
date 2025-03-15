# Tip Calculator - Chai Cohort

<div align="center">
  <img src="https://img.shields.io/badge/Chai%20Cohort-BONUS-orange?style=for-the-badge" alt="Chai Cohort BONUS" />
  <img src="https://img.shields.io/badge/Project-6%20of%2010-blue?style=for-the-badge" alt="Project 6 of 10" />
  <img src="https://img.shields.io/badge/Skill-Calculation%20Logic-brightgreen?style=for-the-badge" alt="Calculation Logic" />
</div>

## 📝 Project Overview

This is the sixth project in the Chai Cohort BONUS series - a practical Tip Calculator with two different implementations: a simple version and an advanced UI version. This project demonstrates input handling, calculation logic, real-time updates, and UI design principles.

## ✨ Features

### Common Features (Both Versions)
- Calculate tip based on bill amount and tip percentage
- Split the tip among multiple people
- Display total tip amount and tip per person
- Input validation for all fields
- Clear, easy-to-use interface

### Advanced UI Version Additional Features
- Pre-defined tip percentage buttons (5%, 10%, 15%, 25%, 50%)
- Custom tip percentage input option
- Modern, visually appealing design with color-coded elements
- Reset functionality
- Real-time visual feedback when selecting tip percentages

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- Event Listeners
- Form Handling
- Responsive Design (particularly in the advanced version)
- Google Fonts (IBM Plex Mono in advanced version)

## 🧠 Key Concepts Covered

- Input validation and error handling
- Numerical calculations and formatting
- Event-driven programming
- DOM manipulation for dynamic updates
- User interface design principles
- Responsive layout techniques
- State management for UI elements

## 💰 How It Works

### Calculation Logic

Both versions use the same core calculation logic:
1. Get the bill amount from the user
2. Get the tip percentage from the user (either through direct input or button selection)
3. Get the number of people sharing the bill
4. Calculate the total tip: `billAmount * (tipPercentage / 100)`
5. Calculate the tip per person: `totalTip / numberOfPeople`
6. Display the results, formatted to two decimal places

### Simple Version
```javascript
function calculateTp() {
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);
    const numPeople = parseInt(numPeopleInput.value);

    // Validation
    if (Number.isNaN(billAmount) || Number.isNaN(tipPercentage) || Number.isNaN(numPeople) || 
        billAmount <= 0 || tipPercentage < 0 || numPeople <= 0) {
        alert("Please enter valid values for all fields.");
        return;
    }

    // Calculation
    const totalTip = (billAmount * tipPercentage) / 100;
    const tipPerPerson = totalTip / numPeople;

    // Display Results
    totalTipDisplay.textContent = `Total Tip: $${totalTip.toFixed(2)}`;
    tipPerPersonDisplay.textContent = `Tip for each member: $${tipPerPerson.toFixed(2)}`;
}
```

### Advanced Version
The advanced version adds more complex UI interactions:
```javascript
// Handling tip button selection
tipButtons.forEach((value, index) => {
    value.addEventListener("click", () => {
        tipPercent = parseInt(value.innerText);
        value.style.backgroundColor = "#9FE8DF";
        currentButton = value;
        if(currentButton !== value) {
            value.style.backgroundColor = "";
        }
        tipInput.value = 0;
    });
});

// Handling custom tip input
tipInput.addEventListener('change', (event) => {
    tipPercent = parseInt(event.target.value);
});

// Calculate and display results
submitButton.addEventListener("click", () => {
    const billAmountValue = parseFloat(billAmountInput.value); 
    const numberOfPeople = parseInt(numberOfPeopleInput.value); 

    if(Number.isNaN(billAmountValue) || Number.isNaN(numberOfPeople) || Number.isNaN(tipPercent)) {
        alert("Please enter valid value for all fields");
    }

    const totalTip = (billAmountValue * (tipPercent / 100)).toFixed(2);
    const tipPerPerson = (totalTip / numberOfPeople).toFixed(2);

    totalAmountDisplay.innerText = `$ ${totalTip}`;
    eachAmountDisplay.innerText = `$ ${tipPerPerson}`;
});
```

## 🚀 Getting Started

### Simple Version
1. Open the `index.html` file in your browser
2. Enter the bill amount
3. Enter the tip percentage
4. Enter the number of people
5. Click "Calculate Tip" to see the results

### Advanced UI Version
1. Open the `index.html` file in your browser
2. Enter the bill amount
3. Select a tip percentage from the pre-defined buttons or enter a custom percentage
4. Enter the number of people
5. Click "Click" to calculate the tip
6. Use "Reset" to clear all inputs and start over

## 📁 Project Structure

### Simple Version
```
simple-tip-calculator/
├── index.html      # HTML structure with basic form inputs
├── style.css       # Basic styling for the calculator
└── script.js       # JavaScript for tip calculation logic
```

### Advanced UI Version
```
advanced-ui-tip-calculator/
├── index.html      # HTML with more complex UI elements
├── style.css       # Enhanced styling with color schemes and layouts
└── script.js       # JavaScript with additional UI interaction logic
```

## 💡 Implementation Highlights

### Simple Version
The simple version focuses on core functionality with minimal styling:
- Clean, straightforward interface
- Direct input for all values
- Single-button operation
- Clear display of results

### Advanced UI Version
The advanced version enhances the user experience with:
- Two-panel layout with input on the left and results on the right
- Pre-defined tip percentage buttons for quick selection
- Custom styling with a cohesive color scheme
- Separate display areas for total tip and per-person amounts
- Visual feedback when selecting tip percentages
- Reset functionality to start over

## 🔄 Possible Enhancements

- Add bill splitting functionality (not just tip splitting)
- Implement local storage to save recent calculations
- Add rounding options (up, down, or nearest dollar)
- Create a tip history feature
- Add currency selection
- Implement dark mode toggle
- Add accessibility features
- Create a mobile app version

## 🎓 Learning Outcomes

Through this project, you'll gain practical experience with:
- Form input handling and validation
- Mathematical operations in JavaScript
- Managing UI state based on user interactions
- Creating responsive and visually appealing interfaces
- Implementing multiple solutions to the same problem
- Progressive enhancement from basic to advanced functionality

## 🤝 Contributing

Feel free to fork this project and add your own enhancements. Some ideas:
- Add more calculation options
- Improve the UI design
- Add animations and transitions
- Implement additional features mentioned in the enhancements section

## 📜 License

This project is part of the Chai Cohort educational content.

---

<div align="center">
  <p>Made with ❤️ as part of Chai Cohort BONUS Projects</p>
  <p>Project 6 of 10 - Tip Calculator</p>
</div>