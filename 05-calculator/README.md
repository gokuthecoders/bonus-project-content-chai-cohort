# Dual Calculator Project - Chai Cohort

<div align="center">
  <img src="https://img.shields.io/badge/Chai%20Cohort-BONUS-orange?style=for-the-badge" alt="Chai Cohort BONUS" />
  <img src="https://img.shields.io/badge/Project-5%20of%2010-blue?style=for-the-badge" alt="Project 5 of 10" />
  <img src="https://img.shields.io/badge/Skill-JavaScript%20DOM%20Manipulation-brightgreen?style=for-the-badge" alt="JavaScript DOM Manipulation" />
</div>

## 📝 Project Overview

This is the fifth project in the Chai Cohort BONUS series - a dual calculator application featuring both a simple and an advanced calculator. The project demonstrates JavaScript DOM manipulation, event handling, mathematical operations, and real-time computation with a focus on building practical web applications.

## ✨ Features

### Simple Calculator
- Clean, minimalist interface
- Two-number operation design
- Basic arithmetic operations (+, -, *, /)
- Input validation for numbers
- Immediate visual feedback
- Responsive design with hover effects

### Advanced UI Calculator
- Modern, sleek interface inspired by smartphone calculators
- Real-time calculation as you type
- Full numeric keypad with operation buttons
- Running calculation display
- History view of entered expressions
- Special operation notifications
- Backspace and all-clear functionality
- Overflow handling with horizontal scrolling
- Expression validation to prevent syntax errors

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- Event Listeners
- JavaScript eval() function for calculations
- CSS Transitions and Animations
- Responsive Design Principles
- Conditional Logic for Calculator Operation

## 🧠 Key Concepts Covered

- Real-time computation and display
- Input validation and error handling
- Event delegation for multiple button inputs
- Expression parsing and evaluation
- Dynamic UI updates based on user input
- CSS gradients and visual effects
- Responsive design considerations
- Scrolling behavior for overflow handling

## 🎨 How It Works

### Simple Calculator
The simple calculator implements basic arithmetic operations with a focus on clarity and ease of use:

```javascript
function calculate(operator){
    const num1 = parseInt(x.value);
    const num2 = parseInt(y.value);

    if(isNaN(num1) || isNaN(num2)){
        result.innerText = 'Please enter a valid number'
        return
    }

    switch(operator){
        case '+': {
            result.innerText = `Sum: ${num1 + num2}`
        }
        break
        case '-': {
            result.innerText = `Sub: ${num1 - num2}`
        }
        break
        // Other operations...
    }
}
```

This implementation:
1. Captures user input from two separate input fields
2. Validates that both inputs are valid numbers
3. Uses a switch statement to perform the appropriate calculation
4. Displays the result with appropriate labeling

### Advanced UI Calculator
The advanced calculator provides a more interactive experience with real-time calculation:

```javascript
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;
    const lastChar = inputDisplay.innerText.slice(-1);

    // Input validation
    if (inputDisplay.innerText === "" && ['+', '*', '/', '%', 'X', 'x'].includes(value)) return;
    if (inputDisplay.innerText === "" && isNaN(value)) return;
    if (isNaN(lastChar) && isNaN(value)) return;
    if(value == 'x' || value == 'X') return;

    // Update display
    inputDisplay.innerText += value;

    // Calculate and display result in real-time
    resultDisplay.innerText = `= ${eval(inputDisplay.innerText)}`
    
    // Handle scrolling for overflow
    inputDisplay.scrollLeft = inputDisplay.scrollWidth;
    inputDisplay.scrollTop = inputDisplay.scrollHeight;
  });
});
```

This implementation:
1. Uses event delegation to handle all button clicks
2. Validates input to prevent invalid expressions
3. Updates the display with the current expression
4. Calculates the result in real-time using `eval()`
5. Handles expression overflow with automatic scrolling
6. Provides special handling for operations like clear and backspace

## 🚀 Getting Started

1. Clone the repository
2. Open either `simple-calculator.html` or `advanced-calculator.html` in your browser
3. For the simple calculator:
   - Enter two numbers in the input fields
   - Click one of the operation buttons
   - View the result below
4. For the advanced calculator:
   - Click numbers and operations to build your expression
   - View the real-time result below your expression
   - Use AC to clear all, X to delete the last character

## 📁 Project Structure

```
calculator-project/
├── simple-calculator/
│   ├── index.html      # Simple calculator HTML structure
│   ├── style.css       # Styling for simple calculator UI
│   └── script.js       # JavaScript for simple calculator logic
├── advanced-calculator/
│   ├── index.html      # Advanced calculator HTML structure
│   ├── style.css       # Styling for advanced calculator UI
│   ├── script.js       # JavaScript for advanced calculator logic
│   └── frame.png       # Background image for advanced calculator
```

## 💡 Deep Dive: Expression Evaluation

### The eval() Function
In the advanced calculator, we use JavaScript's `eval()` function to evaluate mathematical expressions:

```javascript
resultDisplay.innerText = `= ${eval(inputDisplay.innerText)}`
```

While `eval()` is powerful, it requires careful implementation:

1. **Input Validation**: We implement multiple validation checks to ensure only valid expressions are processed
2. **Error Prevention**: We verify that operations aren't added at the beginning or consecutively
3. **Real-time Calculation**: We recalculate on each button press to provide immediate feedback

### Input Validation Strategy
Our validation strategy includes:

1. Preventing operations at the start of an expression
2. Preventing consecutive operations
3. Special handling for the backspace operation
4. Ensuring proper evaluation when the expression changes

This approach ensures that users can't enter invalid expressions while still providing a flexible calculator experience.

## 🔄 Possible Enhancements

- Add keyboard support for number and operation input
- Implement scientific calculator functions (sin, cos, tan, log, etc.)
- Add memory functions (M+, M-, MR, MC)
- Implement history tracking for previous calculations
- Add parentheses support for complex expressions
- Create a toggle to switch between simple and advanced modes
- Implement different themes or color schemes
- Add sound feedback for button presses
- Implement unit conversion capabilities

## 🎓 Learning Outcomes

Through this project, you'll gain practical experience with:
- DOM manipulation for dynamic UI updates
- Event handling for user interactions
- Mathematical operations in JavaScript
- Input validation and error prevention
- Real-time computation and display
- CSS styling for calculator interfaces
- Conditional logic for application flow
- Handling edge cases in user input

## 🤝 Contributing

Feel free to fork this project and add your own enhancements. Some ideas:
- Implement additional calculator functions
- Improve the UI with animations or transitions
- Add keyboard support for input
- Create additional themes or visual styles
- Implement more advanced mathematical operations

## 📜 License

This project is part of the Chai Cohort educational content.

---

<div align="center">
  <p>Made with ❤️ as part of Chai Cohort BONUS Projects</p>
  <p>Project 5 of 10 - Dual Calculator Project</p>
</div>