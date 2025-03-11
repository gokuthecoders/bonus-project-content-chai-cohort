# Countdown Timer Project - Chai Cohort

<div align="center">
  <img src="https://img.shields.io/badge/Chai%20Cohort-BONUS-orange?style=for-the-badge" alt="Chai Cohort BONUS" />
  <img src="https://img.shields.io/badge/Project-2%20of%2010-blue?style=for-the-badge" alt="Project 2 of 10" />
  <img src="https://img.shields.io/badge/Skill-Timer%20Functions-brightgreen?style=for-the-badge" alt="Timer Functions" />
</div>

## 📝 Project Overview

This is the second project in the Chai Cohort BONUS series - a functional countdown timer that allows users to input a specific time in seconds and watch it count down to zero. The project demonstrates essential JavaScript concepts including timing functions, event handling, and DOM manipulation.

## ✨ Features

- Set custom countdown duration in seconds
- Start the countdown timer
- Stop/pause the countdown at any point
- Resume the countdown from where it was paused
- Visual display of remaining time
- Time-up notification when countdown reaches zero

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- Event Listeners
- Timer Functions (setInterval, clearInterval)

## 🧠 Key Concepts Covered

- Working with JavaScript timing functions (setInterval, clearInterval)
- Event handling with addEventListener
- DOM manipulation for dynamic content updates
- Variable scope and state management
- Conditional logic for timer events
- Type conversion (String to Number)

## 📋 How It Works

The countdown timer works by:

1. Getting references to DOM elements (buttons, display, input field)
2. Creating a `countDown()` function that:
   - Sets up an interval that decrements the time every second
   - Updates the display with remaining time
   - Checks if time has run out and clears the interval
3. Setting up event listeners for the control buttons:
   - Start: Initiates a new countdown with the input value
   - Stop: Pauses the countdown by clearing the interval
   - Resume: Continues the countdown from where it was stopped

## 🚀 Getting Started

1. Clone the repository
2. Open the `index.html` file in your browser
3. Enter a time in seconds in the input field
4. Use the Start, Stop, and Resume buttons to control the countdown

## 📁 Project Structure

```
countdown-timer/
├── index.html      # HTML structure with buttons and display elements
├── style.css       # Styling for the timer interface
└── script.js       # JavaScript code for timer functionality
```

## 💡 Code Explanation

```javascript
// Get DOM elements
const startButton = document.getElementById('startButton')
const stopButton = document.getElementById('stopButton')
const resumeButton = document.getElementById('resumeButton')
const countdownDisplay = document.getElementById('countdownDisplay')
const timeInput = document.getElementById('timeInput')

// Variables to track timer state
let timeId;
let newAllotTime;

// Countdown function that updates remaining time every second
function countDown(time){
    timeId = setInterval(()=>{
        newAllotTime = time--;
        
        countdownDisplay.innerHTML = `<b> Time remaining ${newAllotTime} s<b>`;
        
        if(time < 0){
            clearInterval(timeId)
            countdownDisplay.innerHTML = `<b> Time up</b>`;
        }
        
    }, 1000)
}

// Event listener for Start button
startButton.addEventListener('click', ()=>{
    let time = Number(timeInput.value);
    countDown(time)
})

// Event listener for Stop button
stopButton.addEventListener('click', function(){
    clearInterval(timeId)
})

// Event listener for Resume button
resumeButton.addEventListener('click', ()=>{
    countDown(newAllotTime)
})
```

## 🔄 Possible Enhancements

- Add hours, minutes, seconds format (HH:MM:SS)
- Implement a reset button to clear the timer
- Add sound alerts when timer reaches zero
- Create visual progress indicators (progress bar)
- Add ability to save multiple preset timers
- Implement a count-up timer option
- Add validation for the input field
- Create a more intuitive UI with better visual feedback

## 🎓 Learning Outcomes

Through this project, you'll gain practical experience with:
- JavaScript's timing functions and their proper usage
- Managing state between different user actions
- Handling user interactions through event listeners
- Creating a functional interactive web application
- Understanding the concept of asynchronous code execution

## 🤝 Contributing

Feel free to fork this project and add your own enhancements. Some ideas:
- Improve the UI design
- Add animation effects for time changes
- Implement additional features like multiple timers
- Create themes or skins for the timer display

## 📜 License

This project is part of the Chai Cohort educational content.

---

<div align="center">
  <p>Made with ❤️ as part of Chai Cohort BONUS Projects</p>
  <p>Project 2 of 10 - Countdown Timer</p>
</div>