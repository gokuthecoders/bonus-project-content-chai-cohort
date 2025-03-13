# Random Quote Generator - Chai Cohort

<div align="center">
  <img src="https://img.shields.io/badge/Chai%20Cohort-BONUS-orange?style=for-the-badge" alt="Chai Cohort BONUS" />
  <img src="https://img.shields.io/badge/Project-4%20of%2010-blue?style=for-the-badge" alt="Project 4 of 10" />
  <img src="https://img.shields.io/badge/Skill-JavaScript%20Data%20Structures-brightgreen?style=for-the-badge" alt="JavaScript Data Structures" />
</div>

## 📝 Project Overview

This is the fourth project in the Chai Cohort BONUS series - a Random Quote Generator that displays inspirational quotes. The project demonstrates JavaScript data structures, DOM manipulation, event handling, and browser storage capabilities with a special emphasis on non-repeating quote selection using HashMap implementation.

## ✨ Features

- Elegant UI with hover effects and clean typography
- Non-repeating quote generation (won't show the same quote twice until all quotes are shown)
- Author attribution with each displayed quote
- Dark/Light mode toggle with localStorage persistence
- Custom CSS styling including animations and transitions
- Responsive design elements

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- Event Listeners
- Map Data Structure
- Browser Local Storage
- Conditional Rendering

## 🧠 Key Concepts Covered

- HashMap implementation with JavaScript Map object
- Non-repeating random selection algorithm
- Theme persistence with localStorage
- DOM manipulation for dynamic content updates
- Event handling for user interactions
- CSS transitions and hover effects
- State management using JavaScript

## 🎨 How It Works

### Non-Repeating Quote Generation
The application uses a JavaScript Map data structure to ensure that quotes don't repeat until all available quotes have been shown:

```javascript
function generateQuote(){
    // Initialize the Map with all quotes if it's empty or has only one item
    if(newMap.size <= 1){
        for (let i = 0; i < quotes.length; i++) {
            newMap.set(i, quotes[i])
        }
    }

    // Get all available quote indices
    const NumberOfItem = [];
    const itrator = newMap.keys();
    for (let i = 0; i < newMap.size; i++) {
        NumberOfItem.push(itrator.next().value)        
    }
    
    // Select a random quote from remaining options
    const randomIndex = Math.floor(Math.random() * NumberOfItem.length)
    const quote = newMap.get(NumberOfItem[randomIndex])
    
    // Display the quote and author
    quoteDisplay.innerText = quote.text
    author.innerHTML = `<b>${quote.author}</b>`
    
    // Remove the selected quote from the Map to prevent repetition
    newMap.delete(NumberOfItem[randomIndex])
}
```

This algorithm works by:
1. Initializing a Map with all available quotes if it's empty or almost empty
2. Creating an array of available quote indices from the Map keys
3. Randomly selecting one of the available indices
4. Displaying the selected quote and author
5. Removing the selected quote from the Map to prevent it from appearing again
6. When all quotes have been shown, the Map is repopulated for a new cycle

### Theme Switching with localStorage
The application implements a theme toggle feature with state persistence:

```javascript
// Check for saved theme preference on page load
if(localStorage.getItem("theme").toString() == "black"){
    document.body.style.backgroundColor = "black"
    checkBox.setAttribute('checked', 'fgd')
}

// Toggle theme and save preference
slider.addEventListener("click", () => {
    let isDark = localStorage.getItem("theme")
    
    if(isDark == null || isDark == undefined || isDark != "black"){
        localStorage.setItem("theme", "black")
        theme = localStorage.getItem("theme")
        document.body.style.backgroundColor = theme
    } else if(isDark == "black"){
        localStorage.setItem("theme", "white")
        document.body.style.backgroundColor = ''
    }
})
```

This implementation:
1. Checks for a saved theme preference when the page loads
2. Applies the saved theme automatically
3. Toggles between light and dark themes when the user clicks the slider
4. Saves the current theme preference to localStorage for persistence between sessions

## 🚀 Getting Started

1. Clone the repository
2. Open the `index.html` file in your browser
3. Click the "Generate Quote" button to display random quotes
4. Use the toggle switch to change between light and dark modes
5. Notice that quotes don't repeat until all have been shown

## 📁 Project Structure

```
random-quote-generator/
├── index.html      # HTML structure with quote generator interface
├── style.css       # Styling for the application UI
└── script.js       # JavaScript code for quote generation and theme switching
```

## 💡 Deep Dive: Map Data Structure

### Understanding JavaScript's Map Object
In this project, we use JavaScript's built-in Map object as a HashMap implementation:

- A Map is a collection of key-value pairs where keys can be of any type
- Unlike regular objects, Maps remember the original insertion order of the keys
- Maps have efficient methods for adding, retrieving and deleting elements

### How Our Implementation Works
Our implementation uses Map to track which quotes have been shown:

1. **Initialization**: We populate the Map with all quotes, using indices as keys
2. **Random Selection**: We extract all available keys and randomly select one
3. **Deletion After Use**: After showing a quote, we delete it from the Map
4. **Repopulation**: When all quotes have been shown, we repopulate the Map

This cycle ensures that:
- Each quote is shown exactly once per cycle
- The selection within each cycle is random
- All quotes will eventually be shown before any repeats occur

This approach is more sophisticated than simple random selection, which could result in the same quotes appearing multiple times while others never appear.

## 🔄 Possible Enhancements

- Add ability to search for quotes by author or keyword
- Implement quote categories and filtering options
- Add copy-to-clipboard functionality for quotes
- Enable social media sharing of favorite quotes
- Implement quote favoriting system
- Add animations for quote transitions
- Expand the quote database or connect to an external API
- Create additional theme options beyond light/dark
- Add quote of the day feature

## 🎓 Learning Outcomes

Through this project, you'll gain practical experience with:
- JavaScript's Map data structure and its methods
- Implementing non-repeating random selection algorithms
- Using localStorage for state persistence
- Building custom toggle switches with CSS
- Creating smooth transitions and hover effects
- Managing application state in JavaScript
- DOM manipulation for dynamic content updates

## 🤝 Contributing

Feel free to fork this project and add your own enhancements. Some ideas:
- Add more quotes to the collection
- Implement additional theme options
- Create more sophisticated animations
- Add functionality to load quotes from external APIs
- Implement quote categories and filtering

## 📜 License

This project is part of the Chai Cohort educational content.

---

<div align="center">
  <p>Made with ❤️ as part of Chai Cohort BONUS Projects</p>
  <p>Project 4 of 10 - Random Quote Generator</p>
</div>