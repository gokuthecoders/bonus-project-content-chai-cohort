# Digital Clock Project - Chai Cohort

<div align="center">
  <img src="https://img.shields.io/badge/Chai%20Cohort-BONUS-orange?style=for-the-badge" alt="Chai Cohort BONUS" />
  <img src="https://img.shields.io/badge/Project-1%20of%2010-blue?style=for-the-badge" alt="Project 1 of 10" />
  <img src="https://img.shields.io/badge/Skill-Date%20%26%20Time-brightgreen?style=for-the-badge" alt="Date & Time" />
</div>

## 📝 Project Overview

This is the first project in the Chai Cohort BONUS series - a simple yet functional digital clock that displays both the current time and date. This project demonstrates core JavaScript functionality related to working with Date objects, DOM manipulation, and timing functions.

## ✨ Features

- Real-time clock display with hours, minutes, and seconds
- AM/PM indicator
- Current date display with full weekday, month, day, and year
- Automatic updates every second
- Clean, readable time formatting with leading zeros

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Date Object API
- DOM Manipulation
- setInterval for timing functions

## 🧠 Key Concepts Covered

- Working with the JavaScript Date object
- String formatting techniques (padding with leading zeros)
- Using setInterval for recurring function execution
- DOM manipulation to update content dynamically
- Date localization with toLocaleDateString()
- Time formatting best practices

## 📋 How It Works

The clock works by:

1. Getting references to the DOM elements for time and date display
2. Creating a `clock()` function that:
   - Creates a new Date object to get the current time
   - Formats hours, minutes, and seconds with leading zeros
   - Determines AM/PM based on the hour
   - Updates the time display element
   - Updates the date display element with formatted date
3. Setting up an interval to call the clock function every second
4. Calling the clock function immediately to display the time right away

## 🚀 Getting Started

1. Clone the repository
2. Open the `index.html` file in your browser
3. The clock will start running automatically

## 📁 Project Structure

```
digital-clock/
├── index.html      # HTML structure with time and date elements
├── style.css       # Styling for the clock display
└── script.js       # JavaScript code for clock functionality
```

## 💡 Code Explanation

```javascript
// Get DOM elements
const time = document.getElementById('time')
const date = document.getElementById('date')

// Date formatting options
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

// Clock function that updates time and date
function clock(){
      const newDate = new Date();
      const hours = newDate.getHours().toString().padStart(2,0);
      const minutes = newDate.getMinutes().toString().padStart(2,0);
      const seconds = newDate.getSeconds().toString().padStart(2,0);
      const ampm = (hours>12)?'PM':'AM'
      
      time.innerText = `${hours}:${minutes}:${seconds} ${ampm}`
      date.innerText = newDate.toLocaleDateString(undefined, options)
}

// Update clock every second
setInterval(clock,1000)

// Initial call to display clock immediately
clock()
```

## 🔄 Possible Enhancements

- Add 12-hour format option
- Include timezone information
- Add styling for a more visually appealing clock
- Implement dark/light mode toggle
- Add stopwatch functionality

## 🎓 Learning Outcomes

Through this project, you'll gain practical experience with:
- JavaScript's Date object and its methods
- Working with timing functions
- DOM manipulation
- String formatting techniques
- Building a simple but functional web application

## 🤝 Contributing

Feel free to fork this project and add your own enhancements. Some ideas:
- Improve the UI design
- Add animation effects for time changes
- Implement additional features like timezone selection
- Create a theme selector

## 📜 License

This project is part of the Chai Cohort educational content.

---

<div align="center">
  <p>Made with ❤️ as part of Chai Cohort BONUS Projects</p>
  <p>Project 1 of 10 - Digital Clock</p>
</div>